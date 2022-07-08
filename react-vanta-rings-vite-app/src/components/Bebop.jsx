import {css} from '@emotion/css';
import {useState, useEffect, useRef} from 'react';
import RINGS from 'vanta/dist/vanta.rings.min';
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
    const vantaEffect = RINGS({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x2c3239,
      color: 0x8df714,
      backgroundAlpha: 0.99,
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
          color: white;
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
