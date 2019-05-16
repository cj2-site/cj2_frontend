import React from 'react';

const Faq = () => {
  return (
    <div className='faqs'>
      <section>
        <div>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div>
          <span>Q: How do I use this thing in all of it's glory?</span>
          <br/>
          <span>A: Enter your long URL and we give you back a short URL!</span>
        </div>
        <div>
          <span>Q: But... can I save this magical links you have create?</span>
          <br/>
          <span>A: Yes! The links you made are automatically saved to your browser</span>
        </div>
        <div>
          <span>Q: But... where do they dwell?</span>
          <br/>
          <span>A: Simply click on "Links" at the top of the page!</span>
        </div>
        <div>
          <span>Q: But... what happens if I lost a link?</span>
          <br/>
          <span>A: Resubmit the original URL and your link will appear before thine eyes!</span>
        </div>
      </section>
    </div>
  );
}

export default Faq;
