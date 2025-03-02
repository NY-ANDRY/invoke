import TechList from "../components/cards/TechList";
import { useFetch } from "../hooks/useFetch";

const Technology = () => {

    const { data, loading, error } = useFetch("/data/tech.json");

    return (
        <>
            <section id="tech" className="flex flex-col items-center w-full min-h-[700px] pb-[102px] relative overflow-hidden">
                <div className="box-sm">
                    <h1 className="primary font-[is-m] pb-2 text-[30px] tracking-[-0.2px]">TECHNOLOGY</h1>

                    <div className="techs pt-12 flex flex-col gap-8">
                        {
                            data && data.map((tech, i) => (
                                <TechList
                                    key={i}
                                    title={tech.title}
                                    skills={tech.skills}
                                />
                            ))
                        }
                        {
                            loading && [1, 2, 3].map((tech, i) => (
                                <TechList
                                    key={i}
                                    title="UPDATE"
                                    skills={[
                                        { "name": "update", "icon": "/svg/dark-ph.svg" },
                                        { "name": "update", "icon": "/svg/dark-ph.svg" },
                                        { "name": "update", "icon": "/svg/dark-ph.svg" }
                                    ]}
                                />
                            ))
                        }
                        {
                            error && <div className="error">ERROR</div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Technology;
