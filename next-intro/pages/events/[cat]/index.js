import Image from "next/image";
import Link from "next/link";
const EventsCatPage = (props) => {
  const data = props.data;
  const pageName = props.pageName;
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((e) => {
          return (
            <Link legacyBehavior key={e.id} href={`/events/${e.city}/${e.id}`}>
              <a className="card">
                <h2>{e.title}</h2>
                <Image alt={e.title} src={e.image} width={300} height={300} />
                <p>{e.description}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EventsCatPage;

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  const { events_categories } = await import("../../../data/data.json"); // your fetch function here
  const allPaths = events_categories.map((e) => {
    return {
      params: {
        cat: e.id.toString(),
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
  // const { data } = await  // your fetch function here
  const { events_categories, allEvents } = await import("../../../data/data.json");
  const filteredEvents = allEvents.filter((e) => e.city === ctx.params.cat);
  return {
    props: {
      data: filteredEvents,
      pageName: ctx.params.cat,
    },
  };
};
