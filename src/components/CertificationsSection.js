import React from 'react';
import { Box, Heading, VStack, SimpleGrid, Text, Link, Icon } from '@chakra-ui/react';
import { FaCertificate } from 'react-icons/fa';
import FullScreenSection from './FullScreenSection';

const certifications = [
  {
    title: 'Meta Front-End Developer',
    link: 'https://coursera.org/share/285b42ede56825de82e37601ebd726e3',
  },
  {
    title: 'Google Data Analytics',
    link: 'https://coursera.org/share/33b5337636880754cc1478e2b2cd6d55',
  },
  {
    title: 'Google Cybersecurity',
    link: 'https://coursera.org/share/5e365e3bf26f6c342017deb3567503b1',
  },
  {
    title: 'AI Foundations for Everyone',
    link: 'https://coursera.org/share/65f29a76233f072f2e6e53beab388d36',
  },
  {
    title: 'Introduction to Data Science',
    link: 'https://coursera.org/share/9046c5f8fdda6571f4b8cf4ad0e8b675',
  },
  {
    title: 'Skill Up with Python: Data Science and Machine Learning Recipes',
    link: 'https://coursera.org/share/ef0778d7e01d9da7faf034e24fd9f0ff',
  },
  {
    title: 'Duolingo English Proficiency Test',
    link: 'https://certs.duolingo.com/fwjtzczahzse3hkl',
  },
];

const CertificationsSection = () => (
  <FullScreenSection
    backgroundColor="#f7fafc"
    isDarkBackground={false}
    p={8}
    alignItems="center"
    spacing={8}
  >
    <VStack spacing={8} maxW="1200px" w="full">
      <Heading as="h1" size="xl" color="gray.800" textAlign="center">
        Certifications
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
        {certifications.map((cert, index) => (
          <Box
            key={index}
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="md"
            border="1px solid"
            borderColor="gray.200"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'lg',
              borderColor: 'teal.300',
            }}
          >
            <VStack spacing={4} align="center">
              <Icon as={FaCertificate} size="2xl" color="teal.500" />
              <Text fontSize="lg" fontWeight="bold" color="gray.800" textAlign="center">
                {cert.title}
              </Text>
              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                color="teal.500"
                fontWeight="semibold"
                _hover={{ color: 'teal.600', textDecoration: 'underline' }}
              >
                View Certificate
              </Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  </FullScreenSection>
);

export default CertificationsSection;
