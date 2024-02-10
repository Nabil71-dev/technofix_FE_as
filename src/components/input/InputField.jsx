import { Text, TextInput, FileInput } from "@mantine/core"

const InputField = ({ Type, label, fw, ...value }) => {
    const { required } = { ...value }
    const error = { ...value.error }

    const inputType = () => {
        if (Type === "Text") {
            return (<TextInput sx={{ border: `${error[0] ? '' : '2px solid #D1D1D1'}`, borderRadius: '5px' }} {...value} />)
        }
        else if (Type === "File") {
            return (<FileInput sx={{ border: `${error[0] ? '' : '2px solid #D1D1D1'}`, borderRadius: '5px' }} {...value} />)
        }

    }

    return (
        <>
            {
                fw ? <Text>{label}</Text> : <Text >{label}<Text span c="red" inherit>{(required || Type === "File") ? '*' : ''}</Text></Text>
            }
            {inputType()}
        </>
    );
}

export default InputField;