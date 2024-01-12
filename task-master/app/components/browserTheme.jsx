'use client'

import { useEffect, useState } from 'react';

export default function BrowserTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    themeColorMetaTag.setAttribute('content', isDark ? '#000000' : '#ffffff');
  }, [isDark]);

  // You can expose isDark and setIsDark through context or props if needed elsewhere

  return null; // This component does not render anything
}