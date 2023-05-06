import styles from "./DefaultLayout.module.scss";
import Header from "~/components/Layout/components/Header";
import SideBar from "./Sidebar";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <SideBar />
          <div className={cx("contents")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
