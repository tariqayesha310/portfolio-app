import React from 'react';
import { Box, Heading, VStack, HStack, Text, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import FullScreenSection from './FullScreenSection';

const ContactSection = () => (
  <FullScreenSection
    backgroundColor="brand.100"
    isDarkBackground={false}
    p={8}
    alignItems="center"
    spacing={8}
    id="contact-section"
  >
    <VStack spacing={8} maxW="1000px" w="full">
      <Heading as="h1" size="xl" color="brand.800" textAlign="center">
        Let's Connect
      </Heading>
      <Text fontSize="lg" color="brand.700" maxW="600px" textAlign="center">
        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and design.
      </Text>
      <HStack spacing={8} wrap="wrap" justify="center">
        <Link href="https://github.com/tariqayesha310" isExternal _hover={{ textDecoration: 'none' }}>
          <VStack spacing={2} p={4} borderRadius="lg" bg="white" boxShadow="md" minW="120px" _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }} transition="all 0.3s">
            <Icon as={FaGithub} size="2xl" color="gray.700" />
            <Text fontWeight="semibold" color="gray.700">GitHub</Text>
          </VStack>
        </Link>
        <Link href="https://www.linkedin.com/in/ayesha-tariq-637516362/" isExternal _hover={{ textDecoration: 'none' }}>
          <VStack spacing={2} p={4} borderRadius="lg" bg="white" boxShadow="md" minW="120px" _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }} transition="all 0.3s">
            <Icon as={FaLinkedin} size="2xl" color="blue.600" />
            <Text fontWeight="semibold" color="gray.700">LinkedIn</Text>
          </VStack>
        </Link>
        <Link href="mailto:tariqayesha310@gmail.com" _hover={{ textDecoration: 'none' }}>
          <VStack spacing={2} p={4} borderRadius="lg" bg="white" boxShadow="md" minW="120px" _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }} transition="all 0.3s">
            <Icon as={FaEnvelope} size="2xl" color="red.500" />
            <Text fontWeight="semibold" color="gray.700">Email</Text>
          </VStack>
        </Link>
      </HStack>
    </VStack>
  </FullScreenSection>
);

export default ContactSection;
