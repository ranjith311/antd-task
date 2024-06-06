import { Form, Input, InputNumber } from "antd";
import { Rule } from "antd/es/form";

interface IFormInput {
    name: any;
    type?: string;
    label?: string;
    classNameForm?: string;
    inputMode?:
    | "url"
    | "email"
    | "text"
    | "search"
    | "none"
    | "tel"
    | "numeric"
    | "decimal";
    placeholder?: string;
    value?: any;
    isRequired?: boolean;
    requiredLabel?: string;
    rules?: Rule[] | undefined;
    defaultValue?: any;
    min?: number;
    max?:number;
    style?: any;
    size?: "middle" | "small" | "large";
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onInput?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const FormInput = (props: IFormInput) => {
    const {
        name,
        type,
        inputMode,
        value,
        label,
        classNameForm,
        isRequired,
        requiredLabel,
        placeholder,
        rules,
        defaultValue,
        style,
        onChange,
        onInput,
        min,
        max
    } = props;

    const typeTmp = type == "number" ? "text" : type;
    return (
        <>
            <Form.Item
                // className={`field-bg ${isBorder ? "field-border" : ""} ` + classNameForm}
                style={style}
                name={name}
                label={label}
                rules={[
                    {
                        required: isRequired,
                        message: `Please enter ${requiredLabel ?? label}`,
                    },...(rules ?? []),
                ]}
            >
                {type === 'password' ? (
                    <Input.Password
                        size="middle"
                        placeholder={placeholder}
                        min={min}
                        onChange={onChange}
                        bordered={false}
                    />
                ) : type === 'number' ? (
                    <InputNumber
                        size="middle"
                        placeholder={placeholder}
                        min={min}
                        max={max}
                        value={value}
                    />
                ) : (
                    <Input
                        size="middle"
                        value={value}
                        type={typeTmp ?? "text"}
                        placeholder={placeholder}
                        inputMode={inputMode ?? "text"}
                        min={min}
                        defaultValue={defaultValue}
                        onInput={onInput}
                        onChange={onChange}
                    />
                )}
            </Form.Item>
        </>
    );
};

export default FormInput;
