export default function PageBackground() {
    return (
        <div className="fixed inset-0 -z-10" aria-hidden="true">
            <div className="absolute inset-0 bg-[#0C0E1D]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#56FBAC]/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#616083]/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>
    );
}
