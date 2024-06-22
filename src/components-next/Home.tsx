import React from "react";
import Chip from '@material-ui/core/Chip';
import ProfileImage from './1.jpeg';
import SchoolIcon from '@material-ui/icons/School';
import { Button } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';
import Paper from '@material-ui/core/Paper';
import '../App.css';

function Home() {
  return (
    <>
      <div className="profile-container">
        <img
          src={ProfileImage}
          alt="Vipul Sharma"
          style={{
            height: "299px",
            width: "299px",
            border: "none",
            borderRadius: "49%",
            float: "left",
          }}
        />
        <h1>VIPUL SHARMA</h1>
        <Chip
          icon={<SchoolIcon />}
          variant="outlined"
          size="small"
          label="ITER, Siksha 'O' Anusandhan"
          color="secondary"
        />
        <br /><br />
        <a href="https://www.facebook.com/vipulvsss/"><FacebookIcon color="primary" fontSize="large"/></a>
        <a href="https://www.instagram.com/vipuls_ig/"><InstagramIcon color="secondary" fontSize="large"/></a>
        <a href="https://www.linkedin.com/in/vipul-vs-sharma/"><LinkedInIcon color="primary" fontSize="large"/></a>
        <a href="https://twitter.com/vipulVSsharma"><TwitterIcon color="primary" fontSize="large"/></a>
        <a href="https://www.reddit.com/user/vipulroxx"><RedditIcon color="secondary" fontSize="large"/></a>
        <a href="https://github.com/vipulroxx"><GitHubIcon color="primary" fontSize="large"/></a>
        <br /><br />
        <Button
          variant="outlined"
          color="primary"
          href="https://drive.google.com/file/d/1t_7L-f7VkzkStYweSNZ-keUAatzySU9C/view?usp=sharing"
          target="_blank"
        >
          Resume
        </Button>
      </div>
      <div className="paper-profile">
        <Paper elevation={2} style={{ padding: "15px" }}>
          <p>
            My passion for programming has been built exponentially through a very early age when I got introduced to object oriented programming with Java. The idea of building a solution to a problem using functions which could be used recursively greatly amused me as I started my coding career. I remember writing Java codes for easy problems such as sorting and technical questions which gave a spark to my coding ability. As I grew up, this interest builds into a hobby through which I was able to relax my mind while at the same time learning latest technologies built by open-source communities around the world. This gave me confidence as I saw people with better abilities in coding which made me want to look up to them as mentors so I could get better at my hobby which soon turned into my passion.
            <br /><br />
            The great world of open source helped me build a quality within me, that being of contributing, even so that I was awarded as the finalist of Google Code-in 2013. The contest more over taught me a lot about contributions and how we can do it via various version controls like GitHub. From then on, I have been consistent on GitHub and have send a lot of contributions to various organisations. Working on different android projects and going to hackathons makes me happy. Content fills my heart when I touch the keyboard. Programming has changed my way of conduct. I seem to do things in what I perceive as a logical manner, and I tend to ask 'how do we do this', forcing my brain to break down stuff into individual tasks. I remember less 'what', but more of 'how'. It's some sort of vectorial memory that I like. Programming makes me proud. It defines and completes me.
            <br /><br />
            With recent advancements in AI, I believe human race can do really well if we make the use of the computational power we have got. It's up to us to save the planet, our home and the generation to come so that they can thrive to do better towards humanity instead. I want to learn and implement my knowledge through the use of powerful computation techniques to get to what I want to achieve in life along with making businesses more productive and efficient through my knowledge and capabilities.
          </p>
        </Paper>
      </div>
    </>
  );
}

export default Home;
