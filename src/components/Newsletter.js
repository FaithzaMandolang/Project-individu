import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Newsletter = ({ status, message, onValidated }) => {
  const [Newsletter, setNewsletter] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const NewsletterRef = ref(db, "Newsletter/");
    onValue(
      NewsletterRef,
      (snapshot) => {
        const data = snapshot.val();
        setNewsletter(data);
      },
      []
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="newsletter-bx">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-xl-5">
                <h3>{Newsletter.title}</h3>
                <div id="status-message" />
              </div>
              <div className="col-md-6 col-xl-7">
                <form id="newsletter-form">
                  <div className="new-email-bx">
                    <input
                      type="email"
                      id="email-input"
                      placeholder="Email Address"
                      required
                    />
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
