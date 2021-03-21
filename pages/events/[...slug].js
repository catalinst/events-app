import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/EventList";
import ResultsTitle from "../../components/layout/ResultsTitle";
import ErrorAlert from "../../components/layout/ErrorAlert";
import Button from "../../components/layout/Button";

function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query['slug'];

    /*
    This is needed cause we double render -> first time we have no value for router.query -> error
     */
    if (!filterData) {
        return <p className={'center'}>Loading...</p>
    }

    const yearNumber = parseInt(filterData[0]);
    const monthNumber = +filterData[1]; // same as above

    if(isNaN(yearNumber) || isNaN(monthNumber)) {
        return (
            <div>
                <ErrorAlert>
                    <p>Invalid values entered!</p>
                </ErrorAlert>
                <div className={'center'}>
                    <Button link={'/events'}>Show All Events</Button>
                </div>
            </div>
        );
    }

    const events = getFilteredEvents({ year: yearNumber, month: monthNumber });

    if (!events || events.length === 0) {
        return (
            <div>
                <ErrorAlert>
                    <p>No events found!</p>
                </ErrorAlert>
                <div className={'center'}>
                    <Button link={'/events'}>Show All Events</Button>
                </div>
            </div>
        );
    }

    const date = new Date(yearNumber, monthNumber - 1);

    return (
        <div>
            <ResultsTitle date={date} />
            <EventList list={events} />
        </div>
    );
}

export default FilteredEventsPage;
