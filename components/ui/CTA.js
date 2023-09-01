import React from 'react';
import Link from 'next/link';

const CTA = ({ children, url, primaryFilled, unset, tertiary }) => {
  const isExternalURL = url.toLowerCase().includes('.com');
  const target = isExternalURL ? '_blank' : '';

  const baseStyle =
    'text-lg px-12 py-4 transition-all duration-1000 uppercase font-body';
  const primaryFilledStyle =
    'bg-dark text-primary uppercase border-2 border-light hover:text-primary  hover:text-white px-8 py-2 md:py-4 md:px-12';
  const tertiaryStyle =
    'bg-white text-dark border-2 border-dark  hover:text-primary px-8 py-3 xl:px-12 xl:py-3 text-lg lg:text-xl xl:text-2xl uppercase bold ease-in-out duration-500';
  const defaultStyle =
    'bg-tertiary text-primary border-4 border-primary font-bold text-dark hover:bg-primary  hover:text-tertiary ease-in-out duration-500 ';

  const style = unset
    ? baseStyle
    : primaryFilled
    ? primaryFilledStyle
    : tertiary
    ? tertiaryStyle
    : defaultStyle;

  return (
    <Link
      href={url}
      rel={target.length ? 'noopener noreferrer' : ''}
      target={target}
      className={style}
    >
      {children}
    </Link>
  );
};

export default CTA;
