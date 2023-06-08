import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "~/components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItems({ data }) {
    return (
        <Link to={`/profile/@${data.nickname}`} className={cx("wrapper")}>
            <Image
                className={cx("avatar")}
                src={data.avatar}
                alt={data.full_name}
            ></Image>
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx("check")}
                        ></FontAwesomeIcon>
                    )}
                </h4>
                <span className={cx("userName")}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItems;
