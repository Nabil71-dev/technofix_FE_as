import { Button, Center } from '@mantine/core';
import { useState,useMemo } from 'react';

const LoadMore = ({ search, users, setPage }) => {
    const [left, setLeft] = useState();

    useMemo(() => {
        setLeft(users?.total - users?.limit)
    }, [users])

    return (
        <Center mt={10}>
            {
                !search && left > 0 ? <Button onClick={() => setPage(page => page + 1)} variant="subtle" color="blue.7" size="md">Click to load more</Button> : null
            }
        </Center>
    );
}

export default LoadMore;