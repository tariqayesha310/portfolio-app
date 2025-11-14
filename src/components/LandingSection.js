import React from 'react';
import { Avatar, Heading, VStack, Text, Box, HStack, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hi, I’m Ayesha — a creative developer and digital creator who loves turning ideas into clean, smart, and modern experiences.';
const bio = 'I blend technology, design, and creativity to build things that feel simple, useful, and beautiful.';

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground={false}
    backgroundColor="linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)"
    position="relative"
    overflow="hidden"
  >
    {/* Animated background shapes */}
    <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex="-1">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(56, 178, 172, 0.08)',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </Box>

    <VStack spacing={10} textAlign="center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Avatar
          src="/images/Ayesha.JPG"
          size="2xl"
          name="Ayesha Tariq"
          border="5px solid"
          borderColor="brand.500"
          borderRadius="md"
          boxShadow="0 0 50px rgba(56, 178, 172, 0.4)"
          bg="white"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Heading as="h1" size="2xl" color="brand.800" fontWeight="bold">
          {greeting}
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Text fontSize="xl" color="brand.700" maxW="700px" fontWeight="500" lineHeight="1.6">
          {bio}
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <HStack spacing={4}>
          <Button
            colorScheme="teal"
            size="lg"
            rightIcon={<FaArrowDown />}
            onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
          <Button
            variant="outline"
            colorScheme="teal"
            size="lg"
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </HStack>
      </motion.div>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
