import InvitationLayout from "@/Layouts/InvitationLayout";
import Cover from "./Partials/Cover";
import Bridegroom from "./Partials/Bridegroom";
import SaveTheDate from "./Partials/SaveTheDate";
import ThankYou from "./Partials/ThankYou";
import InvitationContext from "@/Contexts/InvitationContext";
import SlideMenu from "@/Components/Invitation/SlideMenu";

const Home = ({ page_title, invitation, options }) => {
    return (
        <>
            <InvitationContext>
                <InvitationLayout title={page_title} invitation={invitation}>
                    <SlideMenu />
                    <Cover invitation={invitation} options={options} />
                    <Bridegroom invitation={invitation} options={options} />
                    <SaveTheDate invitation={invitation} options={options} />
                    <ThankYou invitation={invitation} options={options} />
                </InvitationLayout>
            </InvitationContext>
        </>
    );
};

export default Home;
