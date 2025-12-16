import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // If navigation included a hash (anchor), try to scroll to that element.
    if (hash) {
      // small timeout to allow page render
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        // fallback to top if anchor not found
        // set both for maximum compatibility
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 0);
      prevPathRef.current = pathname;
      return;
    }

    // Only run on pathname changes (not on same-path hash updates)
    if (prevPathRef.current !== pathname) {
      // delay slightly to allow UI (menu close / layout shifts) to finish
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 50);
      prevPathRef.current = pathname;
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;