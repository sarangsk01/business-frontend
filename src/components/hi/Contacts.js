import React, { useState } from 'react';
import { BASE_URL } from './helper';

export default function Contacts() {
  const [user, setUser] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: '',
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, mobile, email, subject, message } = user;

    const res = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        mobile,
        email,
        subject,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (!name || !mobile || !email || !subject || !message) {
      window.alert('कृपया सर्व माहिती प्रविष्ट करा.');
      console.log('कृपया सर्व माहिती प्रविष्ट करा.');
    } else {
      window.alert('आपली माहिती जतन करण्यात आलेली आहे.धन्यवाद.');
      console.log('आपली माहिती जतन करण्यात आलेली आहे.धन्यवाद.');
    }
  };

  return (
    <>
      <section id="contact" className="contact padding-60">
        <div className="container">
          <article className="center">
            <h2>संपर्क साधा</h2>
            <p className="padding-20" style={{ color: 'var(--accent)' }}>
              ----------------------
            </p>
          </article>
          <div className="container">
            {/* <!-- Tabs --> */}
            <div className="wrapper flex items-center justify-between padding-30 wrap">
              {/* <!-- Tab 1 --> */}
              <div className="tab flex-32">
                <div className="flex itop">
                  <span className="icon flex flex-center">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <div>
                    <h3>आमचा पत्ता</h3>
                    <address className="space">
                      महाराष्ट्र, <br /> भारत
                    </address>
                  </div>
                </div>
              </div>
              {/* <!-- Tab 2 --> */}
              <div className="tab flex-32">
                <div className="flex itop">
                  <span className="icon flex flex-center">
                    <i className="far fa-envelope"></i>
                  </span>
                  <div>
                    <h3>ईमेल आयडी</h3>
                    <address>
                      sudhirkulkarni111@gmail.com <br /> --
                    </address>
                  </div>
                </div>
              </div>
              {/* <!-- Tab 3 --> */}
              <div className="tab flex-32">
                <div className="flex itop">
                  <span className="icon flex flex-center">
                    <i className="fas fa-phone-volume"></i>
                  </span>
                  <div>
                    <h3>आम्हाला संदेश पाठवा</h3>
                    <address>
                      ---- <br /> ----
                    </address>
                  </div>
                </div>
              </div>
            </div>
            <form action="/users" method="post">
              <fieldset>
                <div className="flex items-center justify-between wrap">
                  <input
                    className="form-box flex49"
                    type="text"
                    placeholder="तुमचे नाव"
                    name="name" // name will be in the small case
                    value={user.name}
                    onChange={handleInputs}
                  />
                  <input
                    className="form-box flex49"
                    type="number"
                    placeholder="मोबाईल नंबर"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleInputs}
                  />
                  <input
                    className="form-box flex49"
                    type="email"
                    placeholder="तुमचा ईमेल आयडी"
                    name="email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                <input
                  className="form-box"
                  type="text"
                  placeholder="विषय"
                  name="subject"
                  value={user.subject}
                  onChange={handleInputs}
                />
                <textarea
                  className="form-box"
                  placeholder="संदेश"
                  name="message"
                  rows="6"
                  cols="0"
                  value={user.message}
                  onChange={handleInputs}
                ></textarea>
                <div className="flex flex-center">
                  <input
                    className="btn btn-3"
                    type="submit"
                    name="submit"
                    value="संदेश पाठवा"
                    onClick={PostData}
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
