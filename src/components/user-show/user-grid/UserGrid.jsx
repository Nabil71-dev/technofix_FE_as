import { Loader, SimpleGrid, Text } from '@mantine/core';
import SortByField from '../../../service/sortField.servic';
import UserData from '../user-card/UserData';

const UserGrid = ({ isLoading, users, isError, sortBy, search }) => {
    return (
        <SimpleGrid
            cols={3}
            spacing="md"
            breakpoints={[
                { maxWidth: '68rem', cols: 2, spacing: 'md' },
                { maxWidth: '48rem', cols: 1, spacing: 'sm' },
            ]}
        >
            {
                isLoading && <Loader size="lg" />
            }
            {
                !isLoading && users ? users?.users?.sort(SortByField(sortBy, true))?.map((val) => ((val?.firstName.includes(search)) || (val?.lastName.includes(search))) && <UserData key={val?.id} data={val} />) : null
            }
            {
                !isLoading && isError && <Text c="red">{isError}</Text>
            }
        </SimpleGrid>
    );
}

export default UserGrid;