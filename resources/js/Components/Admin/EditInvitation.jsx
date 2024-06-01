import React from "react";
import Card from "./Card";
import FormElement from "./FormElement";
import { Send } from "react-feather";
import Button from "../Button";
import { useForm } from "@inertiajs/react";

const EditInvitation = ({ event_sessions, edit }) => {
    const { data, setData, submit, reset } = useForm({
        name: edit.name,
        pax: edit.pax,
        event_session_id: edit.event_session_id,
    });

    const invitationChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const invitationUpdate = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);

        submit(
            "put",
            route("admin.invitation.update", {
                invitation_id: params.get("edit"),
            })
        );
        reset();
    };

    return (
        <div>
            {/* card */}
            <Card shadow="lg">
                <Card.Title
                    title="Ubah Data Tamu Undangan"
                    bold={true}
                ></Card.Title>
                <Card.Body>
                    <form onSubmit={invitationUpdate}>
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
                            <Send size="13" /> Update Data
                        </Button>
                    </form>
                </Card.Body>
            </Card>
            {/* end card */}
        </div>
    );
};

export default EditInvitation;
