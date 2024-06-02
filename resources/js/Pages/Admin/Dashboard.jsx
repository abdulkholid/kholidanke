import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import Alert from "@/Components/Admin/Alert";

const Dashboard = ({ page_title }) => {
    return (
        <>
            <Head title={page_title} />
            <AdminLayout page_title={page_title}>
                <Alert text="Hahhhh kosongg?" />
            </AdminLayout>
        </>
    );
};

export default Dashboard;
