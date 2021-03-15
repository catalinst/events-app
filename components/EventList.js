import EventItem from "./EventItem";

function EventList(props) {
    const { list } = props;

    return (
        <ul>
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
