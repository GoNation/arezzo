import React from 'react';
import { useTina } from 'tinacms/dist/react';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import WithLayout from 'components/layout/WithLayout';

import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import componentFactory from 'components/ComponentFactory';
import { homepageLayout } from 'layouts';

const Home = props => {
  const { storiesData, shoutData, filesData, aboutData } = props;
  const commonData = { storiesData, shoutData, filesData, aboutData };
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <section className="home">
      {homepageLayout.map((componentConfig, index) => (
        <React.Fragment key={index}>
          {componentFactory(componentConfig, commonData)}
        </React.Fragment>
      ))}
    </section>
  );
};

export default WithLayout(Home);

export async function getStaticProps() {
  //   const pageResponse = await client.queries.page({
  //     relativePath: 'content/posts/hell-world.md',
  //   });

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
      //   data: pageResponse.data,
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
