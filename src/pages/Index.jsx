import { useState } from 'react';
import { Flex, Box, Text, Button, VStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activities, setActivities] = useState([{ name: "Morning Run", date: "2023-05-31" }]);

  return (
    <VStack spacing={4} align="stretch" bgGradient="linear(to-r, brand.900, brand.800)">
      <Box p={5} shadow="md" borderWidth="0px">
        <Text fontSize="2xl" textAlign="center">Your Score</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="0px">
        <Text fontSize="3xl" textAlign="center" mt={10} mb={10}>50</Text>
      </Box>
      <Text fontSize="xl" fontWeight="bold" mb={2}>Latest Activities</Text>
      <Box p={5} shadow="md" borderWidth="0px">
        <VStack>
          {activities.length > 0 ? activities.map((activity, index) => (
            <Box key={index} p={4} shadow="md" w="full" mx={4}>
              <Text fontSize="lg">{activity.name}</Text>
              <Text fontSize="xs" color="gray.500">{new Date(activity.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</Text>
            </Box>
          )) : <Text>Add your first activity</Text>}
        </VStack>
      </Box>
      <Button position="fixed" bottom="20" right="5" colorScheme="pink" variant="solid" onClick={onOpen}>
        <FaPlus /> Add
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new activity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={(e) => {
              e.preventDefault();
              const activity = e.target.elements.activity.value;
              setActivities([activity, ...activities]);
              onClose();
            }}>
              <Input name="activity" placeholder="Type your activity here..." />
              <Flex justifyContent="flex-end">
                <Button type="submit" colorScheme="pink" mt={4}>Add</Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default Index;