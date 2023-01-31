export default function Abouts() {
  return (
    <>
      <section id="about" className="about padding-60">
        <div className="container flex wrap">
          <article className="img flex-40 mobile-100">
            <img
              className="width-100"
              src="https://www.kotak.co.in/images/website-designing/making-website-big.jpg"
              alt="about"
            ></img>
            {/* <div className="icon flex flex-center">
              <a className="flex flex-center" href="/">
                <i className="fas fa-play"></i>
              </a>
            </div> */}
          </article>
          <article className="article flex-60 mobile-100 mobile-padding-bottom-0">
            <span className="padding-10">आमच्याविषयी</span>
            <h6>
              नमस्कार वाचक मित्रांनो आमच्या पेन्शन मार्गदर्शन आणि सेवा संबंधी
              संकेत स्थळावर आपले हार्दिक स्वागत .
            </h6>
            <p className="padding-10">
              सध्या जगाच्या कानाकोपऱ्यात असणाऱ्या मराठी माणसांना इंटरनेटने एकत्र
              आणले आहे. आधुनिक जगाचे संवाद माध्यम असणाऱ्या मराठीनेही सायबर
              विश्वात अनेक सोशल मीडिया प्लॅटफॉर्मवर आपला ठसा मोठ्या प्रमाणात
              उमटवला आहे.म्हणूनच आम्ही सर्व वाचकांसाठी मराठी भाषेत अगदी सोप्या
              शब्दांत असलेले संकेतस्थळ विकसित केलेले आहे.यामध्ये पेन्शन
              मार्गदर्शन आणि सेवा संबंधी सर्व प्रकारची माहिती उपलब्ध करण्याचा
              प्रयत्न केलेला आहे. शासकिय कार्यालयातील प्राथमिक, माध्यमिक, उच्च
              माध्यमिक शिक्षक व शिक्षकेतर कर्मचारी यांच्या साठी एका क्लिक वर
              सर्व प्रकारची माहिती उपलब्ध करण्याचा प्रयत्न केलेला आहे.यामध्ये
              सेवा-निवृत्ति पेन्शन पेपर्स,फॅमिली पेन्शन पेपर्स,जीपीएफ,सातवा वेतन
              आयोग-वेतन निश्चिती,पदोन्नती,वरिष्ठ श्रेणी,निवडश्रेणी,रजेचे
              बील,मेडिकल बील,पेन्शन विक्री प्रस्ताव,अनुकंपा नेमणूक
              प्रस्ताव,रिकव्हरी करणे आणि इतरही अनेक सेवा उपलब्ध आहेत.तरी आमच्या
              या सेवांचा जरूर लाभ घ्यावा ही नम्र विनंती. तुमचा काही अभिप्राय
              असेल किंवा काही सूचना असतील तर आम्हाला जरूर कळवा ... आपल्या
              सूचनांचे आम्ही नेहमी स्वागत करू. आमच्या संकेतस्थळाला भेट देणारा
              प्रत्येक वाचक आमच्या करिता महत्वपूर्ण आहे. धन्यवाद .
            </p>
            <div className="mobile-padding-bottom-0 padding-40">
              {/* <!-- ICON 1 --> */}
              <div className="article-icon a1 flex">
                <div className="icon-box">
                  <a className="icon i1 flex" href="/">
                    <i className="fas fa-fingerprint"></i>
                  </a>
                </div>
                <article>
                  <h4>ऑनलाईन आणि ऑफलाईन सेवा.</h4>
                  <p>
                    पेन्शन मार्गदर्शन आणि सेवा संबंधी सर्व प्रकारची माहिती
                    ऑनलाईन आणि ऑफलाईन उपलब्ध.{' '}
                  </p>
                </article>
              </div>
              {/* <!-- ICON 2 --> */}
              <div className="article-icon a2 flex">
                <div className="icon-box">
                  <a className="icon i2 flex" href="/">
                    <i className="fas fa-gift"></i>
                  </a>
                </div>
                <article>
                  <h4>एका क्लिक वर सर्व प्रकारची माहिती</h4>
                  <p>
                    शासकिय कार्यालयातील प्राथमिक, माध्यमिक, उच्च माध्यमिक शिक्षक
                    व शिक्षकेतर कर्मचारी यांच्या साठी एका क्लिक वर सर्व प्रकारची
                    माहिती उपलब्ध
                  </p>
                </article>
              </div>
              {/* <!-- ICON3 --> */}
              <div className="article-icon a3 flex icenter jbetween padbot0">
                <div className="icon-box">
                  <a className="icon i3 flex" href="/">
                    <i className="fab fa-react"></i>
                  </a>
                </div>
                <article>
                  <h4>मराठी भाषेत विकसित केलेले संकेतस्थळ</h4>
                  <p>
                    सर्व वाचकांसाठी मराठी भाषेत अगदी सोप्या शब्दांत असलेले
                    संकेतस्थळ विकसित केलेले आहे.
                  </p>
                </article>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
