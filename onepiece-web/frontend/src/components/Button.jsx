import PropTypes from "prop-types";
const Button = ({ children, onClick, className = "", ...props }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition-colors duration-300 active:scale-95 ${className}`}
        {...props}
    >
        {children}
    </button>

);

export default Button;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};