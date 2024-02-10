import { useState } from 'react';
import { Box, Button, Group, Loader } from "@mantine/core"
import { useForm } from "@mantine/form"
import UserFormFields from "./UserFormFields";

const AddNewUser = ({ close }) => {
    const [isSubmit, setSubmit] = useState(false);
    const form = useForm()

    const Submit = async (values) => {
        setSubmit(true);
        form.reset();
        console.log(values)
        close()
        setSubmit(false);
    }

    return (
        <>
            <Box p={15} >
                <form onSubmit={form.onSubmit(values => Submit(values))}>
                    <UserFormFields form={form} />
                    <Group position="center" mt="md">
                        
                        {
                            isSubmit ? <Button variant="outline" size="xs"><Loader size="xs" /></Button> : <Button type="submit">Submit</Button>
                        }
                    </Group>
                </form>
            </Box>
        </>
    );
}

export default AddNewUser;