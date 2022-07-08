import {css} from '@emotion/css';
import {useState, useEffect, useRef} from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

const Bebop = () => {
  const [resized, setResized] = useState(null);

  const vantaRef = useRef(null);

  const handleResize = (e) => {
    console.log(e);
    setResized(new Date());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const vantaEffect = FOG({
      el: vantaRef.current,
      THREE,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: 200.0,
      highlightColor: 0xf4bfbf,
      midtoneColor: 0xffd9c0,
      lowlightColor: 0x8cc0de,
      baseColor: 0x8cc0de,
      blurFactor: 0.8, // 0 <<< 0.9
      zoom: 1.25, // 0 <<< 3
      speed: 1.5, // 0 <<< 5
    });

    return () => {
      vantaEffect.destroy();
    };
  }, [resized]);

  return (
    <div
      ref={vantaRef}
      className={css`
        position: relative;
        width: 100%;
        height: 100%;
      `}
    >
      <p
        className={css`
          font-size: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 3vh 0 0;
          @media (max-width: 768px) {
            font-size: 1.3rem;
          }
        `}
      >
        Welcome to cowboy bebop.
      </p>
    </div>
  );
};

export {Bebop};
