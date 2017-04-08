export function getEvent(events, id) {
    return events.find(event => event.get('id') === id);
}
