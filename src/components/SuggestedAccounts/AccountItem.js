import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import AccountPreview from "./AccountPreview/AccountPreview";
import Image from "../Image/Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div className={cx("")} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <Link to={`/@${data?.nickname}`} state={data}>
                        <AccountPreview data={data} />
                    </Link>
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
                <Link to={`/@${data?.nickname}`} state={data}>
                    <div className={cx("account-item")}>
                        <Image
                            className={cx("avatar")}
                            src={data?.avatar}
                            alt={data?.avatar}
                        ></Image>
                        <div className={cx("item-info")}>
                            <p className={cx("nickname")}>
                                <strong>{data.nickname}</strong>
                                {data?.tick && (
                                    <FontAwesomeIcon
                                        className={cx("check")}
                                        icon={faCheckCircle}
                                    />
                                )}
                            </p>
                            <p className={cx("name")}>
                                {data?.full_name ||
                                    `${data?.first_name} ${data?.last_name}`}
                            </p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
