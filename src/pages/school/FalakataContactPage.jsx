import React from 'react';
import Hero from '../../components/Hero';

const FalakataContactPage = () => {
  return (
    <div className="contact-page">
      <Hero image="/pictures/image.jpg" alt="TIGPS Contact Us" />

      {/* CONTACT FORM SECTION */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="row">

            {/* FORM LEFT SIDE */}
            <div className="col-md-8">
              <h2 style={{ color: 'rgb(100, 19, 32)', marginBottom: '30px' }}>
                Send us a Message
              </h2>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      style={{ padding: '15px', border: '2px solid #ddd' }}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      style={{ padding: '15px', border: '2px solid #ddd' }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    style={{ padding: '15px', border: '2px solid #ddd' }}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    style={{ padding: '15px', border: '2px solid #ddd' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'rgb(100, 19, 32)',
                    color: 'white',
                    border: 'none',
                    padding: '15px 40px',
                    borderRadius: '5px',
                    fontSize: '16px'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* CONTACT INFO RIGHT SIDE */}
            <div className="col-md-4">
              <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                <h3 style={{ color: 'rgb(100, 19, 32)', marginBottom: '20px' }}>
                  Contact Information
                </h3>

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>Head Office</h5>
                  <p>
                   Bhutnirghat, Joychandpur, Falakata Alipurduar Pin no:735211 West Bengal
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>Phone</h5>
                  <p>8334072789</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>Email</h5>
                  <p>admin.falakata@tigps.in</p>
                </div>

                <div>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>Office Hours</h5>
                  <p>
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            GOOGLE MAP SECTION
            <div className="col-md-12 mt-5">
              <iframe
                className="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14279.07647369686!2d89.14371!3d26.527549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3a3c5c789bcb1%3A0x852e14f0f0cd5c43!2sTechno%20India%20Group%20Public%20School%20falakata!5e0!3m2!1sen!2sus!4v1766498584148!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FalakataContactPage;