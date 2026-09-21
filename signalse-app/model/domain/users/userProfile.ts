export interface UserProfile {
  firebaseUid: string;
  name?: string;
  surname?: string;
  username?: string;
  email: string;
  avatar?: string;
  createdAt?: Date;
  status: string;
}
