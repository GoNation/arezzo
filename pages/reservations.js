import React from 'react';
import WithLayout from 'components/layout/WithLayout';
import Body from 'components/ui/Body';

import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import findStoryByName from 'helpers/findStoryByName';
import { businessId } from 'config';

const Reservations = ({ storiesData, pageData }) => {
  //   const story = findStoryByName(pageData?.reservationsStoryName, storiesData.general);
  return (
    <section className="about-section p-4 bg-primary ">
      <div className="rounded bg-dark max-w-xl xl:max-w-3xl mx-auto -mt-20 md:-mt-28 lg:-mt-32 relative z-10 p-4 ">
        {/* todo bring in story */}
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
