import logo from "./img/logo.svg";
import InvokeControl from "./InvokeControl";
import InvokeMain from "./InvokeMain";
import InvokeTimer from "./InvokeTimer";
import InvokeScore from "./invokeScore";
import InvokeList from "./InvokeList";
import './invoke.css';

const Invoke = () => {

    return (
        <>
            <section id="invoke" className="flex flex-col items-center lg:flex-row justify-between tracking-[-0.6px] pt-20 lg:pt-0 pl-8 pr-8 gap-8 lg:gap-0 h-[100vh]">
                <div className="flex">
                    <InvokeScore />
                </div>
                <div className="flex flex-col items-center gap-0 lg:gap-8 pt-12 lg:pt-20 relative ">
                    <img src={logo} width={140} alt="Logo" className="pb-2 lg:pb-14" />
                    <InvokeTimer />
                    <div className="Invoke-game flex flex-col items-center justify-center w-full pt-4 lg:pt-12 pb-24">
                        <InvokeMain />
                    </div>
                    <div className="invoker-control flex flex-col items-center justify-center pt-6">
                        <InvokeControl />
                    </div>
                </div>
                <div className="flex">
                    <InvokeList />
                </div>
            </section>

        </>
    );
}

export default Invoke;
