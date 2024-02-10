import { TextInput, Loader } from '@mantine/core';

const SearchField =
    ({ search, setSearch }) =>
        <TextInput label="Search by name" w={{ base: '100%', sm: '30%' }} mr={10} value={search} onChange={(event) => setSearch(event.currentTarget.value)} placeholder="Search by user's name" rightSection={search && <Loader size="xs" />} />
export default SearchField;