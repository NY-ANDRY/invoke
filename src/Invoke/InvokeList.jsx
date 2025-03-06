import { useRef, useState, useLayoutEffect } from "react";
import InvokeToggle from "./InvokerToggle";
import { useInvoke } from "./InvokeContext";
import InvokeSpell from "./InvokeSpell";
import gsap from "gsap";

const InvokeList = () => {
    const { QuasWexExort, spellImages } = useInvoke();
    const [open, setOpen] = useState(true);
    const spellRef = useRef(null);
    const txtRef = useRef(null);

    useLayoutEffect(() => {
        if (open) {
            gsap.to(spellRef.current, {
                width: 206, duration: 0.4, ease: "power4.out"
            });
            gsap.to(txtRef.current, {
                width: 0, duration: 0.4, ease: "power4.out"
            });
        } else {
            gsap.to(spellRef.current, {
                width: 0, duration: 0.4, ease: "power4.out"
            });
            gsap.to(txtRef.current, {
                width: "auto", duration: 0.4, ease: "power4.out"
            });
        }
    }, [open]);
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className="flex items-center justify-center relative whitespace-nowrap gap-6">
                <div onClick={handleClick} className="flex items-center justify-center  cursor-pointer">
                    <InvokeToggle open={open} />
                </div>
                <div onClick={handleClick} className="flex items-center justify-center  cursor-pointer">

                    <div ref={txtRef} className="flex w-0 overflow-hidden">
                        <div id="score" className="font-[is-sb] text-[20px] ">
                            SPELL
                        </div>
                        <div className="invoke-border flex items-center justify-center ml-6" />
                    </div>

                    <div ref={spellRef} className="spells flex flex-col gap-4 overflow-hidden">
                        <InvokeSpell one={QuasWexExort.quas} two={QuasWexExort.wex} three={QuasWexExort.exort} spell={spellImages.blast} />
                        <InvokeSpell one={QuasWexExort.exort} two={QuasWexExort.exort} three={QuasWexExort.exort} spell={spellImages.ss} />
                        <InvokeSpell one={QuasWexExort.exort} two={QuasWexExort.exort} three={QuasWexExort.wex} spell={spellImages.cm} />
                        <InvokeSpell one={QuasWexExort.exort} two={QuasWexExort.exort} three={QuasWexExort.quas} spell={spellImages.fs} />
                        <InvokeSpell one={QuasWexExort.wex} two={QuasWexExort.wex} three={QuasWexExort.wex} spell={spellImages.emp} />
                        <InvokeSpell one={QuasWexExort.wex} two={QuasWexExort.wex} three={QuasWexExort.exort} spell={spellImages.alacrity} />
                        <InvokeSpell one={QuasWexExort.wex} two={QuasWexExort.wex} three={QuasWexExort.quas} spell={spellImages.tornado} />
                        <InvokeSpell one={QuasWexExort.quas} two={QuasWexExort.quas} three={QuasWexExort.quas} spell={spellImages.cs} />
                        <InvokeSpell one={QuasWexExort.quas} two={QuasWexExort.quas} three={QuasWexExort.exort} spell={spellImages.iw} />
                        <InvokeSpell one={QuasWexExort.quas} two={QuasWexExort.quas} three={QuasWexExort.wex} spell={spellImages.gw} />
                    </div>

                </div>
            </div>
        </>
    );
}

export default InvokeList;