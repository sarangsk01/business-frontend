export default function Servicess() {
  return (
    <>
      {/* <!-- Services --> */}
      <section id="services" className="services padding-60">
        <div className="container">
          <article className="heading center">
            <h2 className="padding-20">आमच्या सेवा</h2>
            <p style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>
              पेन्शन मार्गदर्शन आणि इतर सेवा संबंधी सर्व प्रकारची माहिती
            </p>
          </article>
          <div className="wrapper flex items-center justify-between wrap space">
            <div className="box flex-31 mobile-50 center">
              <a className="icon flex flex-center" href="/">
                <i className="fas fa-tv"></i>
              </a>
              <article className="padding-20">
                <h4 className="padding-20">पेन्शन</h4>
                <p style={{ color: 'var(--accent)' }}>
                  {/* -------------------------------------- */}
                </p>
              </article>
            </div>
            <div className="box flex-31 mobile-50 center">
              <a className="icon flex flex-center" href="/">
                <i className="far fa-chart-bar"></i>
              </a>
              <article className="padding-20">
                <h4 className="padding-20">जीपीएफ</h4>
                <p style={{ color: 'var(--accent)' }}>
                  {/* -------------------------------------- */}
                </p>
              </article>
            </div>
            <div className="box flex-31 mobile-50 center">
              <a className="icon flex flex-center" href="/">
                <i className="fas fa-globe-asia"></i>
              </a>
              <article className="padding-20">
                <h4 className="padding-20">वेतन निश्चिती</h4>
                <p style={{ color: 'var(--accent)' }}>
                  {/* -------------------------------------- */}
                </p>
              </article>
            </div>
            <div className="box flex-31 mobile-50 center">
              <a className="icon flex flex-center" href="/">
                <i className="fas fa-image"></i>
              </a>
              <article className="padding-20">
                <h4 className="padding-20">रजेचे बील</h4>
                <p style={{ color: 'var(--accent)' }}>
                  {/* -------------------------------------- */}
                </p>
              </article>
            </div>
            <div className="box flex-31 mobile-50 center">
              <a className="icon flex flex-center" href="/">
                <i className="fas fa-sliders-h"></i>
              </a>
              <article className="padding-20">
                <h4 className="padding-20">मेडिकल बील</h4>
                <p style={{ color: 'var(--accent)' }}>
                  {/* -------------------------------------- */}
                </p>
              </article>
            </div>
            <div className="box flex-31 mobile-50 center">
              <a className="icon flex flex-center" href="/">
                <i className="far fa-calendar-alt"></i>
              </a>
              <article className="padding-20">
                <h4 className="padding-20">रिकव्हरी करणे</h4>
                <p style={{ color: 'var(--accent)' }}>
                  {/* -------------------------------------- */}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
