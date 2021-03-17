import { useRouter } from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/EventList";

function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query['slug'];

    if (!filterData) {
        return <p className={'center'}>Loading...</p>  // need
    }

    const yearNumber = parseInt(filterData[0]);
    const monthNumber = +filterData[1]; // same as above

    if(isNaN(yearNumber) || isNaN(monthNumber)) {
        return <p className={'center'}>Invalid values entered!</p>
    }

    const events = getFilteredEvents({ year: yearNumber, month: monthNumber });

    if (!events || events.length === 0) {
        return <p className={'center'}>No events found!</p>
    }

    return (
        <div>
            <EventList list={events} />
        </div>
    );
}

export default FilteredEventsPage;
