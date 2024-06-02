import React, { useContext, useState } from "react";
import Button from "@/Components/Button";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import { DataContext } from "@/Contexts/ModalContext";

const ShareInvitationModal = ({ id }) => {
    const [text, setText] = useState("");
    const [htmlText, setHtmlText] = useState("");
    const [buttonText, setButtonText] = useState("Salin teks!");
    const { setModalOpen } = useContext(DataContext);
    const [loading, setLoading] = useState(true);

    const handleCopy = () => {
        setButtonText("Teks barhasil disalin!");
        setTimeout(() => {
            setModalOpen(false);
        }, 500);
    };

    axios
        .get(
            route("admin.invitation.share", {
                invitation_id: id,
            })
        )
        .then((response) => {
            setTimeout(() => {
                setLoading(false);
                const data = response.data;
                const template_text = `
<div class="mb-5">Bismillahirrahmanirrahim<br/>
Assalamu'alaikum Warahmatullahi Wabarakatuh</div> 

<div class="mb-5">Kepada Yth: ${data.name}</div>

<div class="mb-5">Dengan memohon rahmat dan ridho Allah, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami.:</div>

<div class="mb-5">*Anke Lintang Kirana* & *Abdul Kholid*</div>

<div class="mb-5">Detail undangan dapat diakses pada tautan berikut:<br/>
${route("invitation", { uuid: data.uuid })}</div>

<div class="mb-5">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu di acara pernikahan kami. ✨</div>

<div class="mb-5">Mohon maaf apabila undangan kami kirimkan melalui pesan ini karena adanya keterbatasan jarak dan waktu😊🙏🏻</div>

<div class="mb-5">Atas kehadiran dan doa restunya, kami ucapkan terima kasih banyak.</div>

<div class="mb-5">Wassalamualaikum Warahmatullahi Wabarakatuh</div>

Hormat kami yang berbahagia,<br/>
Anke & Kholid
            `;
                setHtmlText(template_text);
                const plain_text = htmlText.replace(/(<([^>]+)>)/gi, "");
                setText(plain_text);
            }, 500);
        });

    return (
        <div className="w-[400px] bg-white p-5 rounded-lg">
            {loading && (
                <div className="h-40 flex items-center justify-center">
                    Sedang mengambil data . . .
                </div>
            )}
            <div
                className="mb-5"
                dangerouslySetInnerHTML={{ __html: htmlText }}
            ></div>

            <CopyToClipboard text={text} onCopy={handleCopy}>
                <Button size="full_md" style="outline" color="primary">
                    {buttonText}
                </Button>
            </CopyToClipboard>
        </div>
    );
};

export default ShareInvitationModal;
