import React from 'react';
import WithLayout from 'components/layout/WithLayout';
import Body from 'components/ui/Body';

import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import findStoryByName from 'helpers/findStoryByName';
import { businessId } from 'config';
import OpenTableWidget from 'components/OpenTableWidget';

const Reservations = ({ storiesData, pageData }) => {
  //   const story = findStoryByName(pageData?.reservationsStoryName, storiesData.general);
  return (
    <section className="about-section p-4 bg-white  ">
      <div className="flex flex-col justify-center items-center">
        {/* OpenTable widget */}
        <OpenTableWidget />

        {/* Uncomment the following if you want to use the story in the future */}
        {/* const story = findStoryByName(pageData?.reservationsStoryName, storiesData.general); */}
        {/* <Body body={story.body} /> */}
      </div>
    </section>
  );
};

export default WithLayout(Reservations);

export async function getStaticProps() {
  const { poweredImagesData, aboutData, storiesData } = await fetchGoNationData(
    {
      poweredImages: true,
      about: true,
      shout: false,
      businessId,
      stories: true,
    }
  );
  return {
    props: {
      poweredImagesData,
      aboutData,
      storiesData,
    },
  };
}
