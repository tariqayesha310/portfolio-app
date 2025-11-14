import { Heading, HStack, Image, Text, VStack, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="lg"
      color="black"
      cursor="pointer"
      spacing={0}
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt={title} borderRadius="lg" width="100%" />
      <VStack spacing={4} p={4} alignItems="flex-start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>
        <HStack spacing={2}>
          <Link href={url} isExternal color="teal.500" fontSize="sm" fontWeight="bold">
            See more
          </Link>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
