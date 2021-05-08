import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";
import ErrorAlert from "../../components/layout/ErrorAlert";

function EventDetailPage({ event }) {

    // for fallback: 'blocking' the below code don't make sense
    /*if (!event) {
        return (
            <ErrorAlert >
                <p>No event found!</p>
            </ErrorAlert>
        );
    }*/

    return (
       <>
           <EventSummary title={event.title} />
           <EventLogistics
               date={event.date}
               image={event.image}
               address={event.location}
               imageAlt={event.title}
           />
           <EventContent>
               <p>{event.description}</p>
           </EventContent>
       </>
    );
}

export async function getStaticProps(context) {
    const eventId = context.params['eventId'];
    const event = await getEventById(eventId);

    return {
        props: {
            event
        }
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const selectedPaths = events.map(event => ({ params: { eventId: event.id } }) );

    return {
        paths: selectedPaths,
        fallback: 'blocking'
    }
}

export default EventDetailPage;
