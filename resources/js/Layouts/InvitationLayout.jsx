import SongToggle from "@/Components/Invitation/SongToggle";
import { Head } from "@inertiajs/react";

const InvitationLayout = ({ title, invitation, children }) => {
    let descripton = `Undangan nikah Anke & Kholid. Jangan lupa datang yaa :)`;
    if (invitation) {
        descripton = `Undangan nikah Anke & Kholid untuk "${invitation.name}". Jangan lupa datang yaa :)`;
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={descripton} />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/common/images/favicon.svg"
                />
            </Head>
            <div className="font-quattrocento">{children}</div>
        </>
    );
};

export default InvitationLayout;
