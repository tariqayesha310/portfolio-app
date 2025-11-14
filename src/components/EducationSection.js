import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const EducationSection = () => (
  <FullScreenSection
    backgroundColor="#f7fafc"
    isDarkBackground={false}
    p={8}
    alignItems="center"
    spacing={8}
  >
    <VStack spacing={6} maxW="800px" textAlign="center">
      <Heading as="h1" size="xl" color="gray.800">
        Education
      </Heading>
      <Text fontSize="lg" color="gray.600" lineHeight="tall">
        I’m currently pursuing my higher education while actively learning and building projects in:
      </Text>
      <Text fontSize="lg" color="gray.600" lineHeight="tall">
        • Web development<br/>
        • UI/UX<br/>
        • Programming concepts<br/>
        • Creative digital tools<br/>
        • AI-powered content
      </Text>
      <Text fontSize="lg" color="gray.600" lineHeight="tall">
        I’m self-driven and constantly exploring new technologies through courses, tutorials, and hands-on projects.
      </Text>
    </VStack>
  </FullScreenSection>
);

export default EducationSection;
