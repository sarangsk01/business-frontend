import React, { useState } from 'react';
import VisitorCount from './VisitorCount';

export default function Footers() {
  const [news, setNews] = useState({
    email: '',
  });
  let name, value; //this is always remains name
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name; //this is always remains name
    value = e.target.value;

    setNews({ ...news, [name]: value }); //this is always remains name
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { email } = news;

    const res = await fetch('/users/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (!email) {
      window.alert('ही सेवा सध्या उपलब्ध नाही.'); //कृपया तुमचा ईमेल आयडी प्रविष्ट करा.
      console.log('ही सेवा सध्या उपलब्ध नाही.');
    } else {
      window.alert('ही सेवा सध्या उपलब्ध नाही.'); //सबस्क्राइब केल्याबद्दल धन्यवाद
      console.log('ही सेवा सध्या उपलब्ध नाही.');
    }
  };
  return (
    <>
      <footer className="footer">
        <section className="nav-menu padding-30">
          <div className="container flex itop justify-between wrap">
            <div className="nav">
              <a className="logo" href="/">
                Pension-ez.com
              </a>
              <div className="padding-10">
                <address>
                  महाराष्ट्र,भारत <br />
                  <br />
                </address>
              </div>
              <div className="">
                <address>
                  <strong
                    style={{
                      color: 'var(--heading)',
                      fontSize: '1.5rem',
                      fontFamily: 'Poppins',
                    }}
                  >
                    ईमेल:sudhirkulkarni111@gmail.com
                  </strong>
                </address>
                <address>{/* <strong>फोन:</strong> */}</address>
              </div>
            </div>
            <div className="nav menu">
              <h4 className="padding-10">उपयुक्त लिंक्स</h4>
              <nav className="links">
                <ul>
                  <li>
                    <a href="/">मुख्यपृष्ठ</a>
                  </li>
                  <li>
                    <a href="/about">आमच्याविषयी</a>
                  </li>
                  <li>
                    <a href="/services">आमच्या सेवा</a>
                  </li>
                  <li>
                    <a href="/">आमचे ध्येय</a>
                  </li>
                  <li>
                    <a href="/">फॉर्म</a>
                  </li>
                  <li>
                    <a href="/">संपर्क साधा</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="nav menu">
              <h4 className="padding-10">आमच्या सेवा</h4>
              <nav className="services">
                <ul>
                  <li>
                    <a href="/">पेन्शन</a>
                  </li>
                  <li>
                    <a href="/">जीपीएफ</a>
                  </li>
                  <li>
                    <a href="/">वेतन निश्चिती</a>
                  </li>
                  <li>
                    <a href="/">रजेचे बील</a>
                  </li>
                  <li>
                    <a href="/">मेडिकल बील</a>
                  </li>
                  <li>
                    <a href="/">रिकव्हरी करणे</a>
                  </li>
                </ul>
              </nav>
            </div>
            <form name="myForm" action="/users/newsletter" method="post">
              <fieldset>
                <div className="nav newsletter flex-32">
                  <h4 className="padding-10">
                    आमच्या न्यूजलेटर ला सबस्क्राइब करा
                  </h4>
                  <p className="padding-10">कृपया ईमेल आयडी प्रविष्ट करा.</p>
                  <div className="flex items-center justify-between wrapper">
                    <input
                      className="form-box"
                      type="email"
                      name="email"
                      placeholder="abc@gmail.com"
                      value={news.email}
                      onChange={handleInputs}
                    />

                    <input
                      className="btn"
                      type="submit"
                      name="submit"
                      value="सबस्क्राइब करा"
                      onClick={PostData}
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div
            style={{
              margin: '1rem 0 0 0  ',
            }}
          >
            <VisitorCount />
          </div>
        </section>
        <section className="copyright">
          <div className="container flex items-center justify-between wrap">
            <small className="mobile-100">
              कॉपीराईट{' '}
              <span
                style={{
                  color: 'var(--heading)',
                  fontSize: '1.5rem',
                  fontFamily: 'Poppins',
                }}
              >
                &copy; 2023
              </span>{' '}
              <strong style={{ color: 'var(--heading)' }}>
                Pension-ez.com
              </strong>
              . सर्व हक्क सुरक्षित. <br /> संकेतस्थळ विकासक{' '}
              <span style={{ color: 'var(--accent)', fontWeight: '600' }}>
                सारंग कुलकर्णी
              </span>
            </small>
            <nav className="social mobile-100">
              <ul className="flex items-center justify-between">
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-skype"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <a className="top-btn flex flex-center" href="#top">
            <i className="fas fa-angle-up"></i>
          </a>
        </section>
      </footer>
    </>
  );
}
