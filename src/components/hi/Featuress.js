export default function Featuress() {
  return (
    <>
      <section id="features" className="features padding-20">
        <div className="container flex items-center justify-between wrap">
          <aside className="box flex-31 mobile-100">
            <article className="padding-all">
              <h2>आमच्या सेवेचे फायदे</h2>
              <p className="features-text padding-30">
                पेन्शन मार्गदर्शन आणि सेवा संबंधी सर्व प्रकारची माहिती तसेच
                इंटरनेटद्वारे घरबसल्या सर्व प्रकारची सेवा उपलब्ध.
              </p>
              <div className="center">
                <a className="btn btn-1" href="#services">
                  अधिक माहिती साठी<span className="right-arrow"></span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          </aside>
          {/* <!-- Article 1 --> */}
          <article className="box article center flex-21 mobile-100">
            <span className="icon">
              <i className="fas fa-scroll"></i>
            </span>
            <h3>योग्य मार्गदर्शन</h3>
            <p
              className="padding-20"
              style={{ color: 'var(--accent)', fontSize: '1.2rem' }}
            >
              {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              ratione officiis magni! */}
              ऑनलाईन आणि ऑफलाईन उपलब्ध.
            </p>
          </article>
          {/* <!-- article 2 --> */}
          <article className="box article center flex-21 mobile-100">
            <span className="icon">
              <i className="fas fa-cube"></i>
            </span>
            <h4>अनुभवी वृंद </h4>
            <p
              className="padding-20"
              style={{ color: 'var(--accent)', fontSize: '1.2rem' }}
            >
              {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              ratione officiis magni! */}
              २४/७ उपलब्ध.
            </p>
          </article>
          {/* <!-- Article 3 --> */}
          <article className="box article center flex-21 mobile-100">
            <span className="icon">
              <i className="far fa-images"></i>
            </span>
            <h5>ऑनलाईन सेवा</h5>
            <p
              className="padding-20"
              style={{ color: 'var(--accent)', fontSize: '1.2rem' }}
            >
              {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              ratione officiis magni! */}
              इंटरनेटद्वारे सेवा उपलब्ध.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
