import './Home.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import WaveEffect from './WaveEffect/WaveEffect';

const STRINGS = ['Hi,', `I'm Jock,`, 'web developer.'];
const START_IDX = 10;

const getStartingIdx = (strIdx) => {
  let idx = START_IDX;
  for (let i = 0; i < strIdx; i++) {
    idx += STRINGS[i].length;
  }
  return idx;
};

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          {STRINGS.map((str, strIdx) => (
            <span key={strIdx}>
              <AnimatedLetters
                delay={4000}
                str={str}
                idx={getStartingIdx(strIdx)}
              />
              {strIdx !== STRINGS.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <h2>Frontend Developer / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <WaveEffect />
    </div>
  );
};

export default Home;
