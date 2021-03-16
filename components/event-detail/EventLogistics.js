import LogisticsItem from './LogisticsItem';
import DateIcon from '../icons/DateIcon';
import AddressIcon from '../icons/AddressIcon';
import classes from '../../styles/EventLogistics.module.css';

function EventLogistics(props) {
    const { date, address, image, imageAlt } = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedAddress = address.replace(', ', '\n');

    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <img src={`/${image}`} alt={imageAlt}/>
            </div>
            <ul className={classes.list}>
                <LogisticsItem icon={<DateIcon />}>
                    <time>{formattedDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={<AddressIcon />}>
                    <address>{formattedAddress}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}

export default EventLogistics;
