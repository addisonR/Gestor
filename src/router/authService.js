export async function isLoggedIn() {
  const url = "http://localhost:3000";
  try {
    const response = await fetch(`${url}/api/check-session`);
    const result = await response.json();
    return result.authenticated;
  } catch (error) {
    return false;
  }
}
