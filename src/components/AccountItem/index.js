import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItems() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1683640800&x-signature=cfxoaxJWAXryzVee7DFCrzo0q%2Fw%3D"
        alt="UserName"
      ></img>
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
