import React from 'react';

const Faq = () => {
  return (
    <div className='faqs'>
      <section>
        <div>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div>
          <span>How do I use this thing in all of it's glory?</span>
          <br/>
          <span>Enter your long URL and we give you back a short URL!</span>
        </div>
        <div>
          <span>Yes! The links you made are automatically saved to your browser</span>
          <br/>
          <span>But... can I save this magical links you have create?</span>
        </div>
        <div>
          <span>But... where do they dwell?</span>
          <br/>
          <span>Simply click on "Links" at the top of the page!</span>
        </div>
        <div>
          <span>Resubmit the original URL and your link will appear before thine eyes!</span>
          <br/>
          <span>But... what happens if I lost a link?</span>
        </div>
      </section>
    </div>
  );
}

export default Faq;
