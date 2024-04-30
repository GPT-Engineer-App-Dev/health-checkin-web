import { useState, useEffect } from 'react';
import { client } from 'lib/crud';
import { Box, Text, Button, VStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const fetchActivities = async () => {
      const fetchedActivities = await client.getWithPrefix('activity:');
      if (fetchedActivities) {
        setActivities(fetchedActivities.map(item => item.value.text));
      }
    };
    fetchActivities();
  }, []);

  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="2xl" textAlign="center">Your Score</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="lg">Display health score here</Text>
      </Box>
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
            <form onSubmit={async (e) => {
              e.preventDefault();
              const activityInput = e.target.elements.activity.value;
              if (activityInput) {
                const success = await client.set(`activity:${new Date().toISOString()}`, { text: activityInput });
                if (success) {
                  const updatedActivities = await client.getWithPrefix('activity:');
                  setActivities(updatedActivities.map(item => item.value.text));
                }
              }
              onClose();
            }}>
              <Input name="activity" placeholder="Type your activity here..." />
              <Button type="submit" colorScheme="teal" mt={4}>Add Activity</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default Index;