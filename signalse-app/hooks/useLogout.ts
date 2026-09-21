import { authService } from "../model/services/auth.service";

export function useLogout() {
  const handleLogout = async () => {
    const result = await authService.logout();
    await authService.setRememberMe(false);
    if (!result.ok) {
      console.error("Error al cerrar sesión", result.message);
    }
  };

  return handleLogout;
}
