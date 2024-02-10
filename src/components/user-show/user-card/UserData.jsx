import { Card, Image, Text, Badge, Box } from '@mantine/core';
import { Link } from "react-router-dom";

const UserData = ({ data }) => {
    const { image, username, firstName, lastName, company, email, address } = data;

    return (
        <>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src={image}
                        height={200}
                        fit="contain"
                        alt={username}
                        p={10}
                    />
                </Card.Section>

                <Text size="1.25rem" weight={700} ><Link to={`/user/${username}`} state={{ userData: data }} style={{ textDecoration: 'none', color: "#0b7285" }}>{firstName + " " + lastName}</Link></Text>
                <Badge mt={5} color="blue" variant="light"> {company?.name} </Badge>

                <Box mt={10}>
                    <Text size="sm" color="dimmed"> <Text span fw="bold" pr={3} inherit>Email : </Text>{email}</Text>
                    <Text size="sm" color="dimmed"> <Text span fw="bold" pr={3} inherit>Address : </Text>{address?.address}, {address?.city}</Text>
                </Box>
            </Card>
        </>
    );
}

export default UserData;