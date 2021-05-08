import EventList from "../components/EventList";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage({ featuredEvents }) {
    return (
        <div>
           <EventList list={featuredEvents} />
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            featuredEvents
        }
    }
}

export default HomePage;
