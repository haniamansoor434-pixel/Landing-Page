export default function SectionHeader({ title, highlight, description, className = "", centered = true }) {
    return (
        <div className={`${centered ? "text-left md:text-center" : "text-left"} ${className}`.trim()}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {title}
                {highlight ? (
                    <>
                        <br />
                        <span className="text-gradient">{highlight}</span>
                    </>
                ) : null}
            </h2>
            {description ? <p className="text-gray-400 text-lg max-w-3xl mx-0 md:mx-auto">{description}</p> : null}
        </div>
    );
}
