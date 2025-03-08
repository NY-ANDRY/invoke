import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useInvoke } from "../Invoke/InvokeContext";

const Header = () => {
    const { user, login, logout } = useAuth();
    const { name } = useInvoke();

    return (
        <header className="fixed flex items-center justify-between pl-8 pr-8 pt-6 pb-6 w-full">
            <div className="flex">
                <Link to={"/"}>
                    <img src="/svg/logo_sm.svg" alt="" />
                </Link>
            </div>
            <div className="flex gap-6 font-[is-sb] text-sm lg:text-[15px] relative whitespace-nowrap">
                <Link to={"/"} className="head-item flex-center opacity-70 overflow-hidden w-0 md:w-full lg:w-full">Home</Link>
                <Link to={"/stat"} className="head-item flex-center opacity-70">Stat</Link>
                <Link to={"/about"} className="head-item flex-center opacity-70">About</Link>
                {user &&
                    <>
                        <Link to={"/profile"} className="head-item flex-center opacity-70">{name == "" ? user.displayName : name}</Link>
                        <button onClick={logout} className="pr-2 cursor-pointer relative top-[-1px]">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="15" height="15" rx="2" fill="#FF3D3D" />
                                <rect x="10.125" y="4.06844" width="1.76471" height="8.52999" rx="0.882353" transform="rotate(45 10.125 4.06844)" fill="#F7F7F7" />
                                <rect x="4.06299" y="5.31049" width="1.76471" height="8.49073" rx="0.882353" transform="rotate(-45 4.06299 5.31049)" fill="#F7F7F7" />
                            </svg>
                        </button>
                    </>
                }
                {!user &&
                    <button onClick={login} className="head-item flex-center opacity-70 cursor-pointer" >Log in</button>
                }
            </div>
        </header>
    )
}

export default Header;