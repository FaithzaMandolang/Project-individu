const Newsletter = ({ status, message, onValidated }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="newsletter-bx">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-xl-5">
                <h3>
                  Subscribe to our Newsletter
                  <br />
                  &amp; Never miss latest updates
                </h3>
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
