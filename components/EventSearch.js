import classes from '../styles/EventSearch.module.css';
import Button from "./Button";
import { useRef } from "react";

function EventSearch(props) {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    const months = [
        {name: 'January', value: '1'}, {name: 'February', value: '2'},
        {name: 'March', value: '3'}, {name: 'April', value: '4'},
        {name: 'May', value: '5'}, {name: 'June', value: '6'},
        {name: 'July', value: '7'}, {name: 'August', value: '8'},
        {name: 'September', value: '9'}, {name: 'October', value: '10'},
        {name: 'November', value: '11'}, {name: 'December', value: '12'}
    ];

    function submitHandler(event) {
        event.preventDefault();

        const selectedYear = yearInputRef.current['value'];
        const selectedMonth = monthInputRef.current['value'];

        props.onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor={'year'}>Year</label>
                    <select id={'year'} ref={yearInputRef}>
                        <option value={'2021'}>2021</option>
                        <option value={'2022'}>2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor={'month'}>Month</label>
                    <select id={'month'} ref={monthInputRef}>
                        {months.map(month => (
                            <option key={month.value} value={month.value}>{month.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    );
}

export default EventSearch;
