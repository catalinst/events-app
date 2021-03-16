import EventItem from "./EventItem";
import classes from '../styles/EventList.module.css';

function EventList(props) {
    const { list } = props;

    return (
        <ul className={classes.list}>
            {list.map(event => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    image={event.image}
                    date={event.date}
                    location={event.location}
                />
            ))}
        </ul>
    );
}

export default EventList;
