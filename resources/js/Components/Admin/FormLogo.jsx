import React from "react";
import FormElement from "./FormElement";
import Button from "../Button";
import InCardContainer from "./InCardContainer";
import { useForm } from "@inertiajs/react";

const FormLogo = () => {
    const { data, setData, submit } = useForm({
        light: "",
        dark: "",
    });

    const handleCHange = (e) => {
        setData(e.target.name, e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit("post", route("admin.setting.index.submit"));
    };

    return (
        <InCardContainer width="w-[33.33%]">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <FormElement>
                    <FormElement.FormGroup>
                        <FormElement.FileInput
                            label="Pilih Logo (Light Mode)"
                            name="light"
                            onChange={handleCHange}
                        />
                    </FormElement.FormGroup>
                    <FormElement.FormGroup>
                        <FormElement.FileInput
                            label="Pilih Logo (Dark Mode)"
                            name="dark"
                            onChange={handleCHange}
                        />
                    </FormElement.FormGroup>
                    <Button type="submit" size="full_md">
                        Submit Form
                    </Button>
                </FormElement>
            </form>
        </InCardContainer>
    );
};

export default FormLogo;
