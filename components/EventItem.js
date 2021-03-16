import Link from 'next/link';
import classes from '../styles/EventItem.module.css';

function EventItem(props) {
    const { title, image, date, location , id } = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>{formattedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
}

export default EventItem;
