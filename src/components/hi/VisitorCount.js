import React from 'react';

export default function VisitorCount() {
  const countEl = document.getElementById('count');
  updateVisitCount();
  function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/pension-ez.com/mouse/?amount=1')
      .then((res) => res.json())
      .then((res) => {
        countEl.innerHTML = res.value;
      });
  }

  return (
    <>
      <div className="flex flex-center">
        <p className="count">संकेतस्थळ अभ्यागत - </p>
        <h1 id="count" className="count-1">
          0
        </h1>
      </div>
    </>
  );
}
