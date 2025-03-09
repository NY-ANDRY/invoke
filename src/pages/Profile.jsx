import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStatistique } from "../contexts/StatisticsContext";
import NotFound from "../components/other/NotFound";
import Loading from "./Loading";
import { useAuth } from "../contexts/AuthContext";
import { changeFirestoreName } from "../Invoke/InvokeFirebase";

const Profile = () => {
    const { id } = useParams();
    const { getDataOf, removeDataOf } = useStatistique();
    const { user, logout } = useAuth();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return setLoading(false);

            try {
                const fetchedData = await getDataOf(id);
                setData(fetchedData);
                if (!fetchedData) setNotFound(true);
            } catch (error) {
                console.error("Error fetching data:", error);
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id, getDataOf]);
    useEffect(() => {
        if (data) {
            setName(data.name);
        }
    }, [data]);

    const img = data?.img || (id === user?.uid ? user?.photoURL : null);

    const handleRemove = () => {
        if (!user) return;
        removeDataOf(user.uid);
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
    const saveName = () => {
        changeFirestoreName(user, name);
    }

    return (
        <section className="flex flex-col w-full min-h-[96vh] items-center p-20">
            <div className="flex flex-col gap-8">
                {loading && <Loading />}
                {notFound && <NotFound />}
                {data && (
                    <div className="profile relative flex flex-col md:flex-row lg:flex-row h-full justify-between gap-16 color-primary">
                        {img && (
                            <div className="flex-center">
                                <img src={img} className="w-32 h-32 rounded-md" alt="Profile" />
                            </div>
                        )}
                        <div className="flex flex-col gap-6 p-2">
                            <div className="w-full font-[is-sb] text-xl">
                                {(id == user?.uid) ?
                                    <>
                                        <input type="text" value={name} onChange={handleChange} onBlur={saveName} />
                                    </>
                                    : (data.name || "")}
                            </div>
                            <div className="w-full flex flex-col font-[is-m] text-sm">
                                <div className="flex">
                                    <div className="flex w-36">Best score: </div>
                                    <div className="flex-center">{data.score || "N/A"}</div>
                                </div>
                                <div className="flex">
                                    <div className="flex w-36">Best combo: </div>
                                    <div className="flex-center">{data.bestCombo || "N/A"}</div>
                                </div>
                                <div className="flex">
                                    <div className="flex w-36">Combo: </div>
                                    <div className="flex-center">{data.combo || "N/A"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {user?.uid == id &&
                    <>
                        <div className="flex gap-8 font-[is-m] text-sm">
                            <button onClick={logout} className="bg-black pt-1.5 pb-1.5 pl-5 pr-5 rounded-sm">Disconnect</button>
                            <button onClick={handleRemove} className="bg-red pt-1.5 pb-1.5 pl-5 pr-5 rounded-sm">Delete your data</button>
                        </div>
                    </>
                }
            </div>
        </section>
    );
};

export default Profile;
