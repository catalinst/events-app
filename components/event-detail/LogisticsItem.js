import classes from '../../styles/LogisticsItem.module.css';

function LogisticsItem(props) {
    return (
        <li className={classes.item}>
            <span className={classes.icon}>
                {props.icon}
            </span>
            <span>{props.children}</span>
        </li>
    );
}

export default LogisticsItem;
