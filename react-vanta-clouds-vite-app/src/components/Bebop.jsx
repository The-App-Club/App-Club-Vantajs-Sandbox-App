import {css} from '@emotion/css';
import {useState, useEffect, useRef} from 'react';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
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
    const vantaEffect = CLOUDS({
      el: vantaRef.current,
      THREE,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: 200.0,
      backgroundColor: 0xfaf6f6,
      skyColor: 0x6cbcdc,
      cloudColor: 0xacc2e1,
      cloudShadowColor: 0x1a3957,
      sunColor: 0xfa981e,
      sunGlareColor: 0xfa602d,
      sunlightColor: 0xf79431,
      speed: 0.9, // 0 <<< 3
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
