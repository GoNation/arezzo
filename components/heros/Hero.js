import { useState } from 'react';
import { FaRegLemon } from 'react-icons/fa';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Shout from '../shout/Shout';
import OpacityBG from '../ui/OpacityBG';
import ShoutCard from '../shout/ShoutCard';
import Title from 'components/ui/Title';
import buildAvatar from 'helpers/general/buildAvatar';
import printAddress from 'helpers/printing/printAddress';
import Link from 'next/link';
import getGoogleString from 'helpers/printing/getGoogleString';

export const Hero = ({
  imgClassList = 'h-screen md:h-[900px] lg:h-screen',
  imageWrapperClassList = '',
  interval = 6000,
  transitionTime = 3000,
  story,
  shout,
  showLogo = false,
  business,
  shouldShowPhoneAndDirections = false,
}) => {
  const [displayShoutOverlay, setDisplayShoutOverlay] = useState(false);
  const defaultImageStyle = 'object-cover flex ';
  if (!story) {
    return;
  }
  const { media } = story;

  if (!story) {
    return '';
  }

  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <span className="text-white render-icon px-2">
          <img className="max-w-[25px]" src="/svg.svg" alt="Lemon" />
        </span>
      );
    }
    return (
      <span className="text-white render-icon px-2">
        <FaRegLemon></FaRegLemon>
      </span>
    );
  };

  return (
    <div className="relative ">
      {/* Bottom Opacity Overlay */}
      {shouldShowPhoneAndDirections && (
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
      )}
      {/* Phone Number and Address */}
      {shouldShowPhoneAndDirections && (
        <div className="absolute bottom-0 w-full justify-center left-1/2 transform -translate-x-1/2 flex items-center space-x-4 pb-4 text-sm sm:text-base hover:text-primary z-10">
          <Link href={`tel:${business.phone}`} className="text-white">
            {business.phone}
          </Link>{' '}
          {/* Your phone number here */}
          <span className="text-white">|</span>
          <Link href={getGoogleString({ ...business })} className="text-white">
            {printAddress(business)}
          </Link>
        </div>
      )}
      <div className=""></div>
      <Carousel
        animationHandler="fade"
        autoPlay={true}
        infiniteLoop={true}
        interval={interval}
        transitionTime={transitionTime}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable={false}
        showIndicators={false}
        // renderIndicator={(onClickHandler, isSelected, index, label) =>
        //   renderIndicator(onClickHandler, isSelected, index, label)
        // }
      >
        {media.map(({ cloudinaryId, name, description }) => (
          <img
            key={cloudinaryId}
            alt={name || description}
            className={`${defaultImageStyle} ${imgClassList} object-cover `}
            layout="fill"
            // width={1900}
            // height={800}
            // width={800}
            // height={800}
            src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
          />
        ))}
      </Carousel>
      <div className="absolute hidden lg:block top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent z-10"></div>

      {/* {shout ? <Shout data={shout}></Shout> : ''} */}
      <div className="absolute md:top-0 bottom-0 w-full flex flex-col md:flex-row  md:justify-center pr-12   justify-center items-center h-full bottom-0 left-0 right-0 top-0 flex z-10">
        <div className=" absolute flex h-full left-0 top-0 w-full  hidden md:flex flex-col justify-center items-center  lg:items-center lg:justify-center z-10 ">
          {showLogo ? (
            <div className="bg-white px-4 py-2 rounded   lg:flex">
              <Image
                width={500}
                height={500}
                className=" "
                src={buildAvatar(business)}
              />
            </div>
          ) : (
            ''
          )}
          {story?.title?.length ? (
            <Title
              size={`order-first text-3xl md:text-4xl lg:text-5xl mb-8 mt-4 text-white font-display uppercase text-shadow tracking-wide`}
              center={true}
            >
              {story.title}
            </Title>
          ) : (
            ''
          )}
        </div>
      </div>
      <OpacityBG strength="opacity-20"></OpacityBG>
    </div>
  );
};
