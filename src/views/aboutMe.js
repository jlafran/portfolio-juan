import styles from '../css/aboutMe.css'
import { HashLink } from "react-router-hash-link";
import Header from '../components/Navbar/navbar';
import Footer from "../components/Footer/footer";


const AboutMe = () => {
    
    return (
    <>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
        <Header/>
        
        <div className='container-resume'>

            <div class="wrapper-about-me-title">
                <h1>About me</h1>
                <p class="description">Software Developer, always learning, if I'm not at the movies, I'm making stuff.</p>
            </div>

            <div className="wrapper-work medium">
                <p>Hey, I'm Juan Cruz Lafranconi! I'm a software developer working in Buenos Aires, Argentina. Welcome to my spot for <HashLink smooth to="/#projects" className='semibold'>projects</HashLink> I've created, <HashLink smooth to="/#frameworks" className='semibold'>technologies</HashLink> I've learned and hopefully <a href="mailto:juanolafranconi@gmail.com"  title="Mail" target="_blank" rel="noopener noreferrer" className='semibold'>connect</a> with people.</p>
                <p>I believe any skill can be learned, personality is inherent. I'm always challenging myself, learning new stuff, and asking questions. Fueled by high energy levels and boundless enthusiasm, I'm easily inspired and more than willing to take new challenges head on. I'm passionate, expressive and love to turn ideas into reality.</p>
                <p>I'm a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. I like to develop expertise in a number of areas over the course of my life and career. You can read more about my biography, experience, skills and education bellow.</p>
            </div>

            <section className="wrapper-work">
                <h2 className="experience">Experience</h2>

                <div className='wrapper-work-card'>
                     <h3 className="title-work">
                        Developer FullStack
                        <span>Dic 2021 - May 2022</span>
                     </h3>

                     <p className="company-work">
                        <strong className='bold'>Ministry of Government DG Productive Development CABA </strong>
                        —
                        <em className='regular'> Freelance</em>
                     </p>

                    <ul className="medium description">
                        <li>Developed an internal CRUD web application with Java Spring to record and track requests from industry and neighborhood councils.</li>
                        <li>Data analysis and graphs included to visualize the success rate and categorize cases.</li>
                    </ul>
                    <div className="regular techs">
                        <code>Java</code>
                        <code>Spring</code>
                        <code>PostgreSQL</code>
                        <code>React</code>
                        <code>Chart js</code>
                        <code>CSS</code>
                        <code>HTML</code>
                    </div>

                </div>

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
                        <li>Worked on RPA automation process services for internal clients and external audits.</li>
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
                        <li>Developed an internal application in Java and Spring to register new candidates to the data base of our the job bank and courses at the General Directorate of Productive Development. Also, match possible candidates with job opportunities.</li>
                        <li>Worked with Wifi Marketing installation and captive portals integration.</li>
                        <li>Developed courses for entrepreneurs and start-ups on programing and business plan development.</li>
                        <li>Plan and Coodinate monthly events with different companies and organizations from each industry to generate new job opportunities for our job bank.</li>
                    </ul>
                    <div className="regular techs">
                        <code>Coordination</code>
                        <code>Teach</code>
                        <code>Java 8</code>
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
                        <li>Deputy adviser in legislation at the Commission of Education, Science and Technology. Which is responsible for ruling on any matter or project related to articles 23, 24, 25 and 58 of the City Constitution.</li>
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
                     Bachelor Computer Systems
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
        <Footer/>
    </>
    )
  }

  export default AboutMe;