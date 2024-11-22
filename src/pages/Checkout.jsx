import "./Checkout.css";

export default function Checkout() {
    return (
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input type="text" id="email" name="email" placeholder="john@example.com" />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input type="text" id="city" name="city" placeholder="New York" />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input type="text" id="state" name="state" placeholder="NY" />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input type="text" id="zip" name="zip" placeholder="10001" />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container" style={{ display: "flex", gap: "10px" }}>
                    {/* Visa */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120 80"
                      width="40"
                      height="40"
                      style={{ fill: "navy" }}
                    >
                      <path d="M10 0h100c5.5 0 10 4.5 10 10v60c0 5.5-4.5 10-10 10H10c-5.5 0-10-4.5-10-10V10C0 4.5 4.5 0 10 0z" />
                      <text x="20" y="50" fontSize="24" fill="white" fontWeight="bold">
                        VISA
                      </text>
                    </svg>

                    {/* American Express */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120 80"
                      width="40"
                      height="40"
                      style={{ fill: "blue" }}
                    >
                      <rect width="120" height="80" rx="10" ry="10" />
                      <text x="15" y="50" fontSize="20" fill="white" fontWeight="bold">
                        AMEX
                      </text>
                    </svg>

                    {/* Mastercard */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120 80"
                      width="40"
                      height="40"
                    >
                      <circle cx="40" cy="40" r="30" fill="red" />
                      <circle cx="80" cy="40" r="30" fill="orange" fillOpacity="0.8" />
                    </svg>

                    {/* Discover */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120 80"
                      width="40"
                      height="40"
                    >
                      <rect width="120" height="80" rx="10" ry="10" fill="orange" />
                      <text x="20" y="50" fontSize="18" fill="white" fontWeight="bold">
                        DISCOVER
                      </text>
                    </svg>
                  </div>

                  <label htmlFor="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="September" />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" placeholder="2018" />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="352" />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" defaultChecked name="sameadr" /> Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" className="btn" />
            </form>
          </div>
        </div>
      </div>
    );
}
  