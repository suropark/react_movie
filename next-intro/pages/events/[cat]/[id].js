import { SingleEvent } from "./single-event";

const EventPage = (props) => {
  const data = props.data;
  return <SingleEvent data={data} />;
};

export default EventPage;

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  const { allEvents } = await import("../../../data/data.json"); // your fetch function here

  const allPaths = allEvents.map((e) => {
    return {
      params: {
        id: e.id,
        cat: e.city,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const { allEvents } = await import("../../../data/data.json"); // your fetch function here
  const filteredEvents = allEvents.filter((e) => e.id === ctx.params.id)[0];

  return {
    props: {
      data: filteredEvents,
    },
  };
};
