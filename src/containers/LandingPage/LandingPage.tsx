import styles from './LandingPage.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const LandingPage = () => {
  return (
    <div className={cx('landing-page')}>
      <div className={cx('wrapper')}>
        <div className={cx('board-wrapper')}>
          <div className={cx('board')}>
            <div className={cx('title')}>
              Interviewing: the most profitable skill you can learn
            </div>
            <div className={cx('content')}>
              Don't miss out on a great job opportunity Practice live interviews
              with peers
            </div>
            <button className={cx('register')}>
              Start Practing. It's Free
            </button>
            <div className={cx('description')}>
              MindXTalk is safe and anonymous, your data is yours
            </div>
          </div>
        </div>
        <div className={cx('hero-section')}>
          <div className={cx('brand')}>Forbes</div>
          <div className={cx('brand')}>Silicon Valley</div>
          <div className={cx('brand')}>MindX</div>
          <div className={cx('brand')}>Iliat</div>
        </div>
      </div>
      <div className={cx('test-section')}>
        <div className={cx('container')}>
          <div className={cx('title')}>How Pramp Practicing Works</div>
          <div className={cx('content')}>
            <div className={cx('column-content')}>
              <div className={cx('number')}>1</div>
              <div className={cx('category')}>Get Paired</div>
              <div className={cx('description')}>
                Tell us when and what you want to practice and we’ll pair you
                with an optimal peer. We provide interview questions and a
                collaborative environment for you to conduct the interview.
              </div>
            </div>
            <div className={cx('column-content')}>
              <div className={cx('number')}>2</div>
              <div className={cx('category')}>Practice</div>
              <div className={cx('description')}>
                Interviews are conducted using a collaborative environment over
                video. You and your peer will interview each other for 30-45
                minutes. After the interview, you’ll each provide feedback on to
                help each other improve.
              </div>
            </div>
            <div className={cx('column-content')}>
              <div className={cx('number')}>3</div>
              <div className={cx('category')}>Ace It</div>
              <div className={cx('description')}>
                Learn from peers’ feedback, gain confidence and master the art
                of interviewing. Keep practicing until you interview like a rock
                star. Impress recruiters and land awesome job offers.
              </div>
            </div>
          </div>
          <button className={cx('register')}>
              Start Practing
            </button>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
