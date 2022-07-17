import {css} from '@emotion/css';
import {useState, useEffect, useRef} from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
const Bebop = ({imageURL = `https://picsum.photos/seed/${323}/2920/1000`}) => {
  const [resized, setResized] = useState(null);

  const vantaRef = useRef(null);

  const handleResize = (e) => {
    // console.log(e);
    setResized(new Date());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const vantaEffect = BIRDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: window.innerHeight,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x91b31,
      color1: 0xeb7878,
      color2: 0x51d5f2,
      birdSize: 2.3,
      cohesion: 16.0,
      quantity: 2.0,
    });

    return () => {
      vantaEffect.destroy();
    };
  }, [resized]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        min-height: 100vh;
      `}
    >
      <img
        className={css`
          display: block;
          position: absolute;
          top: 1rem;
          left: 0;
          width: 100%;
          height: 100vh;
          object-fit: contain;
        `}
        src={imageURL}
        alt={``}
      />
      <div
        ref={vantaRef}
        className={css`
          z-index: -1;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 100vh;
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
    </div>
  );
};

export {Bebop};
