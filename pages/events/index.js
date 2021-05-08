import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/EventList";
import EventSearch from "../../components/EventSearch";
import { useRouter } from "next/router";

function AllEventsPage({ events }) {
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `events/${year}/${month}`;

        router.push(fullPath).then();
    }

    return (
        <div>
            <EventSearch onSearch={findEventsHandler} />
            <EventList list={events} />
        </div>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events
        }
    }
}

export default AllEventsPage;