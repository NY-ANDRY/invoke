// import { useState, useEffect } from "react";
// import Title from "../components/cards/Title";
// import CreationCard from "../components/cards/CreationCard";
// import CreationCardHover from "../components/cards/CreationCardHover";
// import BtnSecondary from "../components/buttons/BtnSecondary";
// import { useFetch } from "../hooks/useFetch";
// import { database } from "../firebaseConfig";
// import { ref, onValue } from "firebase/database";

// const Creation = () => {
//     const [creations, setCreations] = useState([]);
//     const [showMore, setShowMore] = useState(true);

//     const { data, loading, error } = useFetch("/data/creation.json");

//     useEffect(() => {
//         data && setCreations(data);
//         error && setShowMore(false);
//     }, [data, error]);

//     const handleClick = async () => {
//         try {
//             const response = await fetch("/data/otherCreation.json");
//             const newData = await response.json();
//             setCreations(prevState => [...prevState, ...newData]);
//             setShowMore(false);
//         } catch (error) {
//             console.error("Error fetching more creations:", error);
//             setShowMore(false);
//         }
//     };

//     return (
//         <section id="creation" className="flex flex-col items-center w-full min-h-[1100px] pb-[102px] relative">
//             <Title txt="CREATIONS" />

//             <div className="creations flex w-full justify-center flex-wrap pt-20 pb-20 gap-16">
//                 {
//                     creations.map((item, i) => (
//                         <CreationCard key={i} img={item.img} name={item.name} made={item.made} url={item.url}  >
//                             <CreationCardHover date={item.date} title={item.title} txt={item.txt} />
//                         </CreationCard>

//                     ))
//                 }
//                 {
//                     loading && [1, 2, 3].map((item, i) => (
//                         <CreationCard key={i} img={"/svg/dark-ph.svg"} name={"project"} made={[]} >
//                             <CreationCardHover date={"February 2025"} title={""} txt={""} url={"#"} />
//                         </CreationCard>
//                     ))
//                 }
//             </div>

//             {
//                 showMore && (
//                     <div className="more-creation flex items-center justify-center pt-16">
//                         <BtnSecondary content="view more" onClick={handleClick} />
//                     </div>
//                 )
//             }
//         </section>
//     );
// };

// export default Creation;


import { useState, useEffect } from "react";
import Title from "../components/cards/Title";
import CreationCard from "../components/cards/CreationCard";
import CreationCardHover from "../components/cards/CreationCardHover";
import BtnSecondary from "../components/buttons/BtnSecondary";
import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

const Creation = () => {
    const [creations, setCreations] = useState([]);
    const [showMore, setShowMore] = useState(true);

    // Charger les premières créations depuis "creation"
    useEffect(() => {
        const dataRef = ref(database, "creation");

        onValue(dataRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const formattedData = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));

                setCreations(formattedData);
            }
        });

    }, []);

    // Fonction pour charger les données supplémentaires
    const handleClick = () => {
        const otherRef = ref(database, "otherCreation");

        onValue(otherRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const formattedData = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));

                // Ajouter les nouvelles créations à la liste existante
                setCreations(prevState => [...prevState, ...formattedData]);
                setShowMore(false); // Cacher le bouton après chargement
            }
        });
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
                        <p className="text-gray-500">Chargement des créations...</p>
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
