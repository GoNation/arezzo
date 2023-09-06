import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Box, Link as ChakraLink, Flex, Text } from '@chakra-ui/react';
import OpacityBG from '../ui/OpacityBG';
import Title from 'components/ui/Title';
import buildAvatar from 'helpers/general/buildAvatar';
import printAddress from 'helpers/printing/printAddress';
import Link from 'next/link';
import getGoogleString from 'helpers/printing/getGoogleString';

const HeroImage = ({ cloudinaryId, name, description, ...rest }) => (
  <Box
    as="img"
    key={cloudinaryId}
    alt={name || description}
    src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
    w="100%" // Full width
    h="100vh" // Full height
    objectFit="cover" // Equivalent to object-cover
    {...rest}
  />
);

const BusinessInfo = ({ business }) => (
  <Flex
    position="absolute"
    bottom={0}
    w="full"
    justify="center"
    transform="translateX(-50%)"
    left="50%"
    spacing={4}
    pb={4}
    fontSize={['sm', 'base']}
    hoverTextColor="primary"
    zIndex={10}
  >
    <ChakraLink href={`tel:${business.phone}`} color="white">
      {business.phone}
    </ChakraLink>
    <Text color="white">|</Text>
    <ChakraLink href={getGoogleString({ ...business })} color="white">
      {printAddress(business)}
    </ChakraLink>
  </Flex>
);

export const Hero = props => {
  const {
    interval = 6000,
    transitionTime = 3000,
    story,
    showLogo = false,
    business,
    shouldShowPhoneAndDirections = false,
  } = props;

  if (!story) return null;

  return (
    <Box position="relative">
      {shouldShowPhoneAndDirections && (
        <Box
          position="absolute"
          bottom={0}
          left={0}
          w="full"
          h="1/4"
          bgGradient="linear(to-t, black, transparent)"
        ></Box>
      )}
      {shouldShowPhoneAndDirections && <BusinessInfo business={business} />}
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
        // ...Carousel properties as before...
      >
        {story.media.map(mediaItem => (
          <HeroImage {...mediaItem} />
        ))}
      </Carousel>
      <Box
        position="absolute"
        display={['none', 'none', 'block']}
        top={0}
        left={0}
        w="full"
        h="1/4"
        bgGradient="linear(to-b, black, transparent)"
        zIndex={10}
      ></Box>
      <Flex
        position="absolute"
        top={0}
        bottom={0}
        w="full"
        justify="center"
        alignItems={'center'}
        pr={12}
        h="full"
        zIndex={10}
      >
        {showLogo && (
          <Box bg="white" px={4} py={2} borderRadius="md">
            <Image width={500} height={500} src={buildAvatar(business)} />
          </Box>
        )}
        {story?.title?.length && (
          <Title
            size={`order-first text-3xl md:text-4xl lg:text-5xl mb-8 mt-4 text-white font-display uppercase text-shadow tracking-wide`}
            center={true}
          >
            {story.title}
          </Title>
        )}
      </Flex>
      <OpacityBG strength="opacity-20"></OpacityBG>
    </Box>
  );
};
