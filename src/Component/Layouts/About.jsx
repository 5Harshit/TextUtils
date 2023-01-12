import React, { useState } from 'react';

export default function About(props) {
  return (
    <div className='container rounded-2 p-4' style={{ backgroundColor: props.mode === 'dark' ? '#bb86fc' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
      <h2>About us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <b>Analyze Your Text</b>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#6200ee' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
             TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count character count or many things
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <b>Free to use</b>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#6200ee' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
             TextUtils is a free Character counter tool that provides instant character count & word count statistics for a given text.TextUtils reports the number of words and characters.
              Thus it is suitable for writing text with word/ caharacter limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <b>Browser Compatible</b>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#6200ee' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}