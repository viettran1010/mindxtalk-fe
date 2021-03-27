import styles from './Login.module.scss';
import classnames from 'classnames/bind';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { loginService } from '../../services';
import { browserHistory } from '../../App';
const cx = classnames.bind(styles);
const Login = () => {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = async () => {
    if (username && password) {
      const res = await loginService.login(username, password);
      console.log(res);
      if (res && res.access_token) {
        browserHistory.push('/');
      }
    }
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('header')}>LOGIN</div>
        <Input
          className={cx('input')}
          type="email"
          placeholder="Username or Email"
          onChange={(event) => setUserName(event.target.value)}
        />
        <Input.Password
          className={cx('input')}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button className={cx('signin-btn')} onClick={() => onLogin()}>
          SIGN IN
        </Button>
      </div>
    </div>
  );
};
export default Login;
