import React from 'react';
import CTA from '../ui/CTA';
import Body from '../ui/Body';
import ImageComponent from 'components/ui/ImageComponent';
import ContentComponent from 'components/ContentComponent';
import styles from 'styles';
const {
  SideBySideImage: { container },
} = styles;

const SideBySideImage = ({ story, config }) => {
  const {
    reversed,
    sideBySideImageContainerStyle,
    imageConfig,
    contentConfig,
  } = config;
  if (!story || !story.media[0]) return null;

  const { cloudinaryId, description } = story.media[0];
  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];

  return (
    <div
      className={`${sideBySideImageContainerStyle} side-by-side md:!gap-0 gap-0 lg:py-12 xl:py-24 `}
    >
      <ImageComponent
        cloudinaryId={cloudinaryId}
        description={description}
        styles={imageConfig}
      />
      <ContentComponent
        title={story.title}
        subtitle={story.subtitle}
        body={story.body}
        linkTitle={linkTitle}
        linkAddress={linkAddress}
        styles={contentConfig}
        reversed={reversed}
      />
    </div>
  );
};

export default SideBySideImage;
