import { useEffect, useState } from "react";
import useLoading from "../hooks/useLoading";
import useModal from "../hooks/useModal";
import { userService } from "../model/services/user.service";
import { Result } from "../model/result";
import { UpdateSuccessResponse } from "../model/user.model";
import { UserStats } from "../model/domain/users/userStats";

export type ProfileTab = "profile" | "statistics";

export default function useProfileViewModel() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("profile");
  const [selectedAvatar, setSelectedAvatar] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<Date | string>("");
  const [pushNotifications, setPushNotifications] = useState<boolean>(false);
  const [soundEffects, setSoundEffects] = useState<boolean>(false);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [signsToLearn, setSignsToLearn] = useState<number | null>(null);

  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

  const { isLoading, withLoading } = useLoading();
  const modal = useModal();

  const toggleSoundEffects = () => {
    setSoundEffects(!soundEffects);
  };

  const togglePushNotifications = () => {
    setPushNotifications(!pushNotifications);
  };

  const saveProfile = async (): Promise<Result<UpdateSuccessResponse>> => {
    const steps = [
      userService.updateAvatar({ avatar: selectedAvatar }),
      userService.updateUsername({ username }),
      userService.updateProfileName({ name, surname }),
      userService.updatePreferences({ pushNotifications, soundEffects }),
    ];

    withLoading(async () => {
      for (const step of steps) {
        const result = await step;
        if (!result.ok) {
          modal.showError(result.message);
          return result;
        }
      }
      setShowSuccessDialog(true);
    });

    return { ok: true, data: { success: true, message: "" } };
  };

  const fetchAuthUserData = async (): Promise<void> => {
    withLoading(async () => {
      const result = await userService.getAuthenticatedUserInfo();
      if (result.ok) {
        setSelectedAvatar(result.data.profile.avatar!);
        setUsername(result.data.profile.username!);
        setName(result.data.profile.name!);
        setSurname(result.data.profile.surname!);
        setCreatedAt(result.data.profile.createdAt!);
        setPushNotifications(result.data.preferences.pushNotifications!);
        setSoundEffects(result.data.preferences.soundEffects!);
      } else {
        modal.showError(result.message);
      }
    });
  };

  const fetchStats = async (): Promise<void> => {
    withLoading(async () => {
      const result = await userService.getAuthenticatedUserStats();
      if (result.ok) {
        setUserStats(result.data);
      } else {
        modal.showError(result.message);
      }
    });
  };

  const fetchSignsToLearn = async (): Promise<void> => {
    withLoading(async () => {
      const result = await userService.getSignsToLearn();
      if (result.ok) {
        setSignsToLearn(result.data);
      } else {
        modal.showError(result.message);
      }
    });
  };

  useEffect(() => {
    fetchAuthUserData();
    fetchStats();
    fetchSignsToLearn();
  }, []);

  return {
    isLoading,
    activeTab,
    setActiveTab,
    saveProfile,
    showSuccessDialog,
    closeSuccessDialog: () => setShowSuccessDialog(false),
    togglePushNotifications,
    toggleSoundEffects,
    pushNotifications,
    soundEffects,
    username,
    setUsername,
    name,
    setName,
    surname,
    setSurname,
    selectedAvatar,
    setSelectedAvatar,
    createdAt,
    modal,
    userStats,
    signsToLearn,
  };
}
