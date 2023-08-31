import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import Image from 'next/image';
import CTA from '../ui/CTA';
import Body from '../ui/Body';
import { primaryColor } from 'config';

const LargeContentContainer = ({ story, solidBg, hideIcon = false }) => {
  //   <img
  //     alt={description}
  //     className={`h-full object-cover`}
  //     src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
  //   />;
  const icon = hideIcon ? (
    ''
  ) : (
    <span className="animate-pulse">
      <BsArrowDown fill={'#fff'} size={64}></BsArrowDown>
    </span>
  );
  if (story?.media[0] && !solidBg) {
    const { cloudinaryId, description } = story.media[0];
    const linkTitle = Object.keys(story.links).length
      ? Object.keys(story.links)[0]
      : '';
    const linkAddress = story.links[linkTitle];
    const noStoryContent = !story.title && !story.subtitle;
    return (
      <div
        className={`xl:bg-fixed screen w-full bg-cover flex justify-center items-center  relative bg-center  ${solidBg} ${
          noStoryContent ? 'py-32 md:py-64' : 'p-7 px-12 py-16 lg:py-40'
        }`}
        style={
          solidBg
            ? {}
            : {
                backgroundImage: `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId})`,
              }
        }
      >
        <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-10 "></div>
        <div
          className={`max-w-md m-auto text-white relative text-center bg-black bg-opacity-80 p-4 md:p-12  border-2 border-primary rounded opac-content ${
            noStoryContent && 'hidden'
          }`}
        >
          <div className="mb-6  text-md">
            <h4 className="text-2xl md:text-5xl font-display text-primary uppercase font-bold">
              {story.title}
            </h4>
          </div>
          <div className="mb-3  text-md">
            <h4 className="text-sm font-display text-white sub">
              {story.subtitle}
            </h4>
          </div>
          <div className="leading-loose text-base font-body mb-8 text-white">
            <Body body={story.body} />
          </div>
          {linkTitle.length ? (
            <div className="mb-4">
              <CTA tertiary url={`${linkAddress}`}>
                {linkTitle}
              </CTA>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }

  if (solidBg) {
    const linkTitle = Object.keys(story.links)[0] || '';
    const linkAddress = story.links[linkTitle];

    return (
      <div
        className={`w-full bg-cover flex justify-center items-center p-7 px-4 relative bg-center py-16 ${solidBg}`}
        style={
          solidBg
            ? {}
            : {
                backgroundImage: `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId})`,
              }
        }
      >
        <div className="absolute top-0 left-0 w-full h-full "></div>
        <div className="max-w-xl m-auto text-dark relative text-center">
          <div className="mb-6 leading-7 text-md">
            <h4 className="text-3xl lg:text-4xl  font-display text-primary uppercase">
              {story.title}
            </h4>
          </div>
          <div className="my-12 mt-6 leading-loose text-base font-body text-dark">
            <Body body={story.body} />
          </div>
          {linkTitle?.length ? (
            <CTA tertiary url={`${linkAddress}`}>
              {linkTitle}
            </CTA>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
};

export default LargeContentContainer;
