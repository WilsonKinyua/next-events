import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import Head from "next/head";

export default function HomePage() {
  const FeaturedEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Just practising Next Js & Tailwind</title>
      </Head>
      <EventList featureEvents={FeaturedEvents} />
    </div>
  );
}
