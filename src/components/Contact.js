import "animate.css";

const Contact = () => {
  return (
    <section className="contact" id="connect">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img
              src="https://example.com/contact-img.svg"
              alt="Contact Us"
              id="contactImage"
            />
          </div>
          <div className="col-12 col-md-6">
            <div>
              <h2>Get In Touch</h2>
              <form id="contactForm">
                <div className="row">
                  <div className="col-12 col-sm-6 px-1">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6 px-1">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6 px-1">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6 px-1">
                    <input type="tel" id="phone" placeholder="Phone No." />
                  </div>
                  <div className="col-12 px-1">
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                    <button type="submit" id="submitBtn">
                      Send
                    </button>
                  </div>
                  <div className="col-12">
                    <p id="statusMessage" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
