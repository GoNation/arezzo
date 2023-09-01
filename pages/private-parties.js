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
  //   const privateEventsAndPartiesStories = [
  //     findStoryByName('Private Events & Parties Story 1', storiesData.general),
  //     findStoryByName('Private Events & Parties Story 2', storiesData.general),
  //     findStoryByName('Private Events & Parties Story 3', storiesData.general),
  //     findStoryByName('Private Events & Parties Story 4', storiesData.general),
  //     findStoryByName('Private Events & Parties Story 5', storiesData.general),
  //     findStoryByName('Private Events & Parties Story 6', storiesData.general),
  //   ];

  return (
    <section className="min-h-screen">
      {/* <LargeContentContainer
        story={privateEventsAndPartiesStories[0]}
        solidBg="#ffffff"
      />
      {privateEventsAndPartiesStories.map((story, index) => {
        if (index === 0) return;
        return (
          <SideBySideImage
            key={story.id}
            story={story}
            config={{ ...sideBySideConfig, reversed: index % 2 === 0 }}
          />
        );
      })}
      <PartiesForm name="Private Parties Form" /> */}
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
