export async function getAllEvents() {
    const response = await fetch('http://localhost:3000/data.json');
    const data = await response.json();

    const events = [];

    Object.keys(data).map(event => (
        events.push({
            id: event,
            ...data[event]
        })
    ));

    return events;
}

export async function getFeaturedEvents() {
    const events = await getAllEvents();
    return events.filter((event) => event.isFeatured);
}