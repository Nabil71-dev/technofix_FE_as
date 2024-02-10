import { Flex, Container, Box, Group } from '@mantine/core';
import { useState, useEffect } from 'react';
import { getUsers } from '../service/userList.service';
import AddUserModal from '../components/add-user/AddUser.modal';
import SortField from '../components/input/SortField';
import SearchField from '../components/input/SearchField';
import UserGrid from '../components/user-show/user-grid/UserGrid';
import LoadMore from '../components/user-show/load-more-user/LoadMore';

const AllUser = () => {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState("");
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState("firstName");

    useEffect(() => {
        getUsers(page)
            .then(res => {
                setUsers(res.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setError(err?.message)
            })
    }, [page])

    return (
        <>
            <Flex justify="center" sx={{ width: "100%", minHeight: "100%" }}>
                <Box w={'90%'} mb="md" mt="lg">
                    <Container size="85rem">

                        <Flex pt={15} pb={15} direction={{ base: 'column', sm: 'row' }} justify="end">
                            <SearchField search={search} setSearch={setSearch} />
                            <SortField sort={sortBy} setSort={setSortBy} />
                            <AddUserModal />
                        </Flex>
                        

                        <UserGrid isLoading={isLoading} users={users} isError={isError} sortBy={sortBy} search={search} />
                        <LoadMore search={search} setPage={setPage} users={users} />
                    </Container>
                </Box>
            </Flex>

        </>
    );
}

export default AllUser;