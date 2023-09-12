import classes from "../button/NavigationButton.module.css"

const NavigationButton = (props) => {
  return <button onClick={props.onClick} className={classes.button}>{props.children}</button>;
};

export default NavigationButton;
