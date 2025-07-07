import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="text-xl font-mono bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      {time.toLocaleTimeString('fr-FR')}
    </span>
  );
}