import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading, VStack, Text, SimpleGrid, HStack, Badge, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Todo App',
    description: 'A clean, minimal to-do app that helps users organize daily tasks. Tech: HTML, CSS, JavaScript. Learned: DOM structure, user-friendly layouts, responsive thinking.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/tariqayesha310/todo-app.git'
  },
  {
    title: 'MathPath',
    description: 'A small math-learning program with problem-solving exercises. Tech: Python. Learned: algorithms, logic flows, structuring programs.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tech: ['Python'],
    link: 'https://github.com/tariqayesha310/MathPath.git'
  },
  {
    title: 'Calculator App',
    description: 'A functional calculator built using Python with smooth basic operations. Learned: modular functions, debugging, building simple tools.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2011&q=80',
    tech: ['Python'],
    link: 'https://github.com/tariqayesha310/calculator-app.git'
  },
  {
    title: 'CityQuest AR',
    description: 'An augmented reality mini-game that mixes real environments with virtual objects. Tech: TypeScript. Learned: AR fundamentals, TypeScript structure.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tech: ['TypeScript'],
    link: 'https://github.com/tariqayesha310/CityQuest-AR-.git'
  },
  {
    title: 'Student Portal App',
    description: 'A simple portal to organize student resources like assignments and course info. Tech: TypeScript. Learned: UI flow, data display, component-based design.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    tech: ['TypeScript'],
    link: 'https://github.com/tariqayesha310/student-portal-app.git'
  },
  {
    title: 'Logic Puzzle Game',
    description: 'A puzzle game that challenges users to think logically and solve patterns. Tech: JavaScript. Learned: game logic, event triggers, interaction design.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tech: ['JavaScript'],
    link: 'https://github.com/tariqayesha310/Logic-Puzzle-Game.git'
  },
  {
    title: 'Habit Building App',
    description: 'A daily habit tracker built to help maintain consistency and track progress. Tech: JavaScript. Learned: local storage, behavior design, minimal UI.',
    getImageSrc: () => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tech: ['JavaScript'],
    link: 'https://github.com/tariqayesha310/Habit-Building-App-.git'
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="brand.100"
      isDarkBackground={false}
      p={8}
      alignItems="center"
      spacing={8}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <VStack spacing={8} maxW="1200px" textAlign="center">
          <Heading as="h1" id="projects-section" color="brand.800" bgGradient="linear(to-r, brand.500, brand.400)" bgClip="text">
            Featured Projects
          </Heading>
          <Text fontSize="lg" color="brand.700" maxW="600px">
            A collection of projects that showcase my journey in web development, problem-solving, and creative coding.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <VStack
                  spacing={4}
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="lg"
                  border="1px solid"
                  borderColor="brand.200"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "xl",
                    borderColor: "brand.400"
                  }}
                  transition="all 0.3s"
                  align="start"
                  h="full"
                >
                  <Box
                    w="full"
                    h="200px"
                    borderRadius="lg"
                    overflow="hidden"
                    bg="gray.100"
                  >
                    <img
                      src={project.getImageSrc()}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>

                  <VStack spacing={3} align="start" w="full">
                    <Heading as="h3" size="md" color="brand.800">
                      {project.title}
                    </Heading>

                    <HStack spacing={2} wrap="wrap">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          px={2}
                          py={1}
                          borderRadius="md"
                          bg="brand.100"
                          color="brand.700"
                          fontSize="xs"
                          fontWeight="medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </HStack>

                    <Text fontSize="sm" color="brand.600" lineHeight="tall">
                      {project.description}
                    </Text>

                    <Button
                      size="sm"
                      colorScheme="teal"
                      variant="outline"
                      _hover={{ bg: "brand.500", color: "white" }}
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project
                    </Button>
                  </VStack>
                </VStack>
              </motion.div>
            ))}
          </SimpleGrid>
        </VStack>
      </motion.div>
    </FullScreenSection>
  );
};

export default ProjectsSection;
