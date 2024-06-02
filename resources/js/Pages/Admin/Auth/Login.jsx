import Alert from "@/Components/Admin/Alert";
import Card from "@/Components/Admin/Card";
import FormElement from "@/Components/Admin/FormElement";
import Button from "@/Components/Button";
import { Head, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { ArrowRightCircle } from "react-feather";

const Login = ({ page_title }) => {
    const { logo, errors } = usePage().props;
    const { data, setData, submit } = useForm({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.email === "") {
            alert("Emailnya jangan lupa diinputkan :)");
            return;
        }
        if (data.password === "") {
            alert("Passwordnya kelupaan <3");
            return;
        }
        submit("post", route("admin.login.post"));
    };

    return (
        <>
            <Head>
                <title>{page_title}</title>
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/common/images/favicon.svg"
                />
            </Head>
            <div className="w-full h-dvh flex items-center justify-center bg-[#eee] text-[14px]">
                <div className="w-[400px]">
                    <div className="flex w-28 h-28 rounded-full border border-primary border-dashed p-5 mx-auto mb-5">
                        <img
                            src={`/uploads/${logo.light}`}
                            alt="logo anke & kholid"
                            className="w-full h-auto"
                        />
                    </div>
                    <Card shadow="lg">
                        <Card.Body>
                            {errors.email && (
                                <Alert
                                    status="fail"
                                    text="Terjadi kesalahan, silakan cek form di bawah ini."
                                />
                            )}
                            <form onSubmit={handleSubmit}>
                                <FormElement.FormGroup>
                                    <FormElement.TextInput
                                        name="email"
                                        label="Email"
                                        placeholder="Masukkan email . . ."
                                        onChange={handleChange}
                                        value={data.login}
                                        error={errors.email}
                                    />
                                </FormElement.FormGroup>
                                <FormElement.FormGroup>
                                    <FormElement.PasswordInput
                                        name="password"
                                        label="Password"
                                        placeholder="Masukkan password . . ."
                                        onChange={handleChange}
                                        value={data.password}
                                    />
                                </FormElement.FormGroup>
                                <Button size="full_md" style="solid">
                                    Masuk
                                    <ArrowRightCircle
                                        size={13}
                                        className="mt-1"
                                    />
                                </Button>
                            </form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Login;
