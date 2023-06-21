import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillHome,
  AiFillMessage,
  AiOutlineInstagram,
} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaProjectDiagram} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {SiGmail} from 'react-icons/si'
import {IoCall} from 'react-icons/io5'
import {useState} from 'react'
import './index.css'

const Home = () => {
  const renderSkills = () => (
    <div>
      <h1 className="skill-h">Frontend</h1>
      <p className="skill-li">HTML, CSS, Bootstrap, JavaScript, React.js</p>
      <h1 className="skill-h">Backend</h1>
      <p className="skill-li">Node.js, Express.js, MySQL, Python</p>
    </div>
  )
  const renderEdu = () => (
    <div>
      <h1 className="skill-h">Nxtwave Disruptive Technology</h1>
      <p className="skill-li">
        Industry Ready Certification in Full-stack Development{' '}
      </p>
      <h1 className="skill-h">Regency College Of Management, Telangana</h1>
      <p className="skill-li">Graduation(BHM)</p>
      <h1 className="skill-h">Sri Gayatri Junior College , Telangana </h1>
      <p className="skill-li">Intermediate(M.E.C)</p>
      <h1 className="skill-h">Krishnaveni Talent High School, Telangana</h1>
      <p className="skill-li">Secondary School Of Certificate </p>
    </div>
  )
  const [about, setAbout] = useState(renderSkills())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // Send the form data via email
    const formData = {
      Name: name,
      Email: email,
      Message: message,
    }

    // Replace 'YOUR_EMAIL_ADDRESS' with the actual email address you want to receive the messages
    const emailUrl = `mailto:naveenreddyb8386@gmail.com?subject=New contact form submission&body=${encodeURIComponent(
      JSON.stringify(formData),
    )}`

    window.location.href = emailUrl

    // Reset form fields after submission
    setName('')
    setEmail('')
    setMessage('')
  }
  const onSkills = () => {
    setAbout(renderSkills())
  }
  const onEdu = () => {
    setAbout(renderEdu())
  }
  return (
    <div className="container">
      <nav>
        <a href="#Home">
          {' '}
          <h1 className="nav-head">Naveen</h1>
        </a>
        <ul className="ul">
          <li className="li">
            <a href="#Home" className="nav-a">
              <AiFillHome />
              Home
            </a>
          </li>

          <li className="li">
            <a href="#About" className="nav-a">
              <BsFillPersonFill />
              About
            </a>
          </li>

          <li className="li">
            <a href="#Project" className="nav-a">
              <FaProjectDiagram />
              Project
            </a>
          </li>
          <li className="li">
            <a href="#Contact" className="nav-a">
              <AiFillMessage />
              Contact
            </a>
          </li>
        </ul>
      </nav>
      }
      <section id="Home">
        <div className="wrapper">
          <div className="static">Hi, I'am</div>
          <ul className="dynamic">
            <li>
              <span>Naveen...</span>
            </li>
          </ul>
        </div>
        <p className="des">
          I am a Aspiring Fullstack developer Trainee <br /> and Passionate
          about learning new technologies.
        </p>
        <div className="git">
          <a
            href="https://github.com/Naveen-reddy8386"
            target="_blank"
            rel="noreferrer"
            className="a"
          >
            <AiFillGithub />
          </a>
          <a
            className="a"
            href="https://www.linkedin.com/in/naveen-reddy-885bb4252/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </section>
      <section id="About">
        <h1 className="about-head">
          About <span>Me.</span>
        </h1>
        <p className="about-discription">
          My name is Naveen, and I have a keen interest in full-stack web
          development <br />
          and various other technologies. I find the world of web development
          fascinating <br />
          as it allows me to bring my creative ideas to life and build
          functional applications that can have a real impact.
        </p>
        <ul>
          <li onClick={onSkills}>Skills</li>
          <li onClick={onEdu}>Education</li>
        </ul>
        <>{about}</>
      </section>
      <section id="Project">
        <h1 className="project">Projects</h1>
        <div className="project-container">
          <div className="project-card1">
            <video width="290" height="240" controls>
              <source
                src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-output.mp4"
                type="video/mp4"
              />
              <track
                src="captions.vtt"
                kind="captions"
                label="English"
                srcLang="en"
              />
              Your browser does not support the video tag.
            </video>
            <h1>Nxt trendz</h1>
            <p>
              Implemented Nxt Trendz application which is a clone for ECommerce
              applications like Amazon, Flipkart where users can login and can
              see list of products with search, filters, sort by, etc.. •
              Implemented Different pages and routes for Login, Products,
              Product details using React Router components Route, Switch, Link,
              props, state, lists, event handlers, form inputs.
            </p>
          </div>

          <div className="project-card2">
            <video width="280" height="240" controls>
              <source
                src="https://assets.ccbp.in/frontend/content/react-js/music-playlist-output.mp4"
                type="video/mp4"
              />
              <track
                src="captions.vtt"
                kind="captions"
                label="English"
                srcLang="en"
              />
              Your browser does not support the video tag.
            </video>
            <h1>Music Playist</h1>
            <p>
              HarmonyTunes is a captivating music playlist project that brings
              your favorite albums right to your fingertips. With HarmonyTunes,
              you can explore a vast collection of music albums, search for your
              preferred artists or genres, and create your customized playlists,
              all within an engaging and user-friendly interface.With sleek
              transitions, smooth scrolling, and responsive design,
            </p>
          </div>

          <div className="project-card3">
            <video width="280" height="220" controls>
              <source
                src="https://assets.ccbp.in/frontend/content/react-js/jobby-app-success-output-v0.mp4"
                type="video/mp4"
              />
              <track
                src="captions.vtt"
                kind="captions"
                label="English"
                srcLang="en"
              />
              Your browser does not support the video tag.
            </video>
            <h1>Jobby App</h1>
            <p>
              Jobby is a cutting-edge job search application built with React,
              designed to empower job seekers in their quest for meaningful
              employment opportunities. With Jobby, users can effortlessly
              navigate the job market, search for relevant positions, and
              streamline their job application process, all within a sleek and
              intuitive user interface.obby offers a responsive and visually
            </p>
          </div>
        </div>
      </section>
      <section id="Contact">
        <h1 className="contact-head">Contact Me</h1>
        <div className="contact-box">
          <div className="details">
            <div className="insta">
              <MdLocationOn className="icons" />
              <p>Hyderabad,Telangana</p>
            </div>
            <div className="insta">
              <SiGmail className="icons" />
              <p>naveenreddyb8386@gmail.com</p>
            </div>
            <div className="insta">
              <IoCall className="icons" />
              <p>91-96000000000</p>
            </div>

            <a
              href="file:///C:/Users/B.Naveen%20kumar/Downloads/New%20resume%20pdf.pdf"
              download
            >
              <button className="custom-btn btn-12">
                <span>Download</span>
                <span>Resume</span>
              </button>
            </a>
          </div>
          <div className="form-box">
            <form onSubmit={handleSubmit}>
              <h1>Send Message</h1>
              <div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  placeholder="Message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                />
              </div>
              <button className="custom-btn btn-3">
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <a href="fd" className="aa" rel="noreferrer">
          <AiOutlineInstagram />
        </a>

        <a
          href="https://github.com/Naveen-reddy8386"
          target="_blank"
          className="aa"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>

        <a
          className="aa"
          href="https://www.linkedin.com/in/naveen-reddy-885bb4252/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </footer>
    </div>
  )
}
export default Home
