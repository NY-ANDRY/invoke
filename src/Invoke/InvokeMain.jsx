import { useInvoke } from './InvokeContext';
import InvokeDescription from './InvokeDescription';

import placeholder from './img/placeholder.svg';

const InvokeMain = () => {
    const { currentSpells, currentInvocation, demo, setDemo } = useInvoke();

    return (
        <div className="spell-list flex flex-col items-center justify-center relative w-full lg:w-[50vw]">
            {!demo &&
                <div className="flex items-center justify-center relative gap-0 lg:gap-2">
                    <img src={currentSpells[0].image ?? placeholder} className="invoker-img-lg transform scale-70 opacity-25" alt="" />
                    <img src={currentSpells[1].image ?? placeholder} className="invoker-img-lg transform scale-85 opacity-50" alt="" />
                    <img src={currentSpells[2].image ?? placeholder} className="invoker-img-lg ml-4 mr-4" alt="" />
                    <img src={currentSpells[3].image ?? placeholder} className="invoker-img-lg transform scale-85 opacity-50" alt="" />
                    <img src={currentSpells[4].image ?? placeholder} className="invoker-img-lg transform scale-70 opacity-25" alt="" />
                </div>
            }
            {demo && <InvokeDescription description={currentInvocation} />}

        </div>
    );
};

export default InvokeMain;
