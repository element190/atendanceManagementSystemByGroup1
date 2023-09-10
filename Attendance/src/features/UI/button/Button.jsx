import classes from "../button/button.module.css"

const Button = (props)=>{
    return (
        <button className={classes.button}>{props.children}</button>
    )
};

export default Button;