import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  AppBar,
  Toolbar,
  CardActionArea,
  Link,
  Button,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ProfileImage from "../static/img/pics/vipul.png";
import AthleteImage from "../static/img/pics/athelete.png";
import Resume from "./Resume";
import "../App.css";
import langchainLogo from "../static/icons/langchain-icon.jpeg";
import batsLogo from "../static/icons/bats-icon.jpeg";

// Placeholder images for badges
import AWSSolutionsArchitect from "../static/img/badges/AWS Solutions Architect.png";
import AWSBusinessAccredited from "../static/img/badges/AWS Business Accredited.png";
import AWSCloudPractitioner from "../static/img/badges/AWS Cloud Practitioner.png";
import AWSCloudEconomicsEssential from "../static/img/badges/AWS Cloud Economics Essential.png";
import PwCDigitalAcumen from "../static/img/badges/PwC Digital Acumen.png";
import PwCHumanCenteredDesign from "../static/img/badges/PwC Human Centered Design.png";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(ProfileImage);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === ProfileImage ? AthleteImage : ProfileImage
      );
    }, 1500);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Card>
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar>
          {/* Empty Toolbar for spacing */}
        </Toolbar>
      </AppBar>
      <CardContent className="card-content">
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, p: 2 }}>
          {/* Left Section: Profile Image, Name, Info, and Buttons */}
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              className="image-container"
              sx={{
                borderRadius: "50%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                width: "200px",
                height: "200px",
                overflow: "hidden",
              }}
            >
              <img
                src={currentImage}
                alt="Profile"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography variant="h3" color="info" align="center">
              VIPUL SHARMA
            </Typography>
            <Typography variant="body1" align="center" sx={{ mt: 1 }}>
              🌎 🇮🇳 🪽 ⚡️🏅 💖
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
              <Chip label="Commercial Asset Tech @ PwC" color="primary" variant="outlined" />
              <Chip label="Athlete @ AFI | WWRC 2025" color="primary" variant="outlined" />
            </Box>
            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Resume />
              <Button
                variant="contained"
                startIcon={<WorkspacePremiumIcon />}
                sx={{
                  backgroundColor: "#b4016fb9",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#a0015fb9",
                  },
                }}
                onClick={() => navigate("/experience")} // Navigate to experience page
              >
                Experience
              </Button>
            </Box>
            {/* Social Icons */}
            <Box className="social-icons" sx={{ display: "flex", gap: 1, mt: 2 }}>
              <FacebookIcon fontSize="large" sx={{ color: "primary.main" }} />
              <InstagramIcon fontSize="large" sx={{ color: "primary.main" }} />
              <LinkedInIcon fontSize="large" sx={{ color: "primary.main" }} />
              <TwitterIcon fontSize="large" sx={{ color: "primary.main" }} />
              <RedditIcon fontSize="large" sx={{ color: "primary.main" }} />
              <GitHubIcon fontSize="large" sx={{ color: "primary.main" }} />
            </Box>
          </Box>

          {/* Right Section: Tech Stacks and Badges */}
          <Box sx={{ flex: "2", display: "flex", flexDirection: "column", gap: 4 }}>
            {/* Tech Stack Section */}
            <Typography color="secondary" variant="h4" align="center">
              Technologies
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
              {[
                { href: "https://angular.io", src: "https://angular.io/assets/images/logos/angular/angular.svg", alt: "Angular" },
                { href: "https://reactjs.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "React" },
                { href: "https://nodejs.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
                { href: "https://www.python.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
                { href: "https://www.java.com", src: "https://www.vectorlogo.zone/logos/java/java-icon.svg", alt: "Java" },
                { href: "https://spring.io/projects/spring-boot", src: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg", alt: "Spring Boot" },
                { href: "https://aws.amazon.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
                { href: "https://azure.microsoft.com/en-in/", src: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg", alt: "Azure" },
                { href: "https://www.docker.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg", alt: "Docker" },
                { href: "https://kubernetes.io", src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg", alt: "Kubernetes" },
                { href: "https://graphql.org", src: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg", alt: "GraphQL" },
                { href: "https://www.mysql.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL" },
                { href: "https://www.postgresql.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg", alt: "PostgreSQL" },
                { href: "https://redis.io", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg", alt: "Redis" },
                { href: "https://sass-lang.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", alt: "Sass" },
                { href: "https://www.typescriptlang.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "TypeScript" },
                { href: "https://webpack.js.org/", src: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png", alt: "Webpack" },
                { href: "https://www.php.net", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", alt: "PHP" },
                { href: "https://www.mongodb.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", alt: "MongoDB" },
                { href: "https://firebase.google.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain-wordmark.svg", alt: "Firebase" },
                { href: "https://www.elastic.co", src: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg", alt: "Elasticsearch" },
                { href: "https://cordova.apache.org/", src: "https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg", alt: "Apache Cordova" },
                { href: "https://www.gnu.org/software/bash/", src: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg", alt: "Bash" },
                { href: "https://getbootstrap.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg", alt: "Bootstrap" },
                { href: "https://www.cprogramming.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", alt: "C" },
                { href: "https://circleci.com", src: "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg", alt: "CircleCI" },
                { href: "https://www.w3schools.com/cpp/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
                { href: "https://www.w3schools.com/css/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", alt: "CSS3" },
                { href: "https://www.cypress.io", src: "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg", alt: "Cypress" },
                { href: "https://expressjs.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", alt: "Express" },
                { href: "https://cloud.google.com", src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg", alt: "Google Cloud" },
                { href: "https://git-scm.com/", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "Git" },
                { href: "https://grafana.com", src: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg", alt: "Grafana" },
                { href: "https://heroku.com", src: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg", alt: "Heroku" },
                { href: "https://www.langchain.com/", src: langchainLogo, alt: "LangChain" },
                { href: "https://github.com/bats-core/bats-core", src: batsLogo, alt: "Bats" },
              ].map(
                (skill, index) =>
                  skill.src && (
                    <Link key={index} href={skill.href} target="_blank" rel="noopener noreferrer">
                      <img src={skill.src} alt={skill.alt} width="40" height="40" />
                    </Link>
                  )
              )}
            </Box>

            {/* Badges & Certifications Section */}
            <Typography color="secondary" variant="h4" align="center">
              Certifications
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
              <img src={AWSSolutionsArchitect} alt="AWS Solutions Architect" style={{ width: "120px", height: "auto" }} />
              <img src={AWSBusinessAccredited} alt="AWS Business Accredited" style={{ width: "120px", height: "auto" }} />
              <img src={AWSCloudPractitioner} alt="AWS Cloud Practitioner" style={{ width: "120px", height: "auto" }} />
              <img src={AWSCloudEconomicsEssential} alt="AWS Cloud Economics Essential" style={{ width: "120px", height: "auto" }} />
              <img src={PwCDigitalAcumen} alt="PwC Digital Acumen" style={{ width: "120px", height: "auto" }} />
              <img src={PwCHumanCenteredDesign} alt="PwC Human-Centered Design" style={{ width: "120px", height: "auto" }} />
            </Box>
          </Box>
        </Box>
        <CardActionArea>
          <Typography variant="body1" align="center">
            &copy; 2024 Vipul Sharma. All rights reserved.
          </Typography>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export default Home;
