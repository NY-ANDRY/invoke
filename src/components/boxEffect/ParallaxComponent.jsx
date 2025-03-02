import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxComponent() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <motion.div
            style={{
                backgroundImage: "url('https://source.unsplash.com/random/1600x900')",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2rem",
                y, // This applies the transformation
            }}
        >
            Effet Parallax
        </motion.div>
    );
}

export default ParallaxComponent;
