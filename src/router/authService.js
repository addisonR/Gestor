export function isLoggedIn() {
  const token = localStorage.getItem("access-point");
  if (token === null) {
    return false;
  }
  // La verificación real debería incluir si el token no ha expirado
  return true; // Devuelve true si el token existe, false si no
}
