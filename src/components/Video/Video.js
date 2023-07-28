import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import ShareAction from "~/components/ShareAction";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Image from "../Image/Image";
import styles from "./Video.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
    MusicIcon,
    PauseIcon,
    MutedIcon,
    VolumeIcon,
    FlagIcon,
    PlaySolidIcon,
    HeartIcon,
    ShareSolidIcon,
    CommentIcon,
} from "../Icons";

const cx = classNames.bind(styles);

function Video({ data, mute, volume, adjustVolume, handleMute }) {
    //handle videos
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();
    useEffect(() => {
        if (mute === true) {
            videoRef.current.volume = 0;
        } else videoRef.current.volume = volume;
    });

    const handleVideo = () => {
        if (isPlaying) {
            pauseVideo();
        } else {
            playVideo();
        }
    };

    const playVideo = () => {
        if (isPlaying === false) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseVideo = () => {
        if (isPlaying === true) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    function playVideoInViewport() {
        var bounding = videoRef.current.getBoundingClientRect();

        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <=
                (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <=
                (window.innerHeight || document.documentElement.clientHeight)
        ) {
            playVideo();
        } else {
            pauseVideo();
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", playVideoInViewport);
        return () => {
            window.removeEventListener("scroll", playVideoInViewport);
        };
    });

    const renderReview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx("account-tab")}>
                    <div className={cx("header")}>
                        <Link
                            to={`/@${data?.user.nickname}`}
                            state={data?.user}
                        >
                            <Image
                                className={cx("tippy-avatar")}
                                src={data?.user.avatar}
                                alt={data?.user.avatar}
                            />
                        </Link>
                        <Button outline>Follow</Button>
                    </div>
                    <Link to={`/@${data?.user.nickname}`} state={data?.user}>
                        <div className={cx("tippy-username")}>
                            <span>{data?.user.nickname}</span>
                            {data?.user.tick && (
                                <FontAwesomeIcon
                                    className={cx("verified")}
                                    icon={faCheckCircle}
                                />
                            )}
                        </div>
                        <div className={cx("tippy-name")}>
                            {data?.user.full_name ||
                                `${data?.user.first_name} ${data?.user.last_name}`}
                        </div>
                    </Link>

                    <div className={cx("user-stats")}>
                        <div className={cx("follower-stats")}>
                            <span className={cx("bold")}>
                                {data?.user.followers_count}
                            </span>{" "}
                            Followers
                        </div>

                        <div className={cx("like-stats")}>
                            <span className={cx("bold")}>
                                {data?.user.likes_count}
                            </span>{" "}
                            Likes
                        </div>
                    </div>

                    <div className={cx("user-bio")}>{data?.user.bio}</div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx("wrapper")}>
            <Link to={`/@${data?.user.nickname}`} state={data?.user}>
                <Tippy
                    interactive
                    placement="bottom"
                    delay={[700, 0]}
                    offset={[40, 30]}
                    zIndex="99"
                    render={renderReview}
                >
                    <Image
                        className={cx("avatar")}
                        src={data?.user.avatar}
                        alt=""
                    ></Image>
                </Tippy>
            </Link>

            <div className={cx("content")}>
                <div className={cx("text-container")}>
                    <Tippy
                        interactive
                        placement="bottom"
                        delay={[700, 0]}
                        offset={[-40, 0]}
                        zIndex="99"
                        render={renderReview}
                    >
                        <Link
                            to={`/@${data?.user.nickname}`}
                            state={data?.user}
                        >
                            <div className={cx("author-container")}>
                                <h3 className={cx("author-title")}>
                                    {data?.user.nickname}
                                </h3>
                                <h4 className={cx("author-fullName")}>
                                    {`${data?.user.first_name} ${data?.user.last_name}`}
                                </h4>
                            </div>
                        </Link>
                    </Tippy>

                    <Button className={cx("btn")} outline>
                        Follow
                    </Button>
                    <div className={cx("description")}>{data?.description}</div>
                    <div className={cx("music-info")}>
                        <MusicIcon className={cx("icon")}></MusicIcon>
                        {data?.music}
                    </div>
                </div>
                <div className={cx("video-wrapper")}>
                    <div className={cx("video-card")}>
                        <video
                            onClick={handleVideo}
                            style={
                                data?.meta.video.resolution_x <
                                data?.meta.video.resolution_y
                                    ? { width: "273px" }
                                    : { width: "433px" }
                            }
                            loop
                            ref={videoRef}
                        >
                            <source src={data?.file_url}></source>
                        </video>

                        <div
                            className={cx("play-control")}
                            onClick={handleVideo}
                        >
                            {isPlaying === true ? (
                                <PauseIcon />
                            ) : (
                                <PlaySolidIcon />
                            )}
                        </div>
                        <div className={cx("volume-control")}>
                            <div className={cx("container")}>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    orient="vertical"
                                    onChange={adjustVolume}
                                    value={volume * 100}
                                />
                            </div>
                            <div
                                className={cx("volume-icon")}
                                onClick={handleMute}
                            >
                                {mute ? <MutedIcon /> : <VolumeIcon />}
                            </div>
                        </div>
                        <div className={cx("report")}>
                            <FlagIcon /> Report
                        </div>
                    </div>
                    <div className={cx("action-container")}>
                        <div className={cx("action-btn")}>
                            <Button rounded>
                                <HeartIcon />
                            </Button>
                            <p>{data?.likes_count}</p>
                        </div>
                        <div className={cx("action-btn")}>
                            <Button rounded>
                                <CommentIcon />
                            </Button>
                            <p>{data?.comments_count}</p>
                        </div>

                        <ShareAction offset={[20, 0]}>
                            <div className={cx("action-btn")}>
                                <Button rounded>
                                    <ShareSolidIcon />
                                </Button>
                                <p>{data?.shares_count}</p>
                            </div>
                        </ShareAction>
                    </div>
                </div>
            </div>
        </div>
    );
}

Video.propTypes = {
    data: PropTypes.object.isRequired,
    mute: PropTypes.bool.isRequired,
    volume: PropTypes.node,
    adjustVolume: PropTypes.func.isRequired,
    handleMute: PropTypes.func.isRequired,
};
export default Video;
