import "animate.css";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Contact = () => {
  const [Contact, setContact] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const ContactRef = ref(db, "Contact/");
    onValue(
      ContactRef,
      (snapshot) => {
        const data = snapshot.val();
        setContact(data);
      },
      []
    );
  });
  return (
    <section className="contact" id="connect">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img
              src={`data:image/jpeg;base64,${Contact.foto}`}
              alt="Contact Us"
              id="contactImage"
            />
          </div>
          <div className="col-12 col-md-6">
            <div>
              <h2>{Contact.judul}</h2>
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
