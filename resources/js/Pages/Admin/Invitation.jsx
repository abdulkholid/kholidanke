import Badge from "@/Components/Admin/Badge";
import Card from "@/Components/Admin/Card";
import FormElement from "@/Components/Admin/FormElement";
import TableCell from "@/Components/Admin/TableCell";
import Button from "@/Components/Button";
import ButtonGroup from "@/Components/ButtonGroup";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { Edit2, Layers, Search, Send, Trash } from "react-feather";

const Invitation = ({
    page_title,
    event_sessions,
    total_invitation,
    total_pax,
    invitations,
    invitation_edit,
}) => {
    const { data, setData, submit, reset } = useForm({
        name: invitation_edit ? invitation_edit.name : "",
        pax: invitation_edit ? invitation_edit.pax : "",
        event_session_id: invitation_edit
            ? invitation_edit.event_session_id
            : "",
    });

    const [filterValues, setFilterValues] = useState({
        name: "",
        event_session_id: "",
    });

    const handleChangeFilterValue = (e) => {
        setFilterValues((filterValues) => ({
            ...filterValues,
            [e.target.name]: e.target.value,
        }));
    };

    const invitationChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const invitationSubmit = (e) => {
        e.preventDefault();
        submit("post", route("admin.invitation.store"));
        reset();
    };

    const handleSubmitfilter = (e) => {
        e.preventDefault();
        // console.log(filterValues);
        // Inertia.post(route("admin.invitation.index"));
        // Inertia.post(route("admin.invitation.index"));
    };

    return (
        <>
            <Head title={page_title} />
            <AdminLayout page_title={page_title}>
                <div className="flex gap-5">
                    <div className="w-[60%]">
                        <Card>
                            <Card.Title
                                icon={<Layers size="15" />}
                                title="Data Tamu Undangan"
                            >
                                <Card.Title.Option>
                                    Total:{" "}
                                    <b className="ml-2 text-blue-500">
                                        {total_invitation} Undangan
                                    </b>
                                    <span className="px-2">/</span>
                                    <b className="text-blue-500">
                                        {total_pax} Pax
                                    </b>
                                </Card.Title.Option>
                            </Card.Title>

                            {/* data filtering */}
                            <form
                                onSubmit={handleSubmitfilter}
                                className="flex p-3 gap-2 bg-gray-300"
                            >
                                <FormElement.TextInput
                                    name="name"
                                    placeholder="Cari nama tamu ..."
                                    onChange={handleChangeFilterValue}
                                    value={filterValues.name}
                                />
                                <FormElement.SelectInput
                                    name="event_session_id"
                                    placeholder="-- Cari berdasarkan sesi --"
                                    data={event_sessions}
                                    onChange={handleChangeFilterValue}
                                    value={filterValues.event_session_id}
                                />
                                <button
                                    type="submit"
                                    className="bg-gray-400 text-white w-28 rounded flex items-center justify-center"
                                >
                                    <Search size={15} />
                                </button>
                            </form>

                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <TableCell is_th={true} width="40%">
                                            Nama Tamu
                                        </TableCell>
                                        <TableCell is_th={true}>
                                            Total Pax
                                        </TableCell>
                                        <TableCell is_th={true}>
                                            Status Kehadiran
                                        </TableCell>
                                        <TableCell
                                            is_th={true}
                                            className="text-right"
                                        ></TableCell>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invitations.map((invitation, key) => (
                                        <tr key={key}>
                                            <TableCell>
                                                {invitation.name} <br />
                                                <small>
                                                    Sesi:
                                                    <b className="text-blue-500 pl-1">
                                                        {
                                                            invitation
                                                                .event_session
                                                                .name
                                                        }
                                                    </b>
                                                </small>
                                            </TableCell>
                                            <TableCell width="100">
                                                {invitation.pax} Orang
                                            </TableCell>
                                            <TableCell>
                                                <Badge text="Belum Hadir" />
                                            </TableCell>
                                            <TableCell>
                                                <ButtonGroup
                                                    className={"justify-end"}
                                                >
                                                    <Button
                                                        color="info"
                                                        is_link={true}
                                                        href={route(
                                                            "admin.invitation.index",
                                                            {
                                                                edit: invitation.id,
                                                            }
                                                        )}
                                                    >
                                                        <Edit2 size="10" />
                                                    </Button>
                                                    <Button color="danger">
                                                        <Trash size="10" />
                                                    </Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Card>
                    </div>
                    <div className="w-[40%]">
                        {/* card */}
                        <Card shadow="lg">
                            <Card.Title
                                title="Tambah Tamu Undangan"
                                bold={true}
                            ></Card.Title>
                            <Card.Body>
                                <form onSubmit={invitationSubmit}>
                                    <FormElement.FormGroup>
                                        <FormElement.TextInput
                                            label="Nama Undangan"
                                            name="name"
                                            placeholder="masukan nama undangan ..."
                                            onChange={invitationChange}
                                            value={data.name}
                                        />
                                    </FormElement.FormGroup>

                                    <FormElement.FormGroup>
                                        <FormElement.NumberInput
                                            label="Jumlah Pax"
                                            name="pax"
                                            placeholder="masukan jumlah pax ..."
                                            onChange={invitationChange}
                                            value={data.pax}
                                        />
                                    </FormElement.FormGroup>

                                    <FormElement.FormGroup>
                                        <FormElement.SelectInput
                                            label="Pilih Sesi"
                                            name="event_session_id"
                                            placeholder="-- Pilih Sesi --"
                                            data={event_sessions}
                                            onChange={invitationChange}
                                            value={data.event_session_id}
                                        />
                                    </FormElement.FormGroup>

                                    <Button
                                        type="submit"
                                        style="solid"
                                        size="full_md"
                                    >
                                        <Send size="13" /> Simpan Data
                                    </Button>
                                </form>
                            </Card.Body>
                        </Card>
                        {/* end card */}
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default Invitation;
