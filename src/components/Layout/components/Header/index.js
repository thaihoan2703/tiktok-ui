import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faQuestionCircle,
    faSearch,
    faSignIn,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: "English",
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>,
        title: "Feedback and help",
        to: "/feddback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")} alt="Tiktok">
                    <img src={images.logo}></img>
                </div>
                <Tippy
                    interactive
                    placeholder="bottom-end"
                    visible={searchResult.length > 0}
                    render={(sttrs) => (
                        <div
                            className={cx("search-result")}
                            tabIndex="-1"
                            {...sttrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input
                            className=""
                            placeholder="Search accounts or videos"
                            spellCheck={false}
                        ></input>
                        <button className={cx("clear")}>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                            ></FontAwesomeIcon>
                        </button>
                        <button className={cx("loading")}>
                            <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                        </button>
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                            ></FontAwesomeIcon>
                        </button>
                    </div>
                </Tippy>

                <div className={cx("action")}>
                    <Button text>Log in</Button>
                    <Button
                        primary
                        // rightIcon={<FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>}
                    >
                        Sign up
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx("more-btn")}>
                            <FontAwesomeIcon
                                icon={faEllipsisVertical}
                            ></FontAwesomeIcon>
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
