import PropTypes from "prop-types";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import styles from "./ReportAction.module.scss";

const cx = classNames.bind(styles);

function ReportAction({ children }) {
    return (
        <div>
            <HeadlessTippy
                interactive
                placement="bottom"
                delay={[700, 0]}
                offset={[40, 30]}
                zIndex="99"
                render={(attrs) => {
                    <div tabIndex="-1" {...attrs}>
                        <PopperWrapper
                            className={cx("wrapper")}
                        ></PopperWrapper>
                    </div>;
                }}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}
ReportAction.propTypes = {
    children: PropTypes.object.isRequired,
};
export default ReportAction;
