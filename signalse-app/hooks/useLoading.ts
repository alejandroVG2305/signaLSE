import { useState } from "react";

export default function useLoading() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const withLoading = async <T>(fn: () => Promise<T>): Promise<T> => {
    setIsLoading(true);
    try {
      return await fn();
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, withLoading };
}
