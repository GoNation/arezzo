import React from 'react';
import CTA from '../ui/CTA';
import Body from '../ui/Body';

// Utility to determine position based on props
const getNavPosition = position => {
  const positions = {
    'top-left': 'md:top-8 md:left-8',
    'top-center': 'top-2 left-1/2 transform -translate-x-1/2',
    'top-right': 'top-2 right-2',
    'left-center': 'top-1/2 left-2 transform -translate-y-1/2',
    center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'right-center': 'top-1/2 right-2 transform -translate-y-1/2',
    // Add other positions as needed
  };
  return positions[position] || positions['top-left'];
};

const ContentBox = ({
  solidBg,
  navPositioning,
  color = 'dark',
  opacityStrength = '80',
  children,
}) => {
  const bgColor = `bg-${color} bg-opacity-${opacityStrength}`;
  const navPosition = getNavPosition(navPositioning);

  return (
    <div
      className={`absolute large-content-container  ${navPosition} ${
        solidBg
          ? 'max-w-xl text-white'
          : 'max-w-2xl text-white  rounded bg-gradient-to-br from-stone-950 to-transparent'
      } px-4 py-8 md:px-8 ${bgColor} mx-4 md:mx-0`}
    >
      {children}
    </div>
  );
};

const LargeContentContainer = ({
  story,
  solidBg,
  navPositioning = 'top-left',
  color,
  opacityStrength,
  borderStyle,
  padding,
}) => {
  if (!story) return null;

  const { title, subtitle, body, links, media } = story;
  const backgroundImage = media?.[0]?.cloudinaryId
    ? `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${media[0].cloudinaryId})`
    : undefined;
  const linkTitle = Object.keys(links || {})[0];
  const linkAddress = links?.[linkTitle];

  return (
    <div
      className={`relative w-full bg-cover flex justify-center items-center lg:bg-fixed ${
        padding || 'md:py-96  min-h-screen sm:min-h-0'
      } ${borderStyle || ''}`}
      style={{ backgroundImage }}
    >
      <ContentBox
        solidBg={solidBg}
        navPositioning={navPositioning}
        color={color}
        opacityStrength={opacityStrength}
      >
        {title && (
          <div className="mb-1 leading-7">
            <h4
              className={`${
                solidBg ? 'text-3xl lg:text-4xl' : 'text-2xl md:text-3xl'
              } font-display font-light uppercase`}
            >
              {title}
            </h4>
          </div>
        )}
        {subtitle && (
          <div className="mb-3">
            <h4 className={`text-xl lg:text-xl font-display font-bold`}>
              {subtitle}
            </h4>
          </div>
        )}
        {body && (
          <div className="my-6 leading-loose">
            <Body body={body} />
          </div>
        )}
        {linkTitle && (
          <div>
            <CTA
              unset={true}
              url={linkAddress}
              target={linkAddress.includes('http') ? '_blank' : ''}
            >
              {linkTitle}
            </CTA>
          </div>
        )}
      </ContentBox>
    </div>
  );
};

export default LargeContentContainer;
