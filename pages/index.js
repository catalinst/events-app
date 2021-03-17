import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/EventList";

function HomePage() {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
           <EventList list={featuredEvents} />
        </div>
    );
}

export default HomePage;
