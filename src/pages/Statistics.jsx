import { useStatistique } from "../contexts/StatisticsContext";
import Refresh from "../components/icons/Refresh";
import Search from "../components/icons/Search";
import BtnFiltre from "../components/buttons/BtnFiltre";
import { useDebouncedCallback } from "use-debounce";

const Stat = () => {
    const { statistics, loading, error, updateStat, nbStat, setNbStat, setName, filtre, setFiltre, inversestatistics } = useStatistique();
    const color = ["#C3C4D6", "#3d64ff", "#ef3dff", "#ff3d3d"];

    const handleNameChange = useDebouncedCallback((value) => {
        if (value != null && value != undefined) {
            setName(value);
        }
    }, 400);
    const handleNbChange = useDebouncedCallback((value) => {
        setNbStat(value);
    }, 400);

    const changeTo = (newfiltre) => {
        if (filtre == newfiltre) {
            inversestatistics();
        } else {
            setFiltre(newfiltre);
        }
    }
    const handleScore = () => {
        changeTo("score");
    };
    const handleName = () => {
        changeTo("name");
    };
    const handleCombo = () => {
        changeTo("combo");
    };

    return (
        <section id="stat" className="flex flex-col w-full items-center p-2 pt-20 lg:p-20">
            <div className="w-full sm:w-[720px] lg:w-[1100px]">
                <div className="stat-head flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                        <div className="">
                            <Search animate={loading ? true : false} />
                        </div>
                        <input onChange={(e) => handleNameChange(e.target.value)} type="text" className="w-40 lg:w-96" placeholder="Name" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div onClick={updateStat} className="">
                            <Refresh animate={loading ? true : false} />
                        </div>
                        <input onChange={(e) => handleNbChange(e.target.value)} type="number" className="w-16" placeholder={nbStat == "" ? 'count' : nbStat} />
                    </div>
                </div>
                <div className="statistique-filtre flex gap-4 items-center font-[is-sb] text-xs lg:text-[15px] whitespace-nowrap p-4 mt-2">
                    <div className="flex items-center w-20 lg:w-32 gap-1 lg:gap-2">
                        <BtnFiltre name={"best score"} onClick={handleScore}></BtnFiltre>
                    </div>
                    <div className="flex flex-1 items-center gap-2">
                        <BtnFiltre name={"name"} onClick={handleName}></BtnFiltre>

                    </div>
                    <div className="flex items-center  w-20 lg:w-32 gap-2">
                        <BtnFiltre name={"combo"} onClick={handleCombo}></BtnFiltre>
                    </div>
                </div>

                <div className="flex flex-col">
                    {statistics.map((doc, i) => {
                        let scoreColor;
                        if (doc.score < 100) {
                            scoreColor = color[0];
                        } else if (doc.score < 400) {
                            scoreColor = color[1];
                        } else if (doc.score < 900) {
                            scoreColor = color[2];
                        } else {
                            scoreColor = color[3];
                        }
                        return (
                            <div key={i} style={{ color: scoreColor }} className="statistique-filtre flex gap-4 items-center font-[is-sb] text-[13.5px] lg:text-[15px] whitespace-nowrap pl-4 pr-4 mt-3">
                                <div className="flex items-center w-20 lg:w-32 gap-2">
                                    {doc.score}
                                </div>
                                <div className="flex flex-1 items-center gap-2 whitespace-nowrap overflow-hidden">
                                    {doc.name}
                                </div>
                                <div className="flex items-center  w-20 lg:w-32 gap-2">
                                    {doc.combo}
                                </div>
                            </div>
                        )
                    })}
                </div>
                {error && <div>error</div>}
            </div>
        </section >
    );
};

export default Stat;
