
import { Form, Select } from 'antd';
import { Rule } from 'antd/es/form';
const { Option } = Select;


interface IOption {
    value: string;
    label: string;
}

interface IFormSelect {
    options?: IOption[] | undefined;
    name?: string;
    label?: string;
    style?: any;
    isRequired?: boolean;
    requiredLabel?: string;
    rules?: Rule[] | undefined;
    onChange?: (value: string) => void;
    defaultValue?: string;
    value?: string;
    disabled?: boolean;
    placeholder?: string;
}


const FormSelect = (props: IFormSelect) => {
    const { options,
        name,
        onChange,
        defaultValue,
        value,
        disabled,
        placeholder,
        label,
        style,
        isRequired,
        requiredLabel,
        rules
    } = props
    return (
        <Form.Item
            name={name}
            label={label}
            style={style}
            rules={[
                {
                    required: isRequired,
                    message: `Please select ${requiredLabel ?? label ?? placeholder}`,
                },
                ...(rules ?? []),
            ]}
            initialValue={defaultValue}
        >

            <Select
                disabled={disabled}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                style={style}
            >
                {options?.map(option => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default FormSelect;