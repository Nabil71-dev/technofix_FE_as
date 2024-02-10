const SortByField = (field, ascending) => {
    if (field == 'company') {
        return (a, b) => {
            const valueA = field?.split('.')?.reduce((obj, key) => obj[key], a);
            const valueB = field?.split('.')?.reduce((obj, key) => obj[key], b);
            const comparison = valueA?.name?.localeCompare(valueB?.name);
            return (ascending ? 1 : -1) * comparison;
        };
    }
    else {
        return (a, b) => {
            const comparison = a[field].localeCompare(b[field]);
            return (ascending ? 1 : -1) * comparison;
        };
    }
}

export default SortByField;