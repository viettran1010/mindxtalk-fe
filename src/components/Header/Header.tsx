import { Layout, Menu } from "antd";
import styles from "./Header.module.scss";
import classnames from "classnames/bind";
import { browserHistory } from "../../App";
import { routeConstants } from "../../constants";

const cx = classnames.bind(styles);
const Header = () => {
  const { Header } = Layout;
  return (
    <Layout>
      <Header className={cx("header")}>
        <Menu mode="horizontal" className={cx("menu")}>
          <Menu.Item
            className={cx("menu-item")}
            onClick={() => browserHistory.push("/")}
          >
            HOME
          </Menu.Item>
          <Menu.Item
            className={cx("menu-item")}
            onClick={() => browserHistory.push(routeConstants.ROUTE_LOGIN)}
          >
            LOGIN
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};
export default Header;
