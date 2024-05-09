import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

const Dashboard = ({ page_title }) => {
    return (
        <>
            <Head title={page_title} />
            <AdminLayout page_title={page_title}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                aspernatur enim, nisi eveniet sequi, incidunt optio rerum, magni
                quis quam mollitia deleniti eius impedit dolorum? Eveniet dicta
                molestias nemo sed.
            </AdminLayout>
        </>
    );
};

export default Dashboard;
