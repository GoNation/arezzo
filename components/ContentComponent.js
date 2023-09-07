import React from 'react';

import Body from './ui/Body';
import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const ContentComponent = ({
  title,
  subtitle,
  body,
  linkTitle,
  linkAddress,
  reversed,
  styles = {},
}) => {
  const isExternalURL = linkAddress?.toLowerCase().includes('.com');
  const target = isExternalURL ? '_blank' : '';
  return (
    <Box
      py={{ base: '16', md: '32', lg: '64' }}
      px="5"
      alignItems="start"
      order={reversed && { md: '1' }}
    >
      <Heading
        as="h4"
        fontSize={{ lg: '4xl', base: '3xl' }}
        fontWeight="light"
        color="gray.800"
        maxWidth={{ xl: 'xl' }}
      >
        {title}
      </Heading>
      {subtitle && (
        <Heading
          as="h5"
          fontSize="lg"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {subtitle}
        </Heading>
      )}
      <Box maxWidth="none" textAlign="left">
        <Body body={body} />
      </Box>
      {linkTitle && linkAddress && (
        <Link href={linkAddress} passHref target={target}>
          <Button variant={'primaryFilled'}>{linkTitle || linkAddress}</Button>
        </Link>
      )}
    </Box>
  );
};

export default ContentComponent;
