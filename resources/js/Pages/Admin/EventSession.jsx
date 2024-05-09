import Card from "@/Components/Admin/Card";
import FormElement from "@/Components/Admin/FormElement";
import TableCell from "@/Components/Admin/TableCell";
import Button from "@/Components/Button";
import ButtonGroup from "@/Components/ButtonGroup";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { Edit2, PieChart, Send, Trash } from "react-feather";

const EventSession = ({ page_title }) => {
    return (
        <>
            <Head title={page_title} />

            <AdminLayout page_title={page_title}>
                <div className="flex gap-5">
                    <div className="w-[60%]">
                        {/* card */}
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
                                    <tr>
                                        <TableCell>
                                            Akad Nikah <br />
                                            <small className="text-red-500">
                                                22-Jun-2024 Pukul 12:00 - 13:50
                                            </small>
                                        </TableCell>
                                        <TableCell>50 Tamu Undangan</TableCell>
                                        <TableCell>
                                            <ButtonGroup
                                                className={"justify-end"}
                                            >
                                                <Button color="info">
                                                    <Edit2 size="10" />
                                                    Edit
                                                </Button>
                                                <Button color="danger">
                                                    <Trash size="10" />
                                                    Delete
                                                </Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </tr>
                                    <tr>
                                        <TableCell>
                                            Resepsi <br />
                                            <small className="text-red-500">
                                                22-Jun-2024 Pukul 15:00 - 17:30
                                            </small>
                                        </TableCell>
                                        <TableCell>250 Tamu Undangan</TableCell>
                                        <TableCell>
                                            <ButtonGroup
                                                className={"justify-end"}
                                            >
                                                <Button color="info">
                                                    <Edit2 size="10" />
                                                    Edit
                                                </Button>
                                                <Button color="danger">
                                                    <Trash size="10" />
                                                    Delete
                                                </Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </tr>
                                </tbody>
                            </table>
                        </Card>
                        {/* end card */}
                    </div>

                    <div className="w-[40%]">
                        {/* card */}
                        <Card shadow="lg">
                            <Card.Title
                                title="Tambah Sesi Baru"
                                bold={true}
                            ></Card.Title>
                            <Card.Body>
                                <form action="#" method="POST">
                                    <FormElement.FormGroup>
                                        <FormElement.TextInput
                                            label="Nama Sesi"
                                            name="name"
                                            placeholder="masukan nama sesi ..."
                                        />
                                    </FormElement.FormGroup>

                                    <FormElement.FormGroup>
                                        <FormElement.DateTimeInput
                                            label="Tanggal Mulai"
                                            name="start_date"
                                        />
                                    </FormElement.FormGroup>

                                    <FormElement.FormGroup>
                                        <FormElement.DateTimeInput
                                            label="Tanggal Selesai"
                                            name="end_date"
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

export default EventSession;
