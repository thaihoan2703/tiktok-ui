import PropTypes from "prop-types";
import classNames from "classnames";
import images from "~/assets/images";
import { forwardRef, useState } from "react";
import styles from "./image.module.scss";

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallBack: customFallBack = images.noImage,
            ...props
        },
        ref
    ) => {
        const [fallBack, setFallback] = useState("");
        const handleError = () => {
            setFallback(customFallBack);
        };

        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallBack || src}
                {...props}
                onError={handleError}
            ></img>
        );
    }
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
