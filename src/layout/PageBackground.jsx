export default function PageBackground() {
    return (
        <div className="fixed inset-0 -z-10" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
    );
}
