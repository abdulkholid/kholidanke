import AddInvitation from "@/Components/Admin/AddInvitation";
import Badge from "@/Components/Admin/Badge";
import Card from "@/Components/Admin/Card";
import EditInvitation from "@/Components/Admin/EditInvitation";
import FilterInvitation from "@/Components/Admin/FilterInvitation";
import InvitationList from "@/Components/Admin/InvitationList";
import TableCell from "@/Components/Admin/TableCell";
import Button from "@/Components/Button";
import ButtonGroup from "@/Components/ButtonGroup";
import { DataContext } from "@/Contexts/ModalContext";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, router, useForm } from "@inertiajs/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Edit2, Layers, Share2, Trash } from "react-feather";

const Invitation = ({
    page_title,
    event_sessions,
    total_invitation,
    total_pax,
    invitations,
    invitation_edit,
}) => {
    return (
        <>
            <Head title={page_title} />
            <AdminLayout page_title={page_title}>
                <div className="flex gap-5">
                    <div className="flex-auto">
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
                            <FilterInvitation event_sessions={event_sessions} />

                            <div className="max-h-[500px] overflow-y-auto">
                                <InvitationList invitations={invitations} />
                            </div>
                        </Card>
                    </div>
                    <div className="flex-none w-[350px]">
                        {!invitation_edit ? (
                            <AddInvitation event_sessions={event_sessions} />
                        ) : (
                            <EditInvitation
                                event_sessions={event_sessions}
                                edit={invitation_edit}
                            />
                        )}
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default Invitation;
