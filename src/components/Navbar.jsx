export default function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">SafeTrack</h2>

   <ul className="nav-links">
  <li><a href="#features">Features</a></li>
  <li><a href="#how">How It Works</a></li>
  <li><a href="#map">Live Map</a></li>
  <li><a href="#security">Security</a></li>
</ul>

      <button className="login-btn">Login</button>

    </nav>
  );
}