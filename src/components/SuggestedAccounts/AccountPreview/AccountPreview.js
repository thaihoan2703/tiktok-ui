import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <img
                    className={cx("avatar")}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a454aa795bdb1a9970cc2106321360e6.jpeg?x-expires=1687269600&x-signature=oyjhcfvfA8t%2FO0qDw8MloEEctY8%3D"
                    alt=""
                ></img>
                <Button className={cx("follow-btn")} primary>
                    Follow
                </Button>
            </div>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>60giay.com</strong>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx("name")}>60giay.com</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>1.2M </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>8.2M </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
