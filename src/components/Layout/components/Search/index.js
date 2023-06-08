import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import {
    faSpinner,
    faCircleXmark,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import * as request from "~/utils/request";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const deBounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!deBounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        request
            .get(`users/search`, {
                params: {
                    q: deBounced,
                    type: "less",
                },
            })
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [deBounced]);

    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSearchValue = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(" ")) {
            setSearchValue(searchValue);
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                placement="bottom"
                visible={showResult && searchResult.length > 0}
                render={(sttrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...sttrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        className=""
                        value={searchValue}
                        placeholder="Search accounts or videos"
                        spellCheck={false}
                        onChange={handleSearchValue}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    ></input>
                    {!!searchValue && !loading && (
                        <button
                            className={cx("clear")}
                            onClick={() => {
                                handleClear();
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                            ></FontAwesomeIcon>
                        </button>
                    )}
                    {loading && (
                        <button className={cx("loading")}>
                            <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                        </button>
                    )}
                    <button
                        className={cx("search-btn")}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
