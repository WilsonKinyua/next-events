import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import EventDetail from "../../components/events/event-detail";

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const eventDetails = getEventById(eventId);
  if (!eventDetails) {
    return <p style={{ color: "red" }}>Error occurred</p>;
  }
  return <EventDetail event={eventDetails} />;
}
