import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FaHome, FaChartBar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <Box position="fixed" bottom="0" left="0" right="0" bg="gray.100" p="2">
      <Flex justify="space-around">
        <IconButton
          aria-label="Home"
          icon={<FaHome />}
          onClick={() => navigate('/')}
        />
        <IconButton
          aria-label="Results"
          icon={<FaChartBar />}
          onClick={() => navigate('/results')}
        />
      </Flex>
    </Box>
  );
};

export default BottomNav;