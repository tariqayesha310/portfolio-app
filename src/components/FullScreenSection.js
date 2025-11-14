import * as React from 'react';
import { VStack } from '@chakra-ui/react';

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? 'white' : 'black'}
      minHeight="80vh"
      {...boxProps}
    >
      <VStack maxWidth="1280px" minHeight="80vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
