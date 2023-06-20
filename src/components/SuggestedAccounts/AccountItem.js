import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx("")} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[700, 0]}
                offset={[0, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx("account-item")}>
                    <img
                        className={cx("avatar")}
                        src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a454aa795bdb1a9970cc2106321360e6.jpeg?x-expires=1687269600&x-signature=oyjhcfvfA8t%2FO0qDw8MloEEctY8%3D"
                        alt=""
                    ></img>
                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>60giay.com</strong>
                            <FontAwesomeIcon
                                className={cx("check")}
                                icon={faCheckCircle}
                            />
                        </p>
                        <p className={cx("name")}>60giay.com</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
