import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  const FeaturedEvents = getFeaturedEvents();

  return <EventList featureEvents={FeaturedEvents} />;
}
