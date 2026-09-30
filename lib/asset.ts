export function asset(path: string | undefined | null): string {
  if (!path) return '';
  
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/AstroAnkush' : '';

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (isProd && (cleanPath === '/AstroAnkush' || cleanPath.startsWith('/AstroAnkush/'))) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}
