import React, { useContext } from "react";
import TableCell from "./TableCell";
import ButtonGroup from "../ButtonGroup";
import Button from "../Button";
import { Edit2, Share2, Trash } from "react-feather";
import Badge from "./Badge";
import { router } from "@inertiajs/react";
import { DataContext } from "@/Contexts/ModalContext";
import ShareInvitationModal from "./ShareInvitationModal";

const InvitationList = ({ invitations }) => {
    const { setModalOpen, setModalComponent } = useContext(DataContext);

    const handleDeleteInvitation = (id, name) => {
        if (confirm("Yakin ingin menghapus undangan atas nama " + name + "?")) {
            router.delete(
                route("admin.invitation.delete", {
                    invitation_id: id,
                })
            );
        }
    };

    const handleShare = (id) => {
        setModalOpen(true);
        setModalComponent(<ShareInvitationModal id={id} />);
        // alert(id);
        // const shareData = axios
        //     .get(
        //         route("admin.invitation.share", {
        //             invitation_id: id,
        //         })
        //     )
        //     .then((response) => {
        //         const copied_text = response.data.text;
        //         // writeClipboardText("xxxx");
        //     });
    };

    const get_share_text = (id) => {
        let text = "loremispumdolor sit amet";
        text = text.replace("ipsum", id);
        return text;
    };

    return (
        <table className="w-full">
            <thead>
                <tr className="bg-gray-200">
                    <TableCell is_th={true} width="35%">
                        Nama Tamu
                    </TableCell>
                    <TableCell is_th={true}>Total Pax</TableCell>
                    <TableCell is_th={true}>Status Kehadiran</TableCell>
                    <TableCell is_th={true} className="text-right"></TableCell>
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
                                    {invitation.event_session.name}
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
                            <ButtonGroup className={"justify-end"}>
                                <Button
                                    color="primary"
                                    onClick={() => handleShare(invitation.id)}
                                >
                                    <Share2 size={10} />
                                </Button>

                                <Button
                                    color="info"
                                    is_link={true}
                                    href={route("admin.invitation.index", {
                                        edit: invitation.id,
                                    })}
                                >
                                    <Edit2 size="10" />
                                </Button>
                                <Button
                                    color="danger"
                                    href={route("admin.invitation.delete", {
                                        invitation_id: invitation.id,
                                    })}
                                    onClick={() =>
                                        handleDeleteInvitation(
                                            invitation.id,
                                            invitation.name
                                        )
                                    }
                                >
                                    <Trash size="10" />
                                </Button>
                            </ButtonGroup>
                        </TableCell>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default InvitationList;
