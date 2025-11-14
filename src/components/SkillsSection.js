import React from 'react';
import { Heading, Text, VStack, HStack, SimpleGrid, Progress, Icon, Button, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaRobot, FaUsers } from 'react-icons/fa';
import FullScreenSection from './FullScreenSection';

const skillsData = [
  {
    category: 'Technical Skills',
    icon: FaCode,
    color: 'blue',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'React', level: 70 },
      { name: 'Python', level: 80 },
      { name: 'TypeScript', level: 65 },
      { name: 'Git & GitHub', level: 85 },
    ]
  },
  {
    category: 'Design & Tools',
    icon: FaPalette,
    color: 'purple',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Canva', level: 90 },
      { name: 'Adobe Creative Suite', level: 75 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'WordPress', level: 70 },
      { name: 'Notion', level: 85 },
    ]
  },
  {
    category: 'AI & Automation',
    icon: FaRobot,
    color: 'green',
    skills: [
      { name: 'AI Video Creation', level: 80 },
      { name: 'AI Design Tools', level: 75 },
      { name: 'Automation Scripts', level: 70 },
      { name: 'ChatGPT & AI Tools', level: 85 },
    ]
  },
];

const softSkills = [
  'Creative Problem-Solving',
  'Self-Learning & Consistency',
  'Communication',
  'Leadership',
  'Project Planning',
  'Design Thinking'
];

const SkillsSection = () => (
  <FullScreenSection
    backgroundColor="brand.50"
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
      <VStack spacing={10} maxW="1200px" textAlign="center">
        <Heading as="h1" size="xl" color="brand.800" bgGradient="linear(to-r, brand.500, brand.400)" bgClip="text">
          Skills & Expertise
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <VStack
                spacing={6}
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
                <HStack spacing={3}>
                  <Icon as={category.icon} w={8} h={8} color={`${category.color}.500`} />
                  <Heading as="h3" size="md" color="brand.800">
                    {category.category}
                  </Heading>
                </HStack>

                <VStack spacing={4} w="full" align="start">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      w="full"
                    >
                      <HStack justify="space-between" mb={2}>
                        <Text fontSize="sm" fontWeight="medium" color="brand.700">
                          {skill.name}
                        </Text>
                        <Text fontSize="xs" color="brand.500" fontWeight="bold">
                          {skill.level}%
                        </Text>
                      </HStack>
                      <Progress
                        value={skill.level}
                        colorScheme={category.color}
                        size="sm"
                        borderRadius="md"
                        bg="brand.100"
                      />
                    </motion.div>
                  ))}
                </VStack>
              </VStack>
            </motion.div>
          ))}
        </SimpleGrid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <VStack spacing={6} p={8} bg="white" borderRadius="xl" boxShadow="lg" border="1px solid" borderColor="brand.200">
            <HStack spacing={3}>
              <Icon as={FaUsers} w={8} h={8} color="orange.500" />
              <Heading as="h3" size="lg" color="brand.800">
                Soft Skills
              </Heading>
            </HStack>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} w="full">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    px={4}
                    py={2}
                    borderRadius="full"
                    bg="brand.100"
                    color="brand.700"
                    fontSize="sm"
                    fontWeight="medium"
                    _hover={{
                      bg: "brand.200",
                      transform: "scale(1.05)"
                    }}
                    transition="all 0.2s"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </SimpleGrid>
          </VStack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <VStack spacing={4}>
            <Text fontSize="lg" color="brand.700" textAlign="center" maxW="600px">
              I'm passionate about continuous learning and exploring new technologies.
              Every project is an opportunity to grow and create something extraordinary.
            </Text>
            <HStack spacing={4}>
              <Button
                colorScheme="teal"
                size="lg"
                variant="solid"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
                onClick={() => window.open('https://github.com/tariqayesha310', '_blank')}
              >
                <Icon as={FaCode} mr={2} />
                View GitHub
              </Button>
              <Button
                colorScheme="teal"
                size="lg"
                variant="outline"
                _hover={{ bg: "brand.500", color: "white", transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
                onClick={() => window.open('https://www.linkedin.com/in/ayesha-tariq-310/', '_blank')}
              >
                <Icon as={FaUsers} mr={2} />
                Connect on LinkedIn
              </Button>
            </HStack>
          </VStack>
        </motion.div>
      </VStack>
    </motion.div>
  </FullScreenSection>
);

export default SkillsSection;
