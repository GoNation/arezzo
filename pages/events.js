import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
// import Layout from 'components/layout/WithLayout';
import EventsComponent from 'components/events/Events';
import WithLayout from 'components/layout/WithLayout';

const Events = ({ aboutData, eventsData }) => {
  return (
    <section className="py-4 md:py-12 ">
      {/* Other content will go here */}
      <EventsComponent
        pageTitle={'Events'}
        businessData={aboutData}
        recurringEvents={eventsData.recurringEventsData.events}
        singleEvents={eventsData.specialEventsData.events}
      />
    </section>
  );
};

export default WithLayout(Events);

export async function getStaticProps() {
  const { poweredImagesData, aboutData, eventsData } = await fetchGoNationData({
    poweredImages: true,
    about: true,
    events: true,
  });
  return {
    props: {
      poweredImagesData,
      aboutData,
      eventsData,
    },
  };
}
