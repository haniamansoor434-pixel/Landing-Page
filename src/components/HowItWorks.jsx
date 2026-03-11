import "../../styles/Landing.css";
export default function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Download the App",
      description:
        "Get Safe Track from the App Store or Google Play. Free to download and easy to set up in minutes.",
      image:
        "https://images.unsplash.com/photo-1764751269844-ee2a404c5ef3?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Available on iOS and Android",
        "No credit card required",
        "Quick 2-minute setup",
      ],
    },
    {
      number: "02",
      title: "Create Your Circle",
      description:
        "Invite family and friends to join your private circle. They accept, and you're connected instantly.",
      image:
        "https://images.unsplash.com/photo-1713857150028-b21f5c86bbd8?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Unlimited circle members",
        "Private and secure sharing",
        "Easy invite system",
      ],
    },
    {
      number: "03",
      title: "Stay Connected",
      description:
        "See everyone's location in real-time. Get alerts, share updates, and enjoy complete peace of mind.",
      image:
        "https://images.unsplash.com/photo-1638447841552-8194177a5536?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Real-time location updates",
        "Instant notifications",
        "Location history tracking",
      ],
    },
  ];

  return (
    <section className="how-section">

      <div className="container">

        {/* HEADER */}

        <div className="section-header">
          <h2>
            Get Started in <br />
            <span>Three Easy Steps</span>
          </h2>

          <p>
            Setting up Safe Track is quick and effortless. Here's how it works.
          </p>
        </div>


        {/* STEPS */}

        {steps.map((step, index) => (
          <div
            className={`step-row ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            {/* TEXT */}

            <div className="step-text">

              <div className="step-top">
                <div className="step-icon">⬇</div>
                <div className="step-number">{step.number}</div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <ul>
                {step.features.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>

            </div>


            {/* IMAGE */}

            <div className="step-image">
              <img src={step.image} alt={step.title} />
              <div className="badge">{index + 1}</div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}