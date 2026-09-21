import { User } from "../domain/user";
import { userRepository } from "../repositories/user.repository";

// Service interface
export const authService = {
  registerUser: async (userData: any): Promise<User> => {
    checkRegistrationFieldsAreNotEmpty(userData);
    checkTermsAndPolicyAccepted(userData.acceptTerms, userData.acceptPrivacy);
    checkPasswordsMatch(userData.password, userData.confirmPassword);
    checkPasswordComplexity(userData.password);
    await checkEmailExists(userData.email);
    await checkUsernameExists(userData.username);

    const newUser: Partial<User> = {
      profile: {
        uid: userData.uid,
        name: userData.name,
        surname: userData.surname,
        username: userData.username,
        email: userData.email,
        status: "ACTIVE",
      },
    };
    try {
      const savedUser = await userRepository.createUser(newUser);
      return savedUser;
    } catch (error) {
      throw new Error("errors.serverInternalError");
    }
  },

  validateLogin: async (userData: any): Promise<User> => {
    checkFieldsAreNotEmpty(userData, ["email", "password"]);
    const user = await handleGhostUser(userData);
    checkUidMatchesToken(user, userData.uid);
    try {
      return user;
    } catch (error) {
      throw new Error("errors.serverInternalError");
    }
  },

  completeUserInfo: async (userData: any): Promise<boolean> => {
    checkFieldsAreNotEmpty(userData, ["name", "surname", "username"]);
    await checkUsernameExists(userData.username);
    const user = await userRepository.findUserByUID(userData.uid);
    if (user) {
      const userNewData: Partial<User> = {
        profile: {
          username: userData.username,
          name: userData.name,
          surname: userData.surname,
          email: user.profile.email,
          status: "ACTIVE",
          uid: userData.uid,
        },
      };
      try {
        return await userRepository.updateUserByUID(userNewData);
      } catch (error) {
        throw new Error("errors.serverInternalError");
      }
    }
    throw new Error("errors.emailDoesNotExist");
  },
};

// Login rules
const handleGhostUser = async (userData: any): Promise<User> => {
  const user = await userRepository.findUserByUID(userData.uid);
  if (user === null) {
    const newUser: Partial<User> = {
      profile: {
        uid: userData.uid,
        email: userData.email,
        status: "INCOMPLETE",
      },
    };
    try {
      const savedUser = await userRepository.createUser(newUser);
      return savedUser;
    } catch (error) {
      throw new Error("errors.serverInternalError");
    }
  }
  return user as User;
};

const checkUidMatchesToken = (user: User, uid: string): void => {
  if (user.profile.uid !== uid) {
    throw new Error("errors.tokenDoesNotMatch");
  }
};

// SignupRules
const checkRegistrationFieldsAreNotEmpty = (userData: any): void => {
  const requiredKeys = [
    "uid",
    "name",
    "surname",
    "username",
    "email",
    "password",
    "confirmPassword",
  ];

  checkFieldsAreNotEmpty(userData, requiredKeys);

  if (
    userData.acceptTerms === undefined ||
    userData.acceptPrivacy === undefined
  ) {
    throw new Error("errors.allFieldsMandatory");
  }
};

const checkTermsAndPolicyAccepted = (
  acceptTerms: boolean,
  acceptPrivacy: boolean,
) => {
  if (!acceptTerms || !acceptPrivacy) {
    throw new Error("errors.mustAcceptTermsAndConditions");
  }
};

const checkPasswordsMatch = (password: string, confirmPassword: string) => {
  if (password !== confirmPassword) {
    throw new Error("errors.passwordsDoNotMatch");
  }
};

const checkPasswordComplexity = (password: string) => {
  if (
    password.length < 8 ||
    !/[0-9]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password)
  ) {
    throw new Error("errors.weakPassword");
  }
};

const checkEmailExists = async (email: string) => {
  let emailExists = null;
  try {
    emailExists = await userRepository.findUserByEmail(email);
  } catch (error) {
    throw new Error("errors.serverInternalError");
  }
  if (emailExists !== null) {
    throw new Error("errors.emailAlreadyExists");
  }
};

const checkUsernameExists = async (username: string) => {
  const usernameExists = await userRepository.findUserByUsername(username);
  if (usernameExists) {
    throw new Error("errors.usernameAlreadyTaken");
  }
};

// General rules
const checkFieldsAreNotEmpty = (
  userData: any,
  requiredKeys: Array<string>,
): void => {
  requiredKeys.forEach((key) => {
    const value = userData[key];
    if (!value || String(value).trim() === "") {
      throw new Error("errors.allFieldsMandatory");
    }
  });
};
