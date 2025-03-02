import { useState, useEffect } from "react";
import TechList from "../components/cards/TechList";
import { database } from "../config/firebaseConfig";
import { ref, onValue } from "firebase/database";

const Technology = () => {
    const [techData, setTechData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const dataRef = ref(database, "tech");

        const unsubscribe = onValue(dataRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                setTechData(data);
                setLoading(false);
            } else {
                setTechData([]);
                setLoading(false);
            }
        }, (error) => {
            console.error("Firebase error:", error);
            setError(true);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <section id="tech" className="flex flex-col items-center w-full min-h-[700px] pb-[102px] relative overflow-hidden">
            <div className="box-sm">
                <h1 className="primary font-[is-m] pb-2 text-[30px] tracking-[-0.2px]">TECHNOLOGY</h1>

                <div className="techs pt-12 flex flex-col gap-8">
                    {
                        techData.length > 0 && techData.map((tech, i) => (
                            <TechList
                                key={i}
                                title={tech.title}
                                skills={tech.skills}
                            />
                        ))
                    }
                    {
                        loading && [1, 2, 3].map((_, i) => (
                            <TechList
                                key={i}
                                title="LOADING"
                                skills={[
                                    { "name": "loading", "icon": "/svg/dark-ph.svg" },
                                    { "name": "loading", "icon": "/svg/dark-ph.svg" },
                                    { "name": "loading", "icon": "/svg/dark-ph.svg" }
                                ]}
                            />
                        ))
                    }
                    {
                        error && <div className="error">ERROR: Impossible de charger les données</div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Technology;
