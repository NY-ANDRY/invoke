

const CircleBlue = ({ width = 90, rotate = 0 }) => {
    return (
        <div className="circle relative bg-transparent rounded-full overflow-hidden" style={{ width: width, height: width, transform: `rotate(${rotate}deg)` }}>
            <span className="absolute top-[50%] left-[50%] w-[50%] h-[50%]" style={{ filter: `blur(${width / 3}px) drop-shadow(0px 0px 0px #1138ff)` }} />
        </div>
    );
}

export default CircleBlue;