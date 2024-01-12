'use client'

import { useEffect, useState } from 'react';

export default function BrowserTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    themeColorMetaTag.setAttribute('content', isDark ? '#000000' : '#ffffff');
  }, [isDark]);

  return null; 
}