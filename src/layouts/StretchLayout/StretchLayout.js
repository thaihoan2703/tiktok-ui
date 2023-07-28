import PropTypes from "prop-types";
import styles from "./StretchLayout.module.scss";
import Header from "~/layouts/components/Header";
import SideBar from "~/layouts/components/Sidebar";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function StretchLayout({ children }) {
    return (
        <div>
            <Header stretch />
            <div className={cx("wrapper")}>
                <div className={cx("container")}>
                    <SideBar shrink />
                    <div className={cx("contents")}>{children}</div>
                </div>
            </div>
        </div>
    );
}

StretchLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StretchLayout;
