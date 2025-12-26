import React from 'react';
import Hero from '../../components/Hero';

const BolpurContactPage = () => {
  return (
    <div className="contact-page">
      <Hero image="/pictures/admission/contact_new.avif" alt="TIGPS Contact Us" />

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
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>School Address</h5>
                  <p>
                   Prantik Township, Near SSDA Water Tank Bolpur Birbhum Pin no:731235 West Bengal
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>Phone</h5>
                  <p>+91-7029194976</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>Email</h5>
                  <p>admin.bolpur@tigps.in</p>
                </div>

                <div>
                  <h5 style={{ color: 'rgb(100, 19, 32)' }}>Office Hours</h5>
                  <p>                  
                    Mon - Fri	08:00 AM - 04:00 PM<br />
                    Saturday	08:00 AM - 03:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* GOOGLE MAP SECTION */}
            <div className="col-md-12 mt-5">
              <iframe
                className="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29228.15499315217!2d87.697806!3d23.69314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9c32b565ba4f5%3A0xc57aa0cec80703bc!2sTechno%20India%20Group%20Public%20School%2C%20Bolpur!5e0!3m2!1sen!2sus!4v1766498143726!5m2!1sen!2sus" 
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

export default BolpurContactPage;