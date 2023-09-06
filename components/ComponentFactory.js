import { Hero } from 'components/heros/Hero';
import ExpandableShout from 'components/shout/ExpandableShout';
import StorySection from 'components/StorySection';
import LargeContentContainer from 'components/story-components/LargeContentContainer';

import findStoryByName from 'helpers/findStoryByName';

const componentFactory = (componentConfig, commonData) => {
  switch (componentConfig.type) {
    case 'Hero':
      return (
        <Hero
          story={findStoryByName(
            componentConfig.storyName,
            commonData.storiesData.general
          )}
          showLogo={componentConfig.showLogo}
          business={commonData.aboutData}
          {...componentConfig}
        />
      );
    case 'ExpandableShout':
      return (
        <ExpandableShout
          shout={commonData.shoutData.shout}
          bg={componentConfig.bgFunction(commonData.aboutData)}
          {...componentConfig}
        />
      );
    case 'StorySection':
      return (
        <StorySection
          storiesData={commonData.storiesData.general}
          storiesConfig={componentConfig.storiesConfig.map(story => {
            if (story.config === null) story.config = commonData.filesData[0];
            return story;
          })}
        />
      );
    case 'LargeContentContainer':
      return (
        <LargeContentContainer
          story={findStoryByName(
            componentConfig.storyName,
            commonData.storiesData.general
          )}
        />
      );
    // ... add other component types as necessary
    default:
      return null;
  }
};

export default componentFactory;
