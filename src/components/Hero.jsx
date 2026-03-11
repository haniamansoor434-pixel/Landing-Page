import "../../styles/Landing.css";

export default function HeroSection() {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}

      <div className="hero-text">
        <h1>
          Keep Your <br />
          <span className="gradient-text">Loved Ones Safe</span>
        </h1>

        <p>
          Real-time location tracking that brings peace of mind.
          Stay connected with family and friends anytime, anywhere.
        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">
          <button className="primary-btn">Get Started Free</button>
          <button className="secondary-btn">Watch Demo</button>
        </div>



      </div>


      {/* RIGHT IMAGE */}

      <div className="hero-image">


      </div>

    </section>
  );
}