import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/EventList";
import EventSearch from "../../components/EventSearch";
import { useRouter } from "next/router";

function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year, month) {
        const fullPath = `events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <div>
            <EventSearch onSearch={findEventsHandler} />
            <EventList list={events} />
        </div>
    );
}

export default AllEventsPage;
