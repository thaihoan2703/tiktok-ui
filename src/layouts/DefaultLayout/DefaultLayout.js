import PropTypes from "prop-types";
import styles from "./DefaultLayout.module.scss";
import Header from "~/layouts/components/Header";
import SideBar from "~/layouts/components/Sidebar";

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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
