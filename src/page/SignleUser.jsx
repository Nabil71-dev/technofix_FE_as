import { Flex, Container, Box, Center, Button } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import UserData from '../components/user-show/user-card/UserData';

const SignleUser = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <Flex justify="center" align="center" sx={{ width: "100%", minHeight: "100%" }}>
                <Box mb="md" mt="lg">
                    <Container>
                        <Center>
                            <UserData data={state?.userData} />
                        </Center>
                        <Button mt={8} w="100%" onClick={() => navigate(-1)} variant="filled" color="blue" size="md">Go back</Button>
                    </Container>
                </Box>
            </Flex>
        </>
    );
}

export default SignleUser;