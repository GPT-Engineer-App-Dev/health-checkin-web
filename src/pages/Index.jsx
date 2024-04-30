import { useState } from 'react';
import { Flex, Box, Text, Button, VStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activities, setActivities] = useState([]);

  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="2xl" textAlign="center">Your Score</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="lg">Display health score here</Text>
      </Box>
      <Text fontSize="xl" fontWeight="bold" mb={2}>Latest Activities</Text>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="lg">{activities.length > 0 ? activities.map((activity, index) => (
          <Text key={index}>{activity}</Text>
        )) : "Add your first activity"}</Text>
      </Box>
      <Button position="fixed" bottom="20" right="5" colorScheme="teal" variant="solid" onClick={onOpen}>
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
                <Button type="submit" colorScheme="teal" mt={4}>Add</Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default Index;