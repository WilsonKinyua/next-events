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
      <h1 className="text-center pt-7 text-3xl text-white">
        Just practising Next Js & Tailwind
      </h1>
      <EventList featureEvents={FeaturedEvents} />
    </div>
  );
}
