import "./Button.css";

export const Button = ({ children, onClick }) => {
    return <div
        className="Button"
        onClick={onClick}
    >
        {children}
    </div>;
}