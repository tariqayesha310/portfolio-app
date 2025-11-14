import React from 'react';
import { Box, Heading, Text, VStack, Link, List, ListItem, ListIcon } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import FullScreenSection from './FullScreenSection';

const ExperienceSection = () => (
  <FullScreenSection
    backgroundColor="#f7fafc"
    isDarkBackground={false}
    p={8}
    alignItems="center"
    spacing={8}
  >
    <VStack spacing={6} maxW="800px" textAlign="center">
      <Heading as="h1" size="xl" color="gray.800">
        Experience
      </Heading>
      <VStack spacing={4} align="start" w="full">
        <Heading as="h3" size="md" color="gray.700">
          Freelance Digital Creator
        </Heading>
        <Text fontSize="lg" color="gray.600" lineHeight="tall">
          I’ve created content, edited videos, designed visuals, and helped people with their digital presence.
        </Text>
        <Heading as="h3" size="md" color="gray.700">
          Personal & Academic Projects
        </Heading>
        <Text fontSize="lg" color="gray.600" lineHeight="tall">
          I’ve worked on tech-focused assignments, small apps, designs, and creative digital projects — always experimenting with new tools and improving my skills.
        </Text>
        <Heading as="h3" size="md" color="gray.700">
          Internships & Certificates
        </Heading>
        <List spacing={3} w="full">
          <ListItem>
            <ListIcon as={DownloadIcon} color="teal.500" />
            <Link href="/documents/ibm-generative-ai.pdf" isExternal color="teal.500">
              IBM Generative AI Engineering Certificate
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={DownloadIcon} color="teal.500" />
            <Link href="/documents/ibm-data-science.pdf" isExternal color="teal.500">
              IBM Introduction to Data Science Certificate
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={DownloadIcon} color="teal.500" />
            <Link href="/documents/meta-frontend.pdf" isExternal color="teal.500">
              Meta Front-End Developer Certificate
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={DownloadIcon} color="teal.500" />
            <Link href="/documents/google-data-analytics.pdf" isExternal color="teal.500">
              Google Data Analytics Certificate
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={DownloadIcon} color="teal.500" />
            <Link href="/documents/google-cybersecurity.pdf" isExternal color="teal.500">
              Google Cybersecurity Certificate
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={DownloadIcon} color="teal.500" />
            <Link href="/documents/pearson-python.pdf" isExternal color="teal.500">
              Pearson Python Data Science Certificate
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={DownloadIcon} color="teal.500" />
            <Link href="/documents/internship-letter-1.pdf" isExternal color="teal.500">
              Internship Letter 1 - [Company Name]
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={DownloadIcon} color="teal.500" />
            <Link href="/documents/internship-letter-2.pdf" isExternal color="teal.500">
              Internship Letter 2 - [Company Name]
            </Link>
          </ListItem>
        </List>
        <Text fontSize="sm" color="gray.500">
          Note: Place your PDF files in the public/documents/ folder with the filenames above. Update descriptions if needed.
        </Text>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default ExperienceSection;
