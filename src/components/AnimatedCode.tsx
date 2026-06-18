import { useEffect, useMemo, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface AnimatedCodeProps {
  code: string;
  language?: string;
}

function AnimatedCode({ code, language = 'typescript' }: AnimatedCodeProps) {
  const [shown, setShown] = useState('');
  const characters = useMemo(() => Array.from(code), [code]);

  useEffect(() => {
    setShown('');
    let currentIndex = 0;
    const interval = window.setInterval(() => {
      setShown((prev) => prev + characters[currentIndex]);
      currentIndex += 1;
      if (currentIndex >= characters.length) {
        window.clearInterval(interval);
      }
    }, 16);

    return () => window.clearInterval(interval);
  }, [characters]);

  return (
    <div className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-6 shadow-glow">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{ borderRadius: '1.25rem', margin: 0, background: '#020617', minHeight: '300px' }}
        showLineNumbers={false}
      >
        {shown || code.substring(0, 1)}
      </SyntaxHighlighter>
    </div>
  );
}

export default AnimatedCode;

