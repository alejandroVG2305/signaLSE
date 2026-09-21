import { useState } from "react";

export default function useModal() {
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setError(null);
    }, 400);
  };

  const showError = (errorMessage: string) => {
    setError(errorMessage);
    setTimeout(() => {
      setShowModal(true);
    }, 300);
    return;
  };

  return {
    error,
    setError,
    showModal,
    setShowModal,
    closeModal,
    showError,
  };
}
