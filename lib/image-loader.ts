export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith('http') || src.startsWith('data:')) return src;
  const base = process.env.NODE_ENV === 'production' ? '/AstroAnkush' : '';
  return `${base}${src.startsWith('/') ? src : '/' + src}`;
}
