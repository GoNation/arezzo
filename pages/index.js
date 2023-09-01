import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import ExpandableShout from 'components/shout/ExpandableShout';
import WithLayout from 'components/layout/WithLayout';
import MultiStoryHero from 'components/story-components/MultiStoryHero';
import StorySection from 'components/StorySection';
import BackgroundVideo from 'components/BackgroundVideo';
import LargeContentContainer from 'components/story-components/LargeContentContainer';

import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import { filterAndSortStories } from 'helpers';
import findStoryByName from 'helpers/findStoryByName';
import { Hero } from 'components/heros/Hero';
import buildCover from 'helpers/general/buildCover';

const Home = ({ storiesData, shoutData, filesData, aboutData }) => {
  //   const homepageSliderStories = filterAndSortStories(
  //     storiesData,
  //     'homepage slider'
  //   );

  //   const homePageStorySectionStories = filterAndSortStories(
  //     storiesData,
  //     'homepage story section'
  //   );

  return (
    <section className="home">
      <Hero
        story={findStoryByName('Homepage hero', storiesData.general)}
        showLogo
        business={aboutData}
      />
      <ExpandableShout
        isExpandable={false}
        shout={shoutData.shout}
        bg={buildCover(aboutData)}
      />
      <LargeContentContainer
        story={findStoryByName('Homepage story 2', storiesData.general)}
      />
      <div className="lg:py-24">
        <StorySection
          storiesData={storiesData.general}
          storiesConfig={[
            {
              storyName: 'Homepage story 4',
              config: { ...filesData[0], reversed: false },
            },

            // ... add more stories as needed
          ]}
        />
      </div>
      <LargeContentContainer
        story={findStoryByName('Homepage story 3', storiesData.general)}
      />
      <div className="lg:py-24">
        <StorySection
          storiesData={storiesData.general}
          storiesConfig={[
            { storyName: 'Homepage story 5', config: filesData[0] },
            // ... add more stories as needed
          ]}
        />
      </div>
      <LargeContentContainer
        story={findStoryByName('Homepage story 6', storiesData.general)}
      />
      {/* <MultiStoryHero
        stories={[findStoryByName('Homepage hero ', storiesData.general)]}
        slideDuration={8000}
      /> */}
      {/*
      <ExpandableShout isExpandable={false} shout={shoutData.shout} /> */}
      {/* <BackgroundVideo
        videoUrl="https://www.youtube.com/embed/D9CMUOWmcZs?si=degvSOb4bd3r4mmk&amp;controls=0"
        videoTitle="YouTube video player"
      />

      <StorySection
        storiesData={storiesData.general}
        storiesConfig={[
          {
            storyName: 'Homepage story 2',
            config: filesData[0],
            svgSrc: '/ripple.svg',
          },
          { storyName: 'Homepage story 3', config: filesData[2] },
          { storyName: 'Homepage story 4', config: filesData[0] },
          // ... add more stories as needed
        ]}
      />
      <LargeContentContainer
        story={findStoryByName('Homepage story 5', storiesData.general)}
      /> */}
    </section>
  );
};

export default WithLayout(Home);

export async function getStaticProps() {
  const directory = path.join(process.cwd(), 'content/sidebysideimage');
  const filenames = fs.readdirSync(directory);

  const filesData = filenames.map(filename => {
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsedContent = matter(fileContent); // Use gray-matter to parse the file
    return parsedContent.data; // Return only the frontmatter
  });
  const {
    storiesData,
    poweredImagesData,
    shoutData,
    aboutData,
    menuInventoryData,
    galleryData,
  } = await fetchGoNationData({
    stories: true,
    shout: true,
    poweredImages: true,
    about: true,
    menuInventory: true,
    menuPL: 1,
    gallery: false,
  });
  return {
    props: {
      storiesData,
      poweredImagesData,
      shoutData,
      aboutData,
      menuInventoryData,
      galleryData,
      filesData,
    },
  };
}
