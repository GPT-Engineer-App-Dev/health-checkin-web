import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="2xl" textAlign="center">Your Score</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="lg">Display health score here</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="lg">Latest activities or "Add your first activity"</Text>
      </Box>
      <Button position="fixed" bottom="20" right="5" colorScheme="teal" variant="solid">
        <FaPlus /> Add
      </Button>
    </VStack>
  );
};

export default Index;