// Inline script to set theme before first paint — prevents flash
export function ThemeScript() {
  const script = `
    (function() {
      try {
        var t = localStorage.getItem('theme');
        var preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', t || preferred);
      } catch(e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
