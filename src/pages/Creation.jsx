import { useState, useEffect, use } from "react";
import Title from "../components/cards/Title";
import CreationCard from "../components/cards/CreationCard";
import CreationCardHover from "../components/cards/CreationCardHover";
import BtnSecondary from "../components/buttons/BtnSecondary";
import { database } from "../config/firebaseConfig";
import { ref, onValue } from "firebase/database";

const Creation = () => {
    const [creations, setCreations] = useState([]);
    const [otherCreations, setOtherCreations] = useState([]);
    const [showMore, setShowMore] = useState(true);
    let unsubscribeOther = null;

    useEffect(() => {
        const dataRef = ref(database, "creation");

        const unsubscribe = onValue(dataRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                setCreations(data);
            }
        });

        return () => {
            unsubscribe();
            if (unsubscribeOther != null) unsubscribeOther();
        };
    }, []);

    const handleClick = () => {
        if (!showMore) return;
        const dataRef = ref(database, "otherCreation");
        const unsubscribe = onValue(dataRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                setOtherCreations(data);
                setShowMore(false);
            }
        });
        unsubscribeOther = () => unsubscribe();
    };

    return (
        <section id="creation" className="flex flex-col items-center w-full min-h-[1100px] pb-[102px] relative">
            <Title txt="CREATIONS" />

            <div className="creations flex w-full justify-center flex-wrap pt-20 pb-20 gap-16">
                {
                    creations.length > 0 ? (
                        creations.map((item, i) => (
                            <CreationCard key={i} img={item.img} name={item.name} made={item.made} url={item.url}  >
                                <CreationCardHover date={item.date} title={item.title} txt={item.txt} />
                            </CreationCard>
                        ))
                    ) : (
                        [1, 2, 3].map((item, i) => (
                            <CreationCard key={i} img={"/svg/dark-ph.svg"} name={"Loading..."} made={[]} >
                                <CreationCardHover date={"Loading..."} title={""} txt={""} url={"#"} />
                            </CreationCard>
                        )))
                }
                {
                    otherCreations.length > 0 && (
                        otherCreations.map((item, i) => (
                            <CreationCard key={i} img={item.img} name={item.name} made={item.made} url={item.url}  >
                                <CreationCardHover date={item.date} title={item.title} txt={item.txt} />
                            </CreationCard>
                        ))
                    )
                }
            </div>

            {
                showMore && (
                    <div className="more-creation flex items-center justify-center pt-16">
                        <BtnSecondary content="view more" onClick={handleClick} />
                    </div>
                )
            }
        </section>
    );
};

export default Creation;
