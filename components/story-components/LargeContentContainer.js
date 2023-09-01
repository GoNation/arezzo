import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import CTA from '../ui/CTA';
import Body from '../ui/Body';

const LargeContentContainer = ({ story, solidBg, hideIcon = false }) => {
  if (!story) return null;

  const { title, subtitle, body, links, media } = story;
  const backgroundImage = media?.[0]?.cloudinaryId
    ? `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${media[0].cloudinaryId})`
    : undefined;
  const linkTitle = Object.keys(links || {})[0];
  const linkAddress = links?.[linkTitle];

  const ContainerStyles = solidBg ? {} : { backgroundImage };

  const Content = () => (
    <>
      {title && (
        <div className="mb-6 leading-7 text-md">
          <h4
            className={`${
              solidBg ? 'text-3xl lg:text-4xl' : 'text-2xl md:text-3xl'
            } font-display uppercase`}
          >
            {title}
          </h4>
        </div>
      )}
      {subtitle && (
        <div className="mb-3 text-md">
          <h4
            className={`text-xl lg:text-2xl font-display ${
              solidBg ? 'text-dark' : 'text-white'
            } sub`}
          >
            {subtitle}
          </h4>
        </div>
      )}
      {body && (
        <div className="my-12 mt-6 leading-loose text-base font-body home-body">
          <Body body={body} />
        </div>
      )}
      {linkTitle && (
        <div className="">
          <CTA tertiary url={linkAddress}>
            {linkTitle}
          </CTA>
        </div>
      )}
    </>
  );

  return (
    <div
      className={`relative w-full bg-cover flex justify-start items-start lg:bg-fixed ${
        solidBg
          ? 'py-16'
          : 'p-7 px-4 relative bg-center py-32 md:py-96 lg:py-80'
      }`}
      style={ContainerStyles}
    >
      <div className="absolute top-0 left-0  w-full h-full bg-dark opacity-0"></div>
      <div
        className={`${
          solidBg
            ? 'max-w-xl text-dark'
            : 'max-w-2xl text-white border-2 border-white md:absolute top-2 left-2 py-8 md:py-12 px-4 md:px-8 bg-dark bg-opacity-80 md:top-12 md:left-12 mr-2 '
        }   text-left `}
      >
        <Content />
      </div>
    </div>
  );
};

export default LargeContentContainer;
