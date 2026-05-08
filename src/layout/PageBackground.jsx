import { useEffect, useState } from "react";

export default function PageBackground() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e) => {
            setMouse({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMove);

        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#02040a]">
            
            {/* Base Grid */}
            <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage: `
                        linear-gradient(#56FBAC 1px, transparent 1px),
                        linear-gradient(90deg, #56FBAC 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Enlarged Hover Grid */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-75"
                style={{
                    backgroundImage: `
                        linear-gradient(#56FBAC 1px, transparent 1px),
                        linear-gradient(90deg, #56FBAC 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                    maskImage: `radial-gradient(
                        circle 180px at ${mouse.x}px ${mouse.y}px,
                        black 0%,
                        transparent 100%
                    )`,
                    WebkitMaskImage: `radial-gradient(
                        circle 180px at ${mouse.x}px ${mouse.y}px,
                        black 0%,
                        transparent 100%
                    )`,
                }}
            />

            {/* Glow */}
            <div
                className="absolute pointer-events-none w-[300px] h-[300px] rounded-full blur-[120px] opacity-20"
                style={{
                    left: mouse.x - 150,
                    top: mouse.y - 150,
                    background: "#56FBAC",
                }}
            />

        </div>
    );
}