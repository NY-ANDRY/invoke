import { useState } from "react";
import BtnPrimary from "../buttons/BtnPrimary";
import Matrix from "../boxEffect/Matrix";
import MatrixNumber from "../boxEffect/MatrixNumber";

const SendMessage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        setLoading(true);
        if (!email || !message) {
            setLoading(false);
            setStatus({ type: "error", text: "All fields are required!" });
            return;
        }

        try {
            const response = await fetch("https://nyandry.vercel.app/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            const result = await response.json();

            if (response.ok) {
                setLoading(false);
                setStatus({ type: "success", text: "Message sent successfully!" });
                setEmail("");
                setMessage("");
            } else {
                setLoading(false);
                setStatus({ type: "error", text: result.error || "Error sending message" });
            }
        } catch (error) {
            setLoading(false);
            setStatus({ type: "error", text: "Network error, please try again later" });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="sendForm flex flex-col gap-8 w-[620px]">
                <div className="form-item flex flex-col gap-1">
                    <label htmlFor="FormEmail" className="txt-60 p-2">Email <span className="text-sm">&</span> Contact</label>
                    <input
                        id="FormEmail"
                        name="email"
                        type="email"
                        placeholder="email & contact"
                        className="input-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="true"
                        required
                    />
                </div>
                <div className="form-item flex flex-col gap-1">
                    <label htmlFor="FormMessage" className="txt-60 p-2">Message</label>
                    <textarea
                        id="FormMessage"
                        name="message"
                        placeholder="Your message"
                        rows={8}
                        className="input-1"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        autoComplete="true"
                        required
                    />
                </div>
                <div className="flex-center mt-6">
                    <div className="submit w-52 font-[is-b]">
                        <BtnPrimary onClick={handleSubmit} content={"Send Message"} />
                    </div>

                </div>
                {loading &&
                    <p className={`text-center mt-2`}>
                        <MatrixNumber interval={100} min={0} max={1}>10011010001100111001101000110011</MatrixNumber>
                    </p>
                }
                {status && (
                    <p className={`text-center mt-2 ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                        {status.text}
                    </p>
                )}
            </form>
        </>
    );
};

export default SendMessage;
