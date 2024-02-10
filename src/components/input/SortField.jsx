import { Select } from '@mantine/core';

const SortField = ({ sort, setSort }) => {
    return (
        <Select
            label="Sort by"
            w={{ base: '100%', sm: '30%' }} mr={10}
            mt={{base:'.7rem',sm:0}}
            placeholder="Sort by"
            value={sort} onChange={setSort}
            data={[
                { value: 'firstName', label: 'Name' },
                { value: 'email', label: 'Email' },
                { value: 'company', label: 'Company name' },
            ]}
        />
    );
}

export default SortField;