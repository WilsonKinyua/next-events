import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapLocation } from "@fortawesome/free-solid-svg-icons";

export default function EventDetail({ event }) {
  const humanReadableDate = new Date(event.date).toDateString();
  const location = event.location.replace(", ", "\n");
  return (
    <div className="p-5">
      <h1 className="text-center bg-green-900 p-10 text-white text-4xl">
        {event.title}
      </h1>
      <div className="card card-side bg-base-100 shadow-xl rounded-none">
        <figure>
          <img
            src={"/" + event.image}
            className="h-[20rem]"
            alt={event.title}
          />
        </figure>
        <div className="card-body">
          <p className="card-title text-sm">
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ paddingRight: "10px" }}
            />
            <time>{humanReadableDate}</time>
          </p>
          <p className="card-title text-sm">
            <FontAwesomeIcon icon={faMapLocation} /> {location}
          </p>
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}
