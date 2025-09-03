export function getUser() {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(localStorage.getItem('user') || '{}');
  } catch {
    return null;
  }
}

export function requireRole(requiredRole) {
  if (typeof window === 'undefined') return null;
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user.role !== requiredRole) {
    window.location.href = '/announcements/dashboard/login';
  }
  return user;
}
