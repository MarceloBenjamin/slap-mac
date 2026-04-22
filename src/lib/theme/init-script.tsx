const SCRIPT = `(function(){try{var d=document.documentElement;if(d.getAttribute('data-theme'))return;var m=window.matchMedia('(prefers-color-scheme: dark)').matches;d.setAttribute('data-theme',m?'dark':'light');}catch(e){}})();`;

export function ThemeInitScript() {
  return (
    <script
      id="theme-init"
      dangerouslySetInnerHTML={{ __html: SCRIPT }}
    />
  );
}
