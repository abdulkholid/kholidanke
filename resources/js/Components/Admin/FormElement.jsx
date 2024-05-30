import React from "react";

const input_class = `w-full h-10 text-sm text-gray-500 border border-gray-200 rounded focus:text-primary focus:font-semibold focus:shadow focus:border-none focus:shadow-lg focus:ring-primary`;
const label_class = `block mb-2 font-semibold`;

const FormElement = ({ children }) => {
    return <>{children}</>;
};

const FormGroup = ({ children }) => {
    return <div className="block mb-5">{children}</div>;
};

const NumberInput = ({ label, ...props }) => {
    return (
        <>
            {label && <label className={label_class}>{label}</label>}
            <input type="number" className={input_class} {...props} />
        </>
    );
};

const TextInput = ({ label, ...props }) => {
    return (
        <>
            {label && <label className={label_class}>{label}</label>}
            <input type="text" className={input_class} {...props} />
        </>
    );
};

const DateTimeInput = ({ label, ...props }) => {
    return (
        <>
            {label && <label className={label_class}>{label}</label>}
            <input type="datetime-local" className={input_class} {...props} />
        </>
    );
};

const FileInput = ({ label, ...props }) => {
    return (
        <>
            {label && <label className={label_class}>{label}</label>}
            <input
                type="file"
                className={`${input_class} p-[8px] text-xs`}
                {...props}
            />
        </>
    );
};

const SelectInput = ({ label, placeholder, data = [], value, ...props }) => {
    return (
        <>
            {label && <label className={label_class}>{label}</label>}
            <select
                name={name}
                className={input_class}
                {...props}
                value={value}
            >
                <option>{placeholder}</option>
                {data &&
                    data.map((item, key) => (
                        <option key={key} value={item.value}>
                            {item.text}
                        </option>
                    ))}
            </select>
        </>
    );
};

FormElement.FormGroup = FormGroup;
FormElement.TextInput = TextInput;
FormElement.NumberInput = NumberInput;
FormElement.DateTimeInput = DateTimeInput;
FormElement.SelectInput = SelectInput;
FormElement.FileInput = FileInput;

export default FormElement;
