import classes from '../../styles/EventSummary.module.css';

function EventSummary(props) {
    return (
        <section className={classes.summary}>
            <h1>{props.title}</h1>
        </section>
    );
}

export default EventSummary;
