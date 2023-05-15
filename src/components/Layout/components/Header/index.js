import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faQuestionCircle,
    faSignOut,
    faSpinner,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: "English",
        children: [
            {
                title: "Language",
                data: [
                    {
                        type: "language",
                        code: "en",
                        title: "English",
                    },
                    {
                        type: "language",
                        code: "vi",
                        title: "Tiếng Việt",
                    },
                ],
            },
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>,
        title: "Feedback and help",
        to: "/feedback",
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

    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "Language":
                // Handle
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: "View Profile",
            to: "/@username",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: "Setting",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")} alt="Tiktok">
                    <img src={images.logo}></img>
                </div>
                <HeadlessTippy
                    interactive
                    placement="bottom"
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
                </HeadlessTippy>

                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                trigger="click"
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                trigger="click"
                                content="Messasge"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                trigger="click"
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                    <span className={cx("badge")}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Log in</Button>
                            <Button
                                primary
                                // rightIcon={<FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>}
                            >
                                Sign up
                            </Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/341300133_1361985481251705_4149051151286503352_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=uSKa8WSdpQMAX_6dQib&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfBg8tNIe5h1rQjhkkLjogjEJ2J_4jsxEqmitL8gviFjmA&oe=6463C1E6"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                ></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
