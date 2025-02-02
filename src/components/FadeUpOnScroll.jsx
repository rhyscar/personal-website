import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeUpOnScroll = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const [triggerAnimation, setTriggerAnimation] = useState(false);

    useEffect(() => {
        if (inView) {
            setTriggerAnimation(true);
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={`transform transition-all duration-[2000ms] ease-out ${
                triggerAnimation
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[2rem]"
            }`}
        >
            {children}
        </div>
    );
};

export default FadeUpOnScroll;