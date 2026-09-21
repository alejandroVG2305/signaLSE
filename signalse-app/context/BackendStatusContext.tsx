import React, { createContext, useContext, useEffect, useState } from "react";
import { backendStatusSync } from "../model/services/api/api-client";

type BackendStatusContextType = {
  backendDown: boolean;
};

const BackendStatusContext = createContext<BackendStatusContextType>({
  backendDown: false,
});

export function BackendStatusProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [backendDown, setBackendDown] = useState(false);

  useEffect(() => {
    backendStatusSync.reportDown = () => setBackendDown(true);
    backendStatusSync.reportUp = () => setBackendDown(false);
  }, []);

  return (
    <BackendStatusContext.Provider value={{ backendDown }}>
      {children}
    </BackendStatusContext.Provider>
  );
}

export const useBackendStatus = () => useContext(BackendStatusContext);
