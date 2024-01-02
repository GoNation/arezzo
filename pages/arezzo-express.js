import React from 'react';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import WithLayout from 'components/layout/WithLayout';
import Body from 'components/ui/Body';

import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import findStoryByName from 'helpers/findStoryByName';
import { businessId } from 'config';
import LargeContentContainer from 'components/story-components/LargeContentContainer';
import SideBySideImage from 'components/story-components/SideBySideImage';

const ArezzoExpress = ({
  storiesData,
  pageData,
  negativeMargin = false,
  filesData,
}) => {
  const story = findStoryByName(pageData?.aboutStoryName, storiesData.general);
  return (
    <section className="about-section p-4 bg-white ">
      <div className={`rounded   mx-auto  relative z-10 p-4 `}>
        <SideBySideImage
          story={findStoryByName('arezzo express page', storiesData.general)}
          config={filesData[3]}
        />
      </div>
    </section>
  );
};

export default WithLayout(ArezzoExpress);

export async function getStaticProps() {
  const directory = path.join(process.cwd(), 'content/sidebysideimage');
  const filenames = fs.readdirSync(directory);

  const filesData = filenames.map(filename => {
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsedContent = matter(fileContent); // Use gray-matter to parse the file
    return parsedContent.data; // Return only the frontmatter
  });

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
      filesData,
    },
  };
}
