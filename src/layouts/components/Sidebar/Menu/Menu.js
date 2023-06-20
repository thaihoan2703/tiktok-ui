import PropTypes from "prop-types";

function Menu({ children }) {
    return <nav style={{ marginBottom: "4px" }}>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
