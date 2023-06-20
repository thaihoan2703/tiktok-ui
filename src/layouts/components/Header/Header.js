import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faQuestionCircle,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import images from "~/assets/images";

import config from "~/config";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";
import { Link } from "react-router-dom";

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
            to: "/coins",
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
                <Link
                    to={config.routes.home}
                    className={cx("logo-link")}
                    alt="Tiktok"
                >
                    <img src={images.logo} alt=""></img>
                </Link>
                <Search />
                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                trigger="click"
                                content="Upload videos"
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
                                src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/341300133_1361985481251705_4149051151286503352_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=b7I_X4HylfgAX98YJTv&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfA8FbZgSfdDNjRiGd_jeOKXyzrTnquekD9pTf0y9YA3Cw&oe=64962BE8"
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
