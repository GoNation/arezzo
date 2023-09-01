import React from 'react';
import WithLayout from 'components/layout/WithLayout';
import Body from 'components/ui/Body';

import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import findStoryByName from 'helpers/findStoryByName';
import { businessId } from 'config';

const About = ({ storiesData, pageData, negativeMargin = false }) => {
  const story = findStoryByName(pageData?.aboutStoryName, storiesData.general);
  const negativeMarginClass = '-mt-20 md:-mt-28 lg:-mt-32';
  return (
    <section className="about-section p-4 bg-white ">
      <div
        className={`rounded  max-w-xl xl:max-w-3xl mx-auto  relative z-10 p-4 about-body ${
          negativeMargin && negativeMarginClass
        } `}
      >
        {/* todo bring in story */}
        <Body body={story.body} />
      </div>
    </section>
  );
};

export default WithLayout(About);

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
