import { Button, Modal } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import AddNewUser from './AddNewUser';

const AddUserModal = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const isMobile = useMediaQuery("(max-width: 50em)");
    const openModal = () => {
        open();
    }

    return (
        <>
            <Button mt={{ base: '.7rem', sm: '1.5rem' }} w={{ base: '30%', sm: 'auto' }} onClick={openModal} >Add user</Button>
            <Modal
                size="lg"
                fullScreen={isMobile}
                transitionProps={{ transition: 'fade', duration: 200 }}
                opened={opened} onClose={close}
                title="Add new user" centered
            >
                <AddNewUser />
            </Modal>
        </>
    );
}

export default AddUserModal;