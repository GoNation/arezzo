import React from 'react';
import CTA from './ui/CTA';
import Body from './ui/Body';

const ContentComponent = ({
  title,
  subtitle,
  body,
  linkTitle,
  linkAddress,
  reversed,
  styles = {},
}) => {
  // Merge default styles with provided styles

  return (
    <div
      className={`${
        styles.containerStyle
      } !py-16 md:py-32 lg:py-64 !items-start !px-5 ${
        reversed ? 'md:order-first' : ''
      }`}
    >
      <h4
        className={`${styles.titleStyle} lg:!text-4xl !text-3xl font-light !text-gray-800 xl:!max-w-xl `}
      >
        {title}
      </h4>
      {subtitle && (
        <h5
          className={`${styles.subtitleStyle} !text-lg !font-bold normal-case`}
        >
          {subtitle}
        </h5>
      )}
      <div className={`${styles.bodyContainerStyle} !max-w-none  !text-left`}>
        <Body body={body} />
      </div>
      {linkTitle && linkAddress && (
        <CTA url={linkAddress} tertiary>
          {linkTitle}
        </CTA>
      )}
    </div>
  );
};

export default ContentComponent;
