import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../firebase-config";
import { authService, authSync } from "../model/services/auth.service";

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

// Module-level (not component state) so it survives a Provider remount
// (e.g. Fast Refresh touching a file that re-renders this tree) within the
// same app process. It should only ever gate the persisted session found on
// a genuine cold start, never a sign-in that just happened in this session.
let hasCheckedPersistedSession = false;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    authSync.forceContextUpdate = () => {
      if (auth.currentUser) {
        setUser(auth.currentUser);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (authSync.isRegistering) {
        return; // Ignore autoLogin while registering
      }

      if (firebaseUser) {
        if (!hasCheckedPersistedSession) {
          const rememberMe = await authService.getRememberMe();
          if (rememberMe === "false") {
            hasCheckedPersistedSession = true;
            await signOut(auth);
            setUser(null);
            setIsLoading(false);
            return;
          }
        }
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
      hasCheckedPersistedSession = true;
      setIsLoading(false);
    }); // onAuthStateChanged returns a function "to cancel"
    return unsubscribe; // avoids memory leaks in case component disappears
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
