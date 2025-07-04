import { useState } from 'react';
import {
    Stack,
    TextInput,
    Select,
    Textarea,
    Button,
    Box,
    LoadingOverlay,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { modals } from '@mantine/modals';

const industries = [
    { value: 'BLDR', label: 'Builder' },
    { value: 'ARCH', label: 'Architect' },
    { value: 'ENGR', label: 'Engineer' },
    { value: 'PM', label: 'Project Manager' },
    { value: 'PD', label: 'Project Developer' },
    { value: 'GOVT', label: 'Government' },
    { value: 'EDUC', label: 'Education' },
    { value: 'MINE', label: 'Mining' },
    { value: 'AUTO', label: 'Automotive' },
    { value: 'OTHR', label: 'Other' },
];

const services = [
    {
        value: 'MM',
        label: 'Multimedia Visualization - 3D/4D/5D/Renders/Flythroughs',
    },
    { value: 'PCPM', label: 'Project Control & Project Management' },
    { value: 'CP', label: 'Construction Programmes' },
    { value: 'IP', label: 'Interactive Platforms' },
    { value: 'PD', label: 'Project Developer' },
    { value: 'OTHR', label: 'Other' },
];

const ContactForm = () => {
    const [indIsOpen, setIndOpen] = useState(false);
    const [servIsOpen, setServOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            firstName: '',
            surname: '',
            company: '',
            industry: '',
            industrySpec: '',
            email: '',
            mobile: '',
            service: '',
            serviceSepc: '',
        },
        onValuesChange: (values) => {
            if (values.industry === 'OTHR') {
                setIndOpen(true);
            }
            if (values.industry !== 'OTHR') {
                setIndOpen(false);
                form.setFieldValue('industrySpec');
            }
            if (values.service === 'OTHR') {
                setServOpen(true);
            }
            if (values.service !== 'OTHR') {
                setServOpen(false);
                form.setFieldValue('serviceSepc');
            }
        },
        validate: {
            firstName: (value) =>
                value.length > 0 ? null : 'First name is required',
            surname: (value) =>
                value.length > 0 ? null : 'Surname is required',
            company: (value) =>
                value.length > 0 ? null : 'Company name is required',
            industry: (value) =>
                value.length > 0 ? null : 'Industry is required',
            industrySpec: (value, values) =>
                values.industry === 'OTHR' && value.length === 0
                    ? 'Please specify the industry'
                    : null,
            email: (value) =>
                /^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email address',
            mobile: (value) =>
                value.length > 0 ? null : 'Mobile number is required',
            service: (value) =>
                value.length > 0 ? null : 'Service is required',
            serviceSepc: (value, values) =>
                values.service === 'OTHR' && value.length === 0
                    ? 'Please specify the service'
                    : null,
        },
    });

    const handleSubmit = async (values) => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            form.reset();
            modals.closeAll();
        }, 5000);
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Box pos={'relative'}>
                <LoadingOverlay
                    visible={visible}
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: 2 }}
                />
                <Stack my={'1rem'}>
                    <TextInput
                        label='First Name'
                        withAsterisk
                        key={form.key('firstName')}
                        {...form.getInputProps('firstName')}
                    />
                    <TextInput
                        label='Surname'
                        withAsterisk
                        key={form.key('surname')}
                        {...form.getInputProps('surname')}
                    />
                    <TextInput
                        label='Company Name'
                        withAsterisk
                        key={form.key('company')}
                        {...form.getInputProps('company')}
                    />
                    <Select
                        label='Industry'
                        withAsterisk
                        data={industries}
                        key={form.key('industry')}
                        {...form.getInputProps('industry')}
                    />

                    {indIsOpen && (
                        <TextInput
                            label='Please Specify'
                            key={form.key('industrySpec')}
                            {...form.getInputProps('industrySpec')}
                        />
                    )}
                    <TextInput
                        label='Email'
                        withAsterisk
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        label='Mobile or Phone'
                        withAsterisk
                        key={form.key('mobile')}
                        {...form.getInputProps('mobile')}
                    />
                    <Select
                        label='Service of Interest'
                        withAsterisk
                        data={services}
                        key={form.key('service')}
                        {...form.getInputProps('service')}
                    />
                    {servIsOpen && (
                        <TextInput
                            label='Please Specify'
                            key={form.key('serviceSepc')}
                            {...form.getInputProps('serviceSepc')}
                        />
                    )}
                    <Textarea
                        label='Message'
                        key={form.key('message')}
                        {...form.getInputProps('message')}
                    />
                    <Button type='submit' size='md'>
                        Send
                    </Button>
                    <Button
                        type='reset'
                        size='md'
                        color='red'
                        onClick={() => {
                            modals.closeAll();
                            form.reset();
                        }}
                    >
                        Close
                    </Button>
                </Stack>
            </Box>
        </form>
    );
};

export default ContactForm;
