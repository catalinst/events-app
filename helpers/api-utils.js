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
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}