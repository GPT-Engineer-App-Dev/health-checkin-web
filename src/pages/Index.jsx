import { Box, Text, Button, VStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Button position="fixed" bottom="20" right="5" colorScheme="teal" variant="solid" onClick={onOpen}>
        <FaPlus /> Add
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new activity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Type your activity here..." />
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default Index;