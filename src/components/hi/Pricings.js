export default function Pricings() {
  return (
    <>
      <section
        id="pricing"
        className="pricing padding60 mobile-padding-bottom-0"
      >
        <div className="container center">
          <article>
            <h2>आमच्या ऑनलाइन सेवा</h2>
            <p
              className="padding-20"
              style={{ color: 'var(--accent)', fontSize: '1.5rem' }}
            >
              सर्व प्रकारचे शासकिय फॉर्म लवकरच उपलब्ध करीत आहोत.
            </p>
          </article>
          <div className="flex wrapper justify-between items-center wrap padding-20">
            {/* <!-- Card 1 --> */}
            <div className="card flex-23">
              <header>
                <h5>पदोन्नती-वेतन निश्चिती</h5>
              </header>
              <div className="details">
                <h3>
                  <strong>
                    <span className="dollar">{/*<!--₹-->*/}</span>
                  </strong>{' '}
                  {/* / month */}
                </h3>
                <ul>
                  <li>-</li>
                  <li></li>
                  <li></li>
                  <li className="cut"></li>
                  <li className="cut"></li>
                </ul>
              </div>
              <footer>
                <a className="btn btn-3" href="/">
                  Buy Now
                </a>
              </footer>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="card active flex-23">
              <header>
                <h5>सातवा वेतन आयोग-वेतन निश्चिती</h5>
              </header>
              <div className="details">
                <h3>
                  <strong>
                    <span className="dollar">{/*<!--₹-->*/}</span>
                  </strong>{' '}
                  {/* / month */}
                </h3>
                <ul>
                  <li>-</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li className="cut"></li>
                </ul>
              </div>
              <footer>
                <a className="btn btn-3" href="/">
                  Buy Now
                </a>
              </footer>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="card flex-23">
              <header>
                <h5>वरिष्ठ श्रेणी-वेतन निश्चिती</h5>
              </header>
              <div className="details">
                <h3>
                  <strong>
                    <span className="dollar">{/*<!--₹-->*/}</span>
                  </strong>{' '}
                  {/* / month */}
                </h3>
                <ul>
                  <li>-</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <footer>
                <a className="btn btn-3" href="/">
                  Buy Now
                </a>
              </footer>
            </div>
            {/* <!-- Card 4 --> */}
            <div className="card ribbon-box flex-23">
              <span className="ribbon flex flex-center"></span>
              <header>
                <h5> निवडश्रेणी-वेतन निश्चिती</h5>
              </header>
              <div className="details">
                <h3>
                  <strong>
                    <span className="dollar">{/*<!--₹-->*/}</span>
                  </strong>{' '}
                  {/* / month */}
                </h3>
                <ul>
                  <li>-</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <footer>
                <a className="btn btn-3" href="/">
                  Buy Now
                </a>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
