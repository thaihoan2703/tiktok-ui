import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    className,
    disabled,
    primary,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = "button";
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on" && typeof props[key] === "function")) {
                delete props[key];
            }
        });
    }
    const classes = cx("wrapper", {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    });
    return (
        <Comp className={classes} {...passProps}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
