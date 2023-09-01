import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import WithLayout from 'components/layout/WithLayout';
import LargeContentContainer from 'components/story-components/LargeContentContainer';
import SideBySideImage from 'components/story-components/SideBySideImage';
import findStoryByName from 'helpers/findStoryByName';
import { sideBySideConfig } from 'content/componentConfigs';
findStoryByName;
import PartiesForm from 'components/contact/PartiesForm';

const PrivateParties = ({ storiesData }) => {
  const privateEventsAndPartiesStories = [
    findStoryByName('Private parties main dining room', storiesData.general),
    findStoryByName('Private parties wine bar', storiesData.general),
    findStoryByName('Private Parties enclosed sun deck', storiesData.general),
    //   findStoryByName('private parties pagehero ', storiesData.general)
  ];

  return (
    <section className="min-h-screen">
      {privateEventsAndPartiesStories.map((story, index) => {
        return (
          <SideBySideImage
            key={story.id || index}
            story={story}
            config={{ ...sideBySideConfig, reversed: index % 2 === 0 }}
          />
        );
      })}
      <PartiesForm name="Private Parties Form" />
    </section>
  );
};

export default WithLayout(PrivateParties);

export async function getStaticProps() {
  const { poweredImagesData, aboutData, storiesData } = await fetchGoNationData(
    {
      poweredImages: true,
      about: true,
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
