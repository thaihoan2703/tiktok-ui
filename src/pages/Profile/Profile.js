import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Profile.module.scss";
import Image from "~/components/Image/Image";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ShareAction from "~/components/ShareAction/ShareAction";
import ReportAction from "~/components/ReportAction/ReportAction";
import {
    EllipsisHorizontalIcon,
    LinkIcon,
    ShareIcon,
    ShareSolidIcon,
} from "~/components/Icons";
import VideoPreview from "~/components/Video/VideoPreview/VideoPreview";

const cx = classNames.bind(styles);

function Profile() {
    const [videos, setVideos] = useState([]);
    const location = useLocation();
    const data = location.state;
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/@${data.nickname}`)
            .then((response) => response.json())
            .then((json) => setVideos(json.data.videos));
    }, [data.nickname]);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("info-container")}>
                <div className={cx("header")}>
                    <Image
                        className={cx("tippy-avatar")}
                        src={data?.avatar}
                        alt={data?.avatar}
                    />
                    <div className={cx("title-container")}>
                        <div className={cx("tippy-username")}>
                            <span>{data?.nickname}</span>
                            {data?.tick && (
                                <FontAwesomeIcon
                                    className={cx("verified")}
                                    icon={faCheckCircle}
                                />
                            )}
                        </div>
                        <div className={cx("tippy-name")}>
                            {data?.full_name ||
                                `${data?.first_name} ${data?.last_name}`}
                        </div>
                        <Button className={cx("follow-btn")} primary>
                            Follow
                        </Button>
                    </div>
                </div>
                <div className={cx("info-btns")}>
                    <ShareAction offset={[20, 0]}>
                        <div>
                            <Button className={cx("share-btn")}>
                                <ShareIcon />
                            </Button>
                        </div>
                    </ShareAction>
                    <ReportAction>
                        <EllipsisHorizontalIcon />
                    </ReportAction>
                </div>

                <div className={cx("user-stats")}>
                    <div className={cx("user-stat")}>
                        <span className={cx("bold")}>
                            {data?.followers_count}
                        </span>{" "}
                        Followers
                    </div>
                    <div className={cx("user-stat")}>
                        <span className={cx("bold")}>
                            {data?.followers_count}
                        </span>{" "}
                        Followers
                    </div>

                    <div className={cx("user-stat")}>
                        <span className={cx("bold")}>{data?.likes_count}</span>{" "}
                        Likes
                    </div>
                </div>
                <div className={cx("user-bio")}>
                    {data?.bio ? data?.bio : "No bio yet"}
                </div>
                <a href={data.website_url} target="blank">
                    {data.website_url && (
                        <div className={cx("website")}>
                            <LinkIcon className={cx("link-icon")} />
                            {data.website_url}
                        </div>
                    )}
                </a>
            </div>

            <div className={cx("content-wrapper")}>
                <div className={cx("tabs")}>
                    <div className={cx("tab")}>Video</div>
                    <div className={cx("tab")}>
                        <span className={cx("icon-tab")}>
                            <svg
                                width="1em"
                                data-e2e=""
                                height="1em"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 3C17.9249 3 13 7.92487 13 14V21H8C6.89543 21 6 21.8954 6 23V41C6 42.1046 6.89543 43 8 43H40C41.1046 43 42 42.1046 42 41V23C42 21.8954 41.1046 21 40 21H35V14C35 7.92487 30.0751 3 24 3ZM31 21V14C31 10.134 27.866 7 24 7C20.134 7 17 10.134 17 14V21H31Z"
                                ></path>
                            </svg>
                        </span>
                        Liked
                    </div>
                    <div className={cx("line")}></div>
                </div>

                {videos.length > 0 && (
                    <div className={cx("videos")}>
                        {videos.map((video, index) => {
                            return <VideoPreview data={video} key={index} />;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
