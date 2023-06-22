import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import * as suggestedAccountService from "~/services/suggestedAccountsService";

import styles from "./SuggestedAccounts.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, ...passProps }) {
    const [seeAll, setSeeAll] = useState(false);
    const [suggests, setSuggests] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            if (!seeAll) {
                const result = await suggestedAccountService.suggest(1, 5);
                setSuggests(result);
            } else {
                const result = await suggestedAccountService.suggest(1, 16);
                setSuggests(result);
            }
        };

        fetchAPI();
    }, [seeAll]);
    return (
        <div className={cx("wrapper")}>
            <p className={cx("label")}>{label}</p>
            {suggests.map((suggest) => {
                return (
                    <AccountItem key={suggest.id} data={suggest}></AccountItem>
                );
            })}

            {seeAll ? (
                <div
                    className={cx("more-btn")}
                    onClick={() => setSeeAll(false)}
                >
                    See less
                </div>
            ) : (
                <div className={cx("more-btn")} onClick={() => setSeeAll(true)}>
                    See all
                </div>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
