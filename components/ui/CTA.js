import React from 'react';
import Link from 'next/link';

const CTA = ({ children, url, primaryFilled, unset, tertiary }) => {
  const isExternalURL = url.toLowerCase().includes('.com');
  const target = isExternalURL ? '_blank' : '';

  const baseStyle =
    'bg-transparent text-white border-2 border-white  hover:text-primary px-8 py-3 xl:px-12 xl:py-3 text-lg lg:text-xl xl:text-2xl uppercase bold ease-in-out duration-500 hover:bg-white';
  const primaryFilledStyle =
    'bg-dark text-primary uppercase border-2 border-light hover:text-primary  hover:text-white px-8 py-2 md:py-4 md:px-12';
  const tertiaryStyle =
    'bg-transparent  text-dark border-2 border-dark  hover:text-primary px-8 py-3 xl:px-12 xl:py-3 text-lg lg:text-xl xl:text-2xl uppercase bold ease-in-out duration-500 hover:bg-white';
  const defaultStyle =
    'bg-transparent  text-dark border-2 border-dark  hover:text-primary px-8 py-3 xl:px-12 xl:py-3 text-lg lg:text-xl xl:text-2xl uppercase bold ease-in-out duration-500 hover:bg-white';

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
