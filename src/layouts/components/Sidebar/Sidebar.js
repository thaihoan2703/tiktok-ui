import classNames from "classnames/bind";
import config from "~/config";
import Menu, { MenuItem } from "./Menu";

import styles from "./Sidebar.module.scss";
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from "~/components/Icons";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("sidebar")}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;
