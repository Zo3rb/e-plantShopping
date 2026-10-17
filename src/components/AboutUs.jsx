export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <h1>About Paradise Nursery</h1>
        <p className="lead">
          Paradise Nursery is a family-run plant shop dedicated to bringing the
          beauty of nature into every home. We hand-select every houseplant for
          health, hardiness, and character, so you can grow with confidence.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Our Story</h3>
            <p>
              Founded with a love for greenery, Paradise Nursery started as a
              small collection of houseplants and grew into a destination for
              plant lovers everywhere.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Promise</h3>
            <p>
              Every plant is carefully inspected, packed, and delivered with
              care. We stand behind the quality of every leaf we ship.
            </p>
          </div>

          <div className="about-card">
            <h3>Visit Us</h3>
            <p>
              123 Garden Lane<br />
              Bloomville, FL 33101<br />
              hello@paradisenursery.example
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
