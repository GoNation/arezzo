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
      } py-24 md:py-32 lg:py-64 !items-start ${
        reversed ? 'md:order-first' : ''
      }`}
    >
      <h4 className={`${styles.titleStyle} lg:!text-5xl font-light`}>
        {title}
      </h4>
      {subtitle && <h5 className={styles.subtitleStyle}>{subtitle}</h5>}
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
