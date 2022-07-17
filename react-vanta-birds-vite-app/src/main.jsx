import {css} from '@emotion/css';
import {createRoot} from 'react-dom/client';
import '@fontsource/inter';
import './styles/index.scss';

import {Bebop} from './components/Bebop';

const App = () => {
  return (
    <div
      className={css`
        max-width: 100%;
        width: 100%;
        height: 100%;
      `}
    >
      <header
        className={css`
          max-width: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          font-size: 4rem;
        `}
      >
        Hello
      </header>
      <main
        className={css`
          max-width: 100%;
          width: 100%;
          height: 100%;
        `}
      >
        <article>
          <section>
            <div
              className={css`
                max-width: 100%;
                width: 100%;
                height: 100%;
              `}
            >
              <Bebop imageURL={`https://picsum.photos/seed/${323}/2920/1000`} />
            </div>
          </section>
          <section>
            <div
              className={css`
                max-width: 100%;
                width: 100%;
                height: 100%;
              `}
            >
              <Bebop imageURL={`https://picsum.photos/seed/${423}/2920/1000`} />
            </div>
          </section>
          <section>
            <div
              className={css`
                max-width: 100%;
                width: 100%;
                height: 100%;
              `}
            >
              <Bebop imageURL={`https://picsum.photos/seed/${523}/2920/1000`} />
            </div>
          </section>
        </article>
      </main>
      <footer
        className={css`
          max-width: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          font-size: 4rem;
        `}
      >
        Bye
      </footer>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
