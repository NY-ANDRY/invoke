import { section } from "framer-motion/client";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const { user } = useAuth();



    if (!user) {
        navigate("/");
        return <></>;
    }
    return (
        <section className="flex flex-col w-full items-center p-20">
            HELLO {user.displayName}
        </section>
    )
}

export default Profile;