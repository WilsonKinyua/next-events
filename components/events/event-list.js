import EventItem from "./event-item";

export default function EventList(props) {
  return (
    // <div className="grid grid-flow-col auto-cols-max-3 gap-6 mt-10 ml-10">
    <div className="flex justify-center gap-5 mt-10">
      {props.featureEvents.map((event) => (
        <EventItem event={event} key={event.id} id={event.id} />
      ))}
    </div>
  );
}
