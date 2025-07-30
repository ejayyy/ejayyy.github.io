'use client';

import { useEffect, useRef } from 'react';

interface UtterancesProps {
  repo: string;
  issueTerm?: string;
  label?: string;
}

export default function Utterances({ 
  repo, 
  issueTerm = 'pathname',
  label = 'comment'
}: UtterancesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any existing utterances
    const existingScript = containerRef.current.querySelector('.utterances');
    if (existingScript) {
      existingScript.remove();
    }

    // Detect current theme
    const isDark = document.documentElement.classList.contains('dark');
    const theme = isDark ? 'github-dark' : 'github-light';

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', repo);
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('label', label);
    script.setAttribute('theme', theme);
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    containerRef.current.appendChild(script);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isDarkNow = document.documentElement.classList.contains('dark');
          const newTheme = isDarkNow ? 'github-dark' : 'github-light';
          
          // Send theme change message to utterances iframe
          const utterancesFrame = document.querySelector('iframe.utterances-frame') as HTMLIFrameElement;
          if (utterancesFrame) {
            utterancesFrame.contentWindow?.postMessage(
              { type: 'set-theme', theme: newTheme },
              'https://utteranc.es'
            );
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      observer.disconnect();
      // Cleanup function to remove script when component unmounts
      if (containerRef.current) {
        const scriptToRemove = containerRef.current.querySelector('script[src="https://utteranc.es/client.js"]');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      }
    };
  }, [repo, issueTerm, label]);

  return <div ref={containerRef} className="mt-8" />;
} 