import React from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaRobot, FaProjectDiagram, FaLightbulb } from 'react-icons/fa';
import FullScreenSection from './FullScreenSection';

const AboutSection = () => (
  <FullScreenSection
    backgroundColor="white"
    isDarkBackground={false}
    p={8}
    alignItems="center"
    spacing={8}
    id="about-section"
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <VStack spacing={6} maxW="1000px" textAlign="center">
        <Heading as="h1" size="xl" color="brand.800" bgGradient="linear(to-r, brand.500, brand.400)" bgClip="text">
          About Me
        </Heading>
        <Text fontSize="lg" color="brand.700" lineHeight="tall">
          I’m Ayesha — someone who’s always been drawn to the creative side of technology. What started as experimenting with small apps, editing techniques, and design ideas has slowly turned into something I genuinely love doing.
        </Text>
        <Text fontSize="lg" color="brand.700" lineHeight="tall">
          I enjoy building clean interfaces, learning how things work behind the screen, and exploring how design and functionality come together. Whether I’m coding a small project, planning a new idea, or playing around with AI tools, I always try to make things look polished and feel effortless for the user.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full" mt={8}>
          {[
            { icon: FaCode, title: 'Web Development', desc: 'Creating responsive and interactive web applications' },
            { icon: FaPalette, title: 'UI/UX Design', desc: 'Crafting beautiful and intuitive user experiences' },
            { icon: FaRobot, title: 'AI Content', desc: 'Exploring AI-powered creative tools and automation' },
            { icon: FaProjectDiagram, title: 'Interactive Projects', desc: 'Building engaging and dynamic digital experiences' },
            { icon: FaLightbulb, title: 'Minimal Design', desc: 'Focusing on clean, smart, and modern aesthetics' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
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
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                  borderColor: "brand.400"
                }}
                transition="all 0.3s"
              >
                <Icon as={item.icon} w={10} h={10} color="brand.500" />
                <Heading as="h3" size="md" color="brand.800">
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="brand.600" textAlign="center">
                  {item.desc}
                </Text>
              </VStack>
            </motion.div>
          ))}
        </SimpleGrid>

        <Text fontSize="lg" color="brand.700" lineHeight="tall">
          I learn fast, experiment a lot, and think creatively — and I’m constantly exploring how I can combine tech, design, and storytelling into something meaningful.
        </Text>
        <Text fontSize="lg" color="brand.700" lineHeight="tall">
          My long-term goal is to grow into a front-end developer and digital creator, working on innovative projects that feel modern, lightweight, and intuitive.
        </Text>
      </VStack>
    </motion.div>
  </FullScreenSection>
);

export default AboutSection;
