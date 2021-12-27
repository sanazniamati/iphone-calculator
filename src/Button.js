import "./Button.css";

const Button = ({ content, onButtonClic, type }) => {
  return (
    <div
      className={`button ${content === "0" ? "zero" : ""} ${type || ""}`}
      onClick={onButtonClic(content)}
    >
      {content}
    </div>
  );
};
export default Button;
