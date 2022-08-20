import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faCalendar,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

export default function EventItem({ event }) {
  const router = useRouter();
  const humanReadableDate = new Date(event.date).toDateString();
  const location = event.location.replace(", ", "\n");
  const redirectUserHandler = () => {
    return router.push(`/events/${event.id}`);
  };
  return (
    <div className="card w-96 glass mb-4 rounded-t-sm shadow-lg">
      <figure>
        <img src={"/" + event.image} alt={event.title} />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title text-secondary">{event.title}</h2>
          <div>
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ paddingRight: "10px" }}
            />
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>
              <FontAwesomeIcon icon={faMapLocation} /> {location}
            </address>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={redirectUserHandler}
            className="btn btn-secondary btn-sm rounded capitalize"
          >
            Explore Event{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginLeft: "10px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
