import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src="" alt="UserName"></img>
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    NguyenThiLoan
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx("check")}
                    ></FontAwesomeIcon>
                </h4>
                <span className={cx("userName")}>loannguyen</span>
            </div>
        </div>
    );
}

export default AccountItems;
