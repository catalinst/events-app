import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/EventList";

function AllEventsPage() {
    const events = getAllEvents();

    return (
        <div>
            <EventList list={events} />
        </div>
    );
}

export default AllEventsPage;
