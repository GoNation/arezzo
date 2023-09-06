import React from 'react';
import { useCMS, useForm, usePlugin } from 'tinacms';

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
  //   const cms = useCMS();

  //   const [data, form] = useForm({
  //     ...contentForm,
  //     initialValues: initialData,
  //   });

  //   usePlugin(form);

  const isExternalURL = linkAddress?.toLowerCase().includes('.com');
  const target = isExternalURL ? '_blank' : '';
  return (
    <Box
      py={{ base: '16', md: '32', lg: '64' }}
      px="5"
      alignItems="start"
      order={reversed && { md: '1' }}
      {...styles.containerStyle}
    >
      <Heading
        as="h4"
        fontSize={{ lg: '4xl', base: '3xl' }}
        fontWeight="light"
        color="gray.800"
        maxWidth={{ xl: 'xl' }}
        {...styles.titleStyle}
      >
        {title}
      </Heading>
      {subtitle && (
        <Heading
          as="h5"
          fontSize="lg"
          fontWeight="bold"
          textTransform="capitalize"
          {...styles.subtitleStyle}
        >
          {subtitle}
        </Heading>
      )}
      <Box maxWidth="none" textAlign="left" {...styles.bodyContainerStyle}>
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
