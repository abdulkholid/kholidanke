import React, { useContext, useEffect } from "react";
import Card from "./Card";
import FormElement from "./FormElement";
import Button from "../Button";
import { Send } from "react-feather";
import { useForm } from "@inertiajs/react";
import { DataContext } from "@/Contexts/ModalContext";

const AddInvitation = ({ event_sessions, edit }) => {
    const { modalOpen, modalComponent } = useContext(DataContext);
    const { data, setData, submit, reset } = useForm({
        name: "",
        pax: "",
        event_session_id: "",
    });

    const invitationChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const invitationSubmit = (e) => {
        e.preventDefault();
        submit("post", route("admin.invitation.store"));
        reset();
    };

    return (
        <div>
            {/* card */}
            <Card shadow="lg">
                <Card.Title
                    title={
                        edit
                            ? "Ubah Data Tamu Undangan"
                            : "Tambah Tamu Undangan"
                    }
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

                        <Button type="submit" style="solid" size="full_md">
                            <Send size="13" /> Simpan Data
                        </Button>
                    </form>
                </Card.Body>
            </Card>
            {/* end card */}
        </div>
    );
};

export default AddInvitation;
