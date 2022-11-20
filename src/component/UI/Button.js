import classes from "./Button.module.css";

const Button = (props) => {
  //console.log(props)
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disable}
    >
      {props.children}
    </button>
  );
};

export default Button;
