import AppForm from "../app-form/AppForm";
import { styles } from "./signup-form-styles";
import useSignupViewModel from "../../../viewmodels/useSignupViewModel";
import { View } from "react-native";
import AppPaginationDots from "../../app-pagination-dots/AppPaginationDots";
import PersonalDataForm from "./PersonalDataForm";
import CredentialsForm from "./CredentialsForm";

export interface SignupFormProps {
  viewModel: ReturnType<typeof useSignupViewModel>;
}

export default function SignupForm({ viewModel }: SignupFormProps) {
  return (
    <AppForm style={styles.signUpForm}>
      <View style={styles.dots}>
        <AppPaginationDots
          totalDots={viewModel.N_STEPS}
          activeDot={viewModel.step}
        ></AppPaginationDots>
      </View>
      {viewModel.step === 1 ? (
        <PersonalDataForm
          name={viewModel.name}
          surname={viewModel.surname}
          username={viewModel.username}
          isLoading={viewModel.isLoading}
          onNameChange={viewModel.setName}
          onSurnameChange={viewModel.setSurname}
          onUsernameChange={viewModel.setUsername}
          onNextPress={viewModel.stepForward}
        />
      ) : (
        <CredentialsForm viewModel={viewModel} />
      )}
    </AppForm>
  );
}
