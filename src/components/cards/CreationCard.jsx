import { useRef } from "react";
import TurnToMouse from "../boxEffect/TurnToMouse";
import FollowMouse from "../boxEffect/FollowMouse";
import ScrollFadeIn from "../boxEffect/ScrollFadeIn";
import CreationIcon from "./CreationIcon";
import gsap from "gsap";
import { Link } from "react-router-dom";

const CreationCard = ({ img, name, made, children, url }) => {
	const imgRef = useRef(null);

	const handleMouseEnter = () => {
		gsap.to(imgRef.current, {
			filter: "blur(4px) brightness(40%)",
			scale: 1.4,
			duration: 0.4,
			ease: "power4.out",
		});
	};
	const handleMouseLeave = () => {
		gsap.to(imgRef.current, {
			filter: "blur(0px) brightness(100%)",
			scale: 1,
			duration: 0.4,
			ease: "power4.out",
		});
	};
	const handleLinkClick = (e) => {
		if (url && (url.startsWith("http") || url.startsWith("www"))) {
			window.open(url, "_blank");
			e.preventDefault();
		}
	};

	return (
		<FollowMouse multiX={8} multiY={4}>
			<TurnToMouse multi={5}>
				<ScrollFadeIn otherClass={"w-full h-full"}>
					<div className="creation-card flex flex-col gap-7 w-[480px] h-[418px] ">
						<div
							className="creation-hover overflow-hidden rounded-sm relative flex-center w-full h-[280px]"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<Link
								to={url ?? "#"}
								onClick={handleLinkClick}
								className="creation-hover-item opacity-0 absolute w-full h-full z-10"
							>
								{children}
							</Link>
							<img
								ref={imgRef}
								src={img ?? "/svg/dark-ph.svg"}
								className="absolute pointer-events-none z-0"
								alt=""
							/>
						</div>
						<div className="flex flex-col gap-4 pt-0.5 pl-8 pr- tracking-[2px]">
							<div className="creation-title text-lg mt-1">
								{name ?? "Project Title"}
							</div>
							<div className="creation-made color-60 text-[16px] flex gap-4 items-center max-w-full">
								<div className="made-with w-[30%] whitespace-nowrap overflow-hidden">
									MADE WITH :
								</div>
								<div className="made-source w-[60%] flex gap-3 pl-2 overflow-hidden overflow-x-auto">
									{made &&
										made.map((m, i) => (
											<CreationIcon key={i} icon={m.icon} name={m.name} />
										))}
								</div>
							</div>
						</div>

						<div className="creation-footer"></div>
					</div>
				</ScrollFadeIn>
			</TurnToMouse>
		</FollowMouse>
	);
};

export default CreationCard;
