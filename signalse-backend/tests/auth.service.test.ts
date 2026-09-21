import { authService } from "../services/auth.service";
import { userRepository } from "../repositories/user.repository";

jest.mock("../repositories/user.repository");

const mockedRepo = userRepository as jest.Mocked<typeof userRepository>;

const validUserData = {
  uid: "validFirebaseUID",
  name: "Ana",
  surname: "García",
  username: "ana_garcia",
  email: "ana@correo.com",
  password: "Password1",
  confirmPassword: "Password1",
  acceptTerms: true,
  acceptPrivacy: true,
};

const makeUser = (overrides = {}) => ({
  profile: {
    uid: "usr-001",
    name: "Ana",
    surname: "García",
    username: "ana_garcia",
    email: "ana@correo.com",
    status: "ACTIVE",
  },
  preferences: { pushNotifications: true, soundEffects: true },
  stats: {
    totalPoints: 0,
    xp: { total: 0, toNextLvl: 100, level: 1, today: 0 },
    streak: { current: 0, lastChallengeDate: new Date() },
    dailyStatsDate: new Date(),
    challengesToday: 0,
    signsLearnedToday: 0,
    totalSignsLearned: 0,
    trainingToday: 0,
    challenges: {
      totalCompleted: 0,
      totalHits: 0,
      totalMisses: 0,
      hitsPercentage: 0,
      missPercentage: 0,
    },
    trainings: { totalCompleted: 0 },
    goalsAwardedToday: [],
  },
  ...overrides,
});

describe("AuthService – registerUser", () => {
  beforeEach(() => {
    mockedRepo.findUserByEmail.mockResolvedValue(null);
    mockedRepo.findUserByUsername.mockResolvedValue(null);
    mockedRepo.createUser.mockResolvedValue(makeUser() as any);
  });

  test("PUAUTH01 – registrar usuario con datos válidos", async () => {
    const result = await authService.registerUser(validUserData);
    expect(result).toBeDefined();
    expect(mockedRepo.createUser).toHaveBeenCalledTimes(1);
  });

  test("PUAUTH02 – campos obligatorios vacíos lanza excepción", async () => {
    await expect(
      authService.registerUser({ ...validUserData, name: "" }),
    ).rejects.toThrow("errors.allFieldsMandatory");
  });

  test("PUAUTH03 – no aceptar términos lanza excepción", async () => {
    await expect(
      authService.registerUser({
        ...validUserData,
        acceptTerms: false,
        acceptPrivacy: false,
      }),
    ).rejects.toThrow("errors.mustAcceptTermsAndConditions");
  });

  test("PUAUTH04 – contraseñas que no coinciden lanza excepción", async () => {
    await expect(
      authService.registerUser({
        ...validUserData,
        confirmPassword: "Password2",
      }),
    ).rejects.toThrow("errors.passwordsDoNotMatch");
  });

  test("PUAUTH05 – contraseña con menos de 8 caracteres lanza excepción", async () => {
    await expect(
      authService.registerUser({
        ...validUserData,
        password: "Pass1",
        confirmPassword: "Pass1",
      }),
    ).rejects.toThrow("errors.weakPassword");
  });

  test("PUAUTH06 – contraseña sin números lanza excepción", async () => {
    await expect(
      authService.registerUser({
        ...validUserData,
        password: "PasswordA",
        confirmPassword: "PasswordA",
      }),
    ).rejects.toThrow("errors.weakPassword");
  });

  test("PUAUTH07 – contraseña sin letras mayúsculas lanza excepción", async () => {
    await expect(
      authService.registerUser({
        ...validUserData,
        password: "password1",
        confirmPassword: "password1",
      }),
    ).rejects.toThrow("errors.weakPassword");
  });

  test("PUAUTH08 – contraseña sin letras minúsculas lanza excepción", async () => {
    await expect(
      authService.registerUser({
        ...validUserData,
        password: "PASSWORD1",
        confirmPassword: "PASSWORD1",
      }),
    ).rejects.toThrow("errors.weakPassword");
  });

  test("PUAUTH09 – correo ya existente lanza excepción", async () => {
    mockedRepo.findUserByEmail.mockResolvedValue(makeUser() as any);
    await expect(
      authService.registerUser({
        ...validUserData,
        email: "existente@correo.com",
      }),
    ).rejects.toThrow("errors.emailAlreadyExists");
  });

  test("PUAUTH10 – nombre de usuario ya existente lanza excepción", async () => {
    mockedRepo.findUserByUsername.mockResolvedValue(makeUser() as any);
    await expect(
      authService.registerUser({
        ...validUserData,
        username: "usuario_existente",
      }),
    ).rejects.toThrow("errors.usernameAlreadyTaken");
  });
});

describe("AuthService – validateLogin", () => {
  test("PUAUTH11 – iniciar sesión con credenciales válidas devuelve usuario", async () => {
    const user = makeUser();
    mockedRepo.findUserByUID.mockResolvedValue(user as any);

    const result = await authService.validateLogin({
      uid: "usr-001",
      email: "ana@correo.com",
      password: "Password1",
    });

    expect(result).toBeDefined();
    expect(result.profile.uid).toBe("usr-001");
  });

  test("PUAUTH12 – campos vacíos lanza excepción de validación", async () => {
    await expect(
      authService.validateLogin({ uid: "uid", email: "", password: "" }),
    ).rejects.toThrow("errors.allFieldsMandatory");
  });
});
