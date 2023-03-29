export default function Headers() {
  return (
    // <!--Header-->
    <header className="header">
      <div className="container flex items-center justify-between">
        <a href="/" className="logo">
          Pension
          <strong
            style={{
              color: 'var(--txt)',
              fontSize: '2.8rem',
              fontWeight: '800',
            }}
          >
            -ez.
          </strong>
          <strong
            style={{
              backgroundColor: 'var(--darktxt)',
              color: 'var(--white)',
              fontSize: '2.8rem',
              fontWeight: '800',
            }}
          >
            netlify.app
          </strong>
          <span></span>
        </a>
        <label className="bars" htmlFor="toggle">
          <i className="fas fa-bars"></i>
        </label>
        <input id="toggle" type="checkbox" />
        <nav className="menu">
          <ul className="top-menu flex items-center justify-between">
            <li>
              <a className="active" href="/">
                मुख्यपृष्ठ
              </a>
            </li>
            <li>
              <a className="dropdown-menu" href="#about">
                आमच्याविषयी
                {/* <span>
                <i className="fas fa-angle-down"></i>
              </span> */}
              </a>
              {/* <ul className="dropdown">
              <li>
                <a href="/">योग्य मार्गदर्शन</a>
              </li>
              <li>
                <a href="/">अनुभवी वृंद</a>
              </li>
              <li>
                <a href="/">ऑनलाईन सेवा</a>
              </li>
            </ul> */}
            </li>
            <li>
              <a className="dropdown-menu" href="#news">
                ताज्या बातम्या
                {/* <span>
                <i className="fas fa-angle-down"></i>
              </span>
            </a>
            <ul className="dropdown">
              <li>
                <a href="/">Drop Down 1</a>
              </li>
              <li>
                <a className="deep-dropdown-menu" href="/">
                  Drop Down 2{' '}
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span> */}
              </a>
              {/* <!-- Deep Drop Down --> */}
              {/* <ul className="deep-dropdown">
                  <li>
                    <a href="/">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Drop Down 3</a>
              </li>
              <li>
                <a href="/">Drop Down 4</a>
              </li>
              <li>
                <a href="/">Drop Down 5</a>
              </li>
            </ul> */}
            </li>
            <li>
              <a className="dropdown-menu" href="/">
                आमच्या सेवा
                <span>
                  <i className="fas fa-angle-down"></i>
                </span>
              </a>
              <ul className="dropdown">
                <li>
                  <a className="deep-dropdown-menu" href="/">
                    पेन्शन{' '}
                    <span>
                      <i className=" mar-left fas fa-angle-right"></i>
                    </span>
                  </a>
                  {/* <!-- Deep Drop Down --> */}
                  <ul className=" deep-dropdown">
                    <li>
                      <a href="/">सेवा-निवृत्ति पेन्शन पेपर्स </a>
                    </li>
                    <li>
                      <a href="/">स्वेच्छा-सेवा-निवृत्ति पेन्शन पेपर्स</a>
                    </li>
                    <li>
                      <a href="/">फॅमिली पेन्शन पेपर्स</a>
                    </li>
                    <li>
                      <a href="/">अपंग फॅमिली पेन्शन पेपर्स</a>
                    </li>
                    <li>
                      <a href="/">मुला-मुलींना फॅमिली पेन्शन पेपर्स</a>
                    </li>
                    <li>
                      <a href="/">हरविलेल्या व्यक्तीचे फॅमिली पेन्शन पेपर्स</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="deep-dropdown-menu" href="/">
                    जीपीएफ{' '}
                    <span>
                      <i className=" marlft fas fa-angle-right"></i>
                    </span>
                  </a>
                  {/* <!-- Deep Drop Down --> */}
                  <ul className=" deep-dropdown">
                    <li>
                      <a href="/">प्रा.फंड कर्ज मागणी </a>
                    </li>
                    <li>
                      <a href="/">प्रा.फंड फायनल मागणी</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="deep-dropdown-menu" href="/">
                    वेतन निश्चिती{' '}
                    <span>
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </a>
                  {/* <!-- Deep Drop Down --> */}
                  <ul className="deep-dropdown">
                    <li>
                      <a href="/">चौथा वेतन आयोग-वेतन निश्चिती</a>
                    </li>
                    <li>
                      <a href="/">पाचवा वेतन आयोग-वेतन निश्चिती</a>
                    </li>
                    <li>
                      <a href="/">सहावा वेतन आयोग-वेतन निश्चिती</a>
                    </li>
                    <li>
                      <a href="/">सातवा वेतन आयोग-वेतन निश्चिती</a>
                    </li>
                    <li>
                      <a href="/">पदोन्नती-वेतन निश्चिती</a>
                    </li>
                    <li>
                      <a href="/">वरिष्ठ श्रेणी-वेतन निश्चिती</a>
                    </li>
                    <li>
                      <a href="/"> निवडश्रेणी-वेतन निश्चिती</a>
                    </li>
                    <li>
                      <a href="/"> कालबध्द पदोन्नती</a>
                    </li>
                    <li>
                      <a href="/"> संवर्ग-बाह्य पदोन्नती</a>
                    </li>
                    <li>
                      <a href="/">
                        {' '}
                        वरच्या पदावरुन खालच्या पदावर-वेतन निश्चिती
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        {' '}
                        क्लार्क पदावरुन शिक्षक पदावर-वेतन निश्चिती
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">रजेचे बील</a>
                </li>
                <li>
                  <a href="/">मेडिकल बील</a>
                </li>
                <li>
                  <a href="/">
                    सेवा पुस्तकातील रजेच्या नोंदी <br />
                    करणे किंवा ऑनलाइन तक्ता
                  </a>
                </li>
                <li>
                  <a href="/">पेन्शन विक्री प्रस्ताव</a>
                </li>
                <li>
                  <a href="/">अनुकंपा नेमणूक प्रस्ताव</a>
                </li>
                <li>
                  <a href="/">रिकव्हरी करणे</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-menu" href="#our mission">
                आमचे ध्येय
                {/* <span>
                <i className="fas fa-angle-down"></i>
              </span> */}
              </a>
              {/* <ul className="dropdown">
              <li>
                <a href="/">Drop Down 1</a>
              </li>
              <li>
                <a className="deep-dropdown-menu" href="/">
                  Drop Down 2{' '}
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span>
                </a> */}
              {/* <!-- Deep Drop Down --> */}
              {/* <ul className="deep-dropdown">
                  <li>
                    <a href="/">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Drop Down 3</a>
              </li>
              <li>
                <a href="/">Drop Down 4</a>
              </li>
              <li>
                <a href="/">Drop Down 5</a>
              </li>
            </ul> */}
            </li>

            <li>
              <a className="dropdown-menu" href="#news">
                फॉर्म
                {/* <span>
                <i className="fas fa-angle-down"></i>
              </span>
            </a>
            <ul className="dropdown">
              <li>
                <a href="/">Drop Down 1</a>
              </li>
              <li>
                <a className="deep-dropdown-menu" href="/">
                  Drop Down 2{' '}
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span> */}
              </a>
              {/* <!-- Deep Drop Down --> */}
              {/* <ul className="deep-dropdown">
                  <li>
                    <a href="/">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Drop Down 3</a>
              </li>
              <li>
                <a href="/">Drop Down 4</a>
              </li>
              <li>
                <a href="/">Drop Down 5</a>
              </li>
            </ul> */}
            </li>
            <li>
              <a href="#contact">संपर्क साधा</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
