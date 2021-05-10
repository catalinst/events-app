import { getFilteredEvents } from "../../helpers/api-utils";
import EventList from "../../components/EventList";
import ResultsTitle from "../../components/layout/ResultsTitle";
import ErrorAlert from "../../components/layout/ErrorAlert";
import Button from "../../components/layout/Button";

function FilteredEventsPage({ events, hasError, yearNumber, monthNumber }) {

    if (hasError) {
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

export async function getServerSideProps(context) {
    const { params } = context;
    const filterData = params['slug'];

    const yearNumber = parseInt(filterData[0]);
    const monthNumber = +filterData[1]; // same as above

    if (isNaN(yearNumber) || isNaN(monthNumber)) {
        return {
            props: {
                hasError: true
            }
        }
    }

    const events = await getFilteredEvents({ year: yearNumber, month: monthNumber });

    return {
        props: {
            events,
            yearNumber,
            monthNumber
        }
    }
}

export default FilteredEventsPage;