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
                    {/* <div className="absolute p-10 flex flex-col justify-center items-center z-[100] left-0 right-0 bg-[rgba(0,0,0)] w-full h-full text-white">
                        <div className="font-heading font-bold text-center">
                            Halo,
                            <br />
                            <div className="text-xl">{invitation.name}</div>
                        </div>
                        <div className="mt-5">
                            Untuk pengalaman pengguna yang lebih baik, silakan
                            ikuti 2 langkah sederhana ini:
                            <br />
                            <ul className="mt-5 list-num">
                                <li>
                                    Gunakan browser Google Chrome atau Safari
                                    untuk mengakses undangan ini.
                                </li>
                            </ul>
                        </div>
                    </div> */}
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
