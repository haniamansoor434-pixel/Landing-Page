import "../../styles/Landing.css";

export default function CTA() {
  return (
    <section className="cta">

      <div className="cta-container">

        <h1 className="cta-title">
          Ready to Keep Your <br />
          <span>Family Safe?</span>
        </h1>

        <p className="cta-desc">
          Join millions of families who trust Safe Track for real-time
          location sharing and peace of mind. Start tracking your loved ones today.
        </p>

        <div className="cta-buttons">

          <button className="btn-primary">
            
            Get Started Free
          </button>

          <button className="btn-secondary">
       
            Download App
          </button>

        </div>

      </div>

    </section>
  );
}