import styles from '../css/aboutMe.css'


const AboutMe = () => {
    
    return (
    <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>

        <div className='container-resume'>

            <div class="wrapper-about-me-title">
                <h1>About me</h1>
                <p class="description">Software engineer, open-sourcerer, and lead singer of Floppy and the Diskettes</p>
            </div>

            <div className="wrapper-work medium">
                <p>Hey, I'm Tania! I'm a software engineer working in Chicago. Welcome to my spot on the web for projects I've created, tutorials I've written, musings, and anything else I want to show the world.</p>
                <p>My site has no ads, no affiliate links, no tracking or analytics, no sponsored posts, and no paywall. My only motivation for this site is to share what I've learned with the world and document notes for myself, and hopefully connect with a few people.</p>
                <p>Check out the <a href="/projects" className='semibold'>projects</a> page to see a highlight of the open-source projects I've made, and <a href="/blog" className='semibold'>articles</a> to see everything I've written. I've also written external publications for DigitalOcean, Envato Tuts+, etc. and done a few speaking engagements and podcasts, which you can find below.</p>
            </div>

            <section className="wrapper-work">
                <h2 className="experience">Experience</h2>
                <div className='wrapper-work-card'>
                     <h3 className="title-work">
                        Associate Assurance Transformation Center Digital
                        <span>Sep 2020 - Jun 2021</span>
                     </h3>

                     <p className="company-work">
                        <strong className='bold'>PwC Argentina </strong>
                        —
                        <em className='regular'> Full-Time</em>
                     </p>

                    <ul className="medium description">
                        <li>Worked in RPA automation process services for internal clients and external audits.</li>
                        <li>Led the research team for new technologies and frameworks of my sector.</li>
                        <li>Worked with Python, Pandas, Numpy and Matplotlib for data cleansing, data analysis and data visualization.</li>
                        <li>Used Power Bi, Power Query and VBA  for data cleansing, data integration, automate processes and visualize reports.</li>
                    </ul>
                    <div className="regular techs">
                        <code>Power Bi</code>
                        <code>VBA</code>
                        <code>SQL</code>
                        <code>Python</code>
                        <code>Pandas</code>
                        <code>Numpy</code>
                        <code>Matplotlib</code>
                    </div>

                </div>

                <div className='wrapper-work-card'>
                     <h3 className="title-work">
                        Information Technology Analyst
                        <span>Dec 2017 - Sep 2020</span>
                     </h3>

                     <p className="company-work">
                        <strong className='bold'>Secretary of Labor, Industry and Commerce of CABA </strong>
                        —
                        <em className='regular'> Full-Time</em>
                     </p>

                    <ul className="medium description">
                        <li>Developed internal aplication in Java 8 and Swing to register new candidates to the data base of our the job bank and courses at the General Directorate of Productive Development. Also match posible candidates with job opportunities.</li>
                        <li>Worked with Wifi Marketing installation and captive portals integration.</li>
                        <li>Developed courses for entrepreneurs and start-ups on programing and business plan development.</li>
                        <li>Plan and Coodinate monthly events with different companies and organizations from each industry to generate new job opportunities for our job bank.</li>
                    </ul>
                    <div className="regular techs">
                        <code>Coordination</code>
                        <code>Teach</code>
                        <code>Java 8</code>
                        <code>Swing</code>
                        <code>Spring</code>
                        <code>Hibernate</code>
                    </div>
                    
                </div>

                <div className='wrapper-work-card'>
                     <h3 className="title-work">
                     Deputy adviser at the Commission of TIC
                        <span>Jan 2016 - Dec 2017</span>
                     </h3>

                     <p className="company-work">
                        <strong className='bold'>Legislature of Buenos Aires City </strong>
                        —
                        <em className='regular'> Part-Time</em>
                     </p>

                    <ul className="medium description">
                        <li>Deputy adviser in legislation at the Commission of Education, Science and Technology. Which is responsable for ruling on any matter or project related to articles 23, 24, 25 and 58 of the City Constitution.</li>
                        <li>Designed and Organized 8 hour courses for beginner programmers.</li>
                        <li>Coordinated and Participated in the Cold Operative, providing shelter, clothes and food for people living in the street.</li>
                    </ul>
                    <div className="regular techs">
                        <code>Critical Thinking</code>
                        <code>Organize</code>
                        <code>Public Speaking</code>
                        <code>Public Relations</code>
                    </div>
                    
                </div>

            </section>
            
            <section className="wrapper-work">
            <h2 className="experience">Education</h2>

                <div className='wrapper-study-card'>
                     <h3 className="title-work">
                     Bachelor of Information Technology Management
                        <span>2018 - 2023</span>
                     </h3>

                     <p className="company-work">
                        <strong className='bold'>UADE (Argentine University of Enterprise) </strong>
                        —
                        <em className='regular'> Caba, Arg</em>
                     </p>
                </div>

                <div className='wrapper-study-card'>
                     <h3 className="title-work">
                     Backend Developer
                        <span>Jul 2021 - Jan 2022</span>
                     </h3>

                     <p className="company-work">
                        <strong className='bold'>CoderHouse </strong>
                        —
                        <em className='regular'> Caba, Arg</em>
                     </p>
                </div>

                <div className='wrapper-study-card'>
                     <h3 className="title-work">
                     Technical Bachelor in TIC
                        <span>2010 - 2015</span>
                     </h3>

                     <p className="company-work">
                        <strong className='bold'>ORT Argentina </strong>
                        —
                        <em className='regular'> Caba, Arg</em>
                     </p>
                </div>

            </section>

            <section className="wrapper-work">
            <h2 className="experience">Skills</h2>
                    <ul className="medium description">
                        <li><strong>Languages</strong> - Node.js, Express, Spring Boot, Hibernate, React, Swing, HTML5, CSS3, Mocha.</li>
                        <li><strong>Technologies</strong> - JavaScript ES6, Java 8, Python, TypeScript.</li>
                        <li><strong>Databases</strong> - MongoDB, Redis, Neo4j, Cassandra, MySql, MariaDB.</li>
                        <li><strong>Concepts</strong> - Web Application Development, Mobile Development, Design Patterns (REST API Design, MVC), Databases, Authentication, Linux/UNIX Administration, Webpack, Version Control (Git), Testing (Unit, Component, Integration, End-to-end)</li>
                    </ul>
            </section>

        </div>
    </>
    )
  }

  export default AboutMe;