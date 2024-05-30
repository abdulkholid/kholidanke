import Card from "@/Components/Admin/Card";
import FormElement from "@/Components/Admin/FormElement";
import FormLogo from "@/Components/Admin/FormLogo";
import Button from "@/Components/Button";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { Settings } from "react-feather";

const Index = ({ page_title }) => {
    return (
        <>
            <Head title={page_title} />
            <AdminLayout page_title={page_title}>
                <div className="flex">
                    <div className="w-full">
                        <Card>
                            <Card.Title
                                icon={<Settings size="15" />}
                                title="Pengaturan Utama"
                            ></Card.Title>
                            <Card.Body>
                                <div className="flex flex-wrap">
                                    <FormLogo />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default Index;
