import {
  FiMapPin,
  FiBell,
  FiUsers,
  FiClock,
  FiBattery,
  FiShield,
  FiHeart
} from "react-icons/fi";

import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Features() {
  return (
    <section className="features" id="features">

      <div className="features-header">
        <h2>
          Everything You Need for <br />
          <span className="gradient-text">Peace of Mind</span>
        </h2>

        <p>
          Powerful features designed to keep your family safe and connected,
          wherever they are.
        </p>
      </div>

      <div className="feature-grid">

    <div className="feature-card blue-card">
  <div className="icon blue">
    <FiMapPin />
  </div>
  <h3>Real-Time Tracking</h3>
  <p>See exact locations of your family members on an interactive map.</p>
</div>

<div className="feature-card teal-card">
  <div className="icon teal">
    <FiBell />
  </div>
  <h3>Smart Notifications</h3>
  <p>Get instant alerts when loved ones arrive or leave places.</p>
</div>

<div className="feature-card purple-card">
  <div className="icon purple">
    <FiUsers />
  </div>
  <h3>Family Circles</h3>
  <p>Create private groups to stay connected with family or friends.</p>
</div>

<div className="feature-card pink-card">
  <div className="icon pink">
    <FiClock />
  </div>
  <h3>Location History</h3>
  <p>Review past routes and locations.</p>
</div>

<div className="feature-card orange-card">
  <div className="icon orange">
    <FiBattery />
  </div>
  <h3>Battery Alerts</h3>
  <p>Know when a family member's phone battery is running low.</p>
</div>

<div className="feature-card cyan-card">
  <div className="icon cyan">
    <HiOutlineLocationMarker />
  </div>
  <h3>Place Alerts</h3>
  <p>Set up geofences around important locations.</p>
</div>

<div className="feature-card green-card">
  <div className="icon green">
    <FiShield />
  </div>
  <h3>Privacy First</h3>
  <p>Your data is encrypted end-to-end.</p>
</div>

<div className="feature-card red-card">
  <div className="icon red">
    <FiHeart />
  </div>
  <h3>SOS Emergency</h3>
  <p>One-tap emergency button to alert your circle.</p>
</div>
</div>

    </section>
  );
}