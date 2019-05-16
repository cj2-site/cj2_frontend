import React from 'react';
import jori from '../img/jori.jpg';
import john from '../img/john.jpg';
import charles from '../img/charles.jpg';
import stephen from '../img/stephen.jpg';

const About = () => {
  return (
    <div className="aboutMe">
      <div>
        <section>
          <img src={jori} alt="Jori" title="Jori" />
          <h2>Jorie Fernandez</h2>
          <p>Effective management skills allowed me to balance my time between my Computer Science education and military career. With focus and determination, I gained knowledge about software development, data analysis, and machine learning through participation in research and projects. With the guidance in the military, I developed my leadership and communication skills.</p>
          <button><a href="https://www.linkedin.com/in/joriefernandez/" target="">LinkedIn</a></button>
          <button><a href="https://github.com/joriefernandez" target="">Github</a></button>
        </section>
      </div>
      <div>
        <section>
          <img src={john} alt="John" title="John" />
          <h2>John Winters</h2>
          <p>Hi, I'm John! I'm a full-time dog dad that does software development on the side. I enjoy working out,
            playing video games, dog walks, and good mystery thriller movies ( 'Lucky Number Slevin' && 'Kiss Kiss Bang
            Bang' ).</p>
          <button><a href="https://www.linkedin.com/in/john-winters/" target="">LinkedIn</a></button>
          <button><a href="https://www.instagram.com/thatsjustjohn/" target="">Instagram</a></button>
        </section>
      </div>
      <div>
        <section>
          <img src={charles} alt="Charles" title="Charles" />
          <h2>Charles Clemens</h2>
          <p>Charles is my name and I am many things beside a full stack web developer (though I do find myself humming      Kip's ode to technology from the movie Napolean Dynamite quite often).
            Family man, martial artist, veteran, author, comedian, gamer, bassist, public speaker; these are all labels that describe different aspects of myself. At the core I am a man that yearns for growth, a lifelong learner that spends more time researching, contemplating, and practicing than watching tv.
            I believe in the chase and motivating others to chase after their own dreams makes me smile.
            All too often the inner critic receives more attention than it deserves so everyone wins when we can keep it silent. The inner critic is a liar that does not want you to know the truth: that we can convert dreams, no matter how big, into circumstances as long as we are willing to put in the work to make that happen.</p>
          <button><a href="https://www.linkedin.com/in/cclemensjr/" target="">LinkedIn</a></button>
        </section>
      </div>
      <div>
        <section>
          <img src={stephen} alt="Stephen" title="Stephen" />
          <h2>Stephen Chu</h2>
          <p>SDE Apprentice | BSc Applied Math | US Air Force Veteran</p>
          <button><a href="https://www.linkedin.com/in/stephenchu530/" target="">LinkedIn</a></button>
        </section>
      </div>
    </div>
  );
}

export default About;
