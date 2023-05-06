import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")} alt="Tiktok">
          <img src={images.logo}></img>
        </div>
        <div className={cx("search")}>
          <input
            className=""
            placeholder="Search accounts or videos"
            spellCheck={false}
          ></input>
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </button>
          <button className={cx("loading")}>
            <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
          </button>
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </div>
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;
