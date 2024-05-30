import Card from "@/Components/Admin/Card";
import FormElement from "@/Components/Admin/FormElement";
import TableCell from "@/Components/Admin/TableCell";
import Button from "@/Components/Button";
import ButtonGroup from "@/Components/ButtonGroup";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";
import { Edit2, PieChart, Send, Trash } from "react-feather";

const EventSession = ({ page_title, event_sessions, event_session_edit }) => {
    const { data, setData, submit, processing, setDefaults, reset } = useForm({
        name: event_session_edit ? event_session_edit.name : "",
        begin_at: event_session_edit ? event_session_edit.begin_at : "",
        end_at: event_session_edit ? event_session_edit.end_at : "",
    });

    const eventSessionAddChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const eventSessionAddSubmit = (e) => {
        e.preventDefault();
        submit("post", route("admin.event_session.store"));
        reset();
    };

    const eventSessionEditSubmit = (e) => {
        e.preventDefault();
        submit(
            "put",
            route("admin.event_session.update", {
                event_session_id: event_session_edit.id,
            })
        );
        setData({
            name: "",
            begin_at: "",
            end_at: "",
        });
    };

    const eventSessionDeleteClick = (event_session_id) => {
        if (confirm("Yakin ingin menghapus data ini?")) {
            submit(
                "delete",
                route("admin.event_session.delete", { event_session_id })
            );
        }
    };

    const change_datetime_format = (string_date, time_only = false) => {
        const date = new Date(string_date);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();

        const months = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];

        if (time_only) {
            return `${hour}:${minute}`;
        }
        return `${day}-${months[month]}-${year} Jam ${hour}:${minute}`;
    };

    return (
        <>
            <Head title={page_title} />

            <AdminLayout page_title={page_title}>
                <div className="flex gap-5">
                    <div className="w-[60%]">
                        <Card>
                            <Card.Title
                                icon={<PieChart size="15" />}
                                title="Data Sesi Acara"
                            ></Card.Title>

                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <TableCell is_th={true} width="0%">
                                            Nama Sesi Acara
                                        </TableCell>
                                        <TableCell is_th={true} width="0%">
                                            Total Tamu
                                        </TableCell>
                                        <TableCell
                                            is_th={true}
                                            className="text-right"
                                        ></TableCell>
                                    </tr>
                                </thead>
                                <tbody>
                                    {event_sessions.map(
                                        (event_session, key) => (
                                            <tr
                                                key={key}
                                                className={
                                                    event_session_edit &&
                                                    event_session_edit.id ==
                                                        event_session.id
                                                        ? `bg-blue-100`
                                                        : ""
                                                }
                                            >
                                                <TableCell>
                                                    {event_session.name} <br />
                                                    <small className="text-red-500">
                                                        {change_datetime_format(
                                                            event_session.begin_at
                                                        )}
                                                        <span className="px-1">
                                                            -
                                                        </span>
                                                        {change_datetime_format(
                                                            event_session.end_at,
                                                            true
                                                        )}
                                                    </small>
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        event_session.invitations_count
                                                    }
                                                    <span className="ml-1">
                                                        Tamu Undangan
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    <ButtonGroup
                                                        className={
                                                            "justify-end"
                                                        }
                                                    >
                                                        <Button
                                                            color="info"
                                                            is_link={true}
                                                            href={route(
                                                                "admin.event_session.index",
                                                                {
                                                                    edit: event_session.id,
                                                                }
                                                            )}
                                                        >
                                                            <Edit2 size="10" />
                                                            Edit
                                                        </Button>
                                                        <Button
                                                            color="danger"
                                                            onClick={(e) =>
                                                                eventSessionDeleteClick(
                                                                    event_session.id
                                                                )
                                                            }
                                                        >
                                                            <Trash size="10" />
                                                            Delete
                                                        </Button>
                                                    </ButtonGroup>
                                                </TableCell>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </Card>
                    </div>

                    <div className="w-[40%]">
                        {/* card */}
                        <Card shadow="lg">
                            <Card.Title
                                title={
                                    !event_session_edit
                                        ? `Tambah Sesi Baru`
                                        : `Edis Sesi Acara: "${event_session_edit.name}"`
                                }
                                bold={true}
                            ></Card.Title>
                            <Card.Body>
                                <form
                                    onSubmit={
                                        !event_session_edit
                                            ? eventSessionAddSubmit
                                            : eventSessionEditSubmit
                                    }
                                >
                                    <FormElement.FormGroup>
                                        <FormElement.TextInput
                                            label="Nama Sesi"
                                            name="name"
                                            placeholder="masukan nama sesi ..."
                                            onChange={eventSessionAddChange}
                                            value={data.name}
                                        />
                                    </FormElement.FormGroup>

                                    <FormElement.FormGroup>
                                        <FormElement.DateTimeInput
                                            label="Tanggal Mulai"
                                            name="begin_at"
                                            onChange={eventSessionAddChange}
                                            value={data.begin_at}
                                        />
                                    </FormElement.FormGroup>

                                    <FormElement.FormGroup>
                                        <FormElement.DateTimeInput
                                            label="Tanggal Selesai"
                                            name="end_at"
                                            onChange={(e) =>
                                                eventSessionAddChange(e)
                                            }
                                            value={data.end_at}
                                        />
                                    </FormElement.FormGroup>

                                    <Button
                                        type="submit"
                                        style="solid"
                                        size="full_md"
                                    >
                                        <Send size="13" />{" "}
                                        {!event_session_edit
                                            ? `Simpan Data`
                                            : `Update Data`}
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

export default EventSession;
