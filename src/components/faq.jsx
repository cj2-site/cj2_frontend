import React from 'react';

const Faq = () => {
  return (
    <div className='faqs'>
      <section>
        <div>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div>
          <span>Q: How to use?</span>
          <br/>
          <span>A: Enter your long URL and we give you back a short URL!</span>
        </div>
        <div>
          <span>Q: Can I save my links?</span>
          <br/>
          <span>A: NO! Not at this time. Ask Michelle</span>
        </div>
        <div>
          <span>Q: Where are my links?</span>
          <br/>
          <span>A: Click on Links in the Nav bar up top</span>
        </div>
        <div>
          <span>Q: What happens if I lost a link?</span>
          <br/>
          <span>A: Resubmit it and we will give you the previous shortened URL!</span>
        </div>
      </section>
    </div>
  );
}

export default Faq;
