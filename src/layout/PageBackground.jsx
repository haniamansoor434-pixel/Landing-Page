export default function PageBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#02040a]" aria-hidden="true">
            {/* 1. The "Cyber" Grid */}
            <div
                className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
                style={{
                    backgroundImage: `linear-gradient(#56FBAC 1px, transparent 1px), linear-gradient(90deg, #56FBAC 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* 2. Primary Animated Light Source */}
            <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[600px] bg-[#56FBAC]/20 rounded-full blur-[120px] animate-mesh-one mix-blend-screen" />

            {/* 3. Secondary Complementary Light Source */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[500px] bg-[#616083]/30 rounded-full blur-[120px] animate-mesh-two mix-blend-screen" />

            {/* 4. Center Vignette (Focuses the user's eye on your content) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#02040a] via-transparent to-[#02040a] opacity-60" />

            {/* 5. Modern Grain Texture (Removes banding) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://vercel.app')]" />
        </div>
    );
}
