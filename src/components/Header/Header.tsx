import { Layout, Menu } from 'antd';
import styles from './Header.module.scss';
import classnames from 'classnames/bind';
import { browserHistory } from '../../App';
import { routeConstants, THEME_MODE } from '../../constants';
import { useEffect, useState } from 'react';
const cx = classnames.bind(styles);
const Header = () => {
  const { Header } = Layout;
  const [theme, setTheme] = useState<any>(THEME_MODE.LIGHT_MODE);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('mode')) {
        setTheme(localStorage.getItem('mode'));
      } else {
        localStorage.setItem('mode', theme);
      }
    }
    // eslint-disable-next-line
  }, [localStorage.getItem('mode'), theme]);
  const toggleMode = (theme: string) => {
    setTheme(
      theme === THEME_MODE.LIGHT_MODE
        ? THEME_MODE.DARK_MODE
        : THEME_MODE.LIGHT_MODE,
    );
    localStorage.setItem(
      'mode',
      theme === THEME_MODE.LIGHT_MODE
        ? THEME_MODE.DARK_MODE
        : THEME_MODE.LIGHT_MODE,
    );
  };
  useEffect(() => {
    handleThemeChanging(theme);
  }, [theme]);
  const handleThemeChanging = (theme: string) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', THEME_MODE.DARK_MODE);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };
  return (
    <Layout>
      <Header className={cx('header')}>
        <Menu mode="horizontal" className={cx('menu')}>
          <Menu.Item
            className={cx('menu-item')}
            onClick={() => browserHistory.push('/')}
          >
            HOME
          </Menu.Item>
          <Menu.Item
            className={cx('menu-item')}
            onClick={() => browserHistory.push(routeConstants.ROUTE_LOGIN)}
          >
            LOGIN
          </Menu.Item>
        </Menu>
        <div
          className={cx('menu-item', 'mode')}
          onClick={() => toggleMode(theme)}
        >
          {theme === THEME_MODE.DARK_MODE ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </div>
      </Header>
    </Layout>
  );
};
export default Header;
