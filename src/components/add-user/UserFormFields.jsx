import { Text } from "@mantine/core";
import InputField from "../input/InputField";

const UserFormFields = ({ form }) => {
    return (
        <>
            <InputField mb={8} label="First name" placeholder="Enter first name" required Type="Text" {...form.getInputProps("firstName")} />
            <InputField mb={8} label="Last name" placeholder="Enter last name" required Type="Text" {...form.getInputProps("LastName")} />
            <InputField mb={15} label="Email" placeholder="Enter email" required Type="Text" {...form.getInputProps("email")} />
            <Text>Address details</Text>
            <InputField mb={8} label="Street" placeholder="Enter Street" required Type="Text" {...form.getInputProps("street")} />
            <InputField mb={8} label="Suite" placeholder="Enter Suite" required Type="Text" {...form.getInputProps("suite")} />
            <InputField mb={20} label="City" placeholder="Enter City" required Type="Text" {...form.getInputProps("city")} />
            <InputField mb={8} label="Company name" placeholder="Enter company name" required Type="Text" {...form.getInputProps("companyName")} />
            <InputField label="Image" placeholder="Upload image" required Type="File" {...form.getInputProps("image")} />
        </>
    );
}

export default UserFormFields;