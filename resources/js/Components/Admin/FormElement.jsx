import React from "react";

const text_input_class = `w-full h-10 text-sm text-gray-500 border border-gray-200 rounded focus:text-primary focus:font-semibold focus:shadow focus:border-none focus:shadow-lg focus:ring-primary`;
const label_class = `block mb-2 font-semibold`;

const FormElement = ({ children }) => {
    return <>{children}</>;
};

const FormGroup = ({ children }) => {
    return <div className="block mb-5">{children}</div>;
};

const TextInput = ({ label, ...props }) => {
    return (
        <>
            {label && <label className={label_class}>{label}</label>}
            <input type="text" className={text_input_class} {...props} />
        </>
    );
};

const DateTimeInput = ({ label, ...props }) => {
    return (
        <>
            {label && <label className={label_class}>{label}</label>}
            <input
                type="datetime-local"
                className={text_input_class}
                {...props}
            />
        </>
    );
};

FormElement.FormGroup = FormGroup;
FormElement.TextInput = TextInput;
FormElement.DateTimeInput = DateTimeInput;

export default FormElement;
