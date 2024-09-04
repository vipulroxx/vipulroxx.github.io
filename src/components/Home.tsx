import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
  Box,
  Grid,
  Paper,
  Stack
} from "@mui/material";
import langchainLogo from '../static/icons/langchain-icon.jpeg';
import batsLogo from '../static/icons/bats-icon.jpeg';
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Reddit as RedditIcon,
  Twitter as TwitterIcon
} from '@mui/icons-material';
import Banner from './Banner.png';
import Projects from "./Projects";
import Publication from "./Publication";
import Experience from "./Experience";
import '../App.css';
import FullScreenDialog from "./mui-components/FullScreenDialog";
import AWSBusinessAccredited from '../static/img/Badges & Certifications/AWS Business Accredited.png';
import AWSCloudEconomicsEssential from '../static/img/Badges & Certifications/AWS Cloud Economics Essential.png';
import AWSCloudPractitioner from '../static/img/Badges & Certifications/AWS Cloud Practitioner.png';
import AWSSolutionsArchitect from '../static/img/Badges & Certifications/AWS Solutions Architect.png';
import PwCDigitalAcumen from '../static/img/Badges & Certifications/PwC Digital Acumen.png';
import PwCHumanCenteredDesign from '../static/img/Badges & Certifications/PwC Human Centered Design.png';


const Home = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        src={Banner}
        alt="Vipul Sharma"
        className="card-media"
      />
      <CardHeader
        title={
          <Typography align="center" color="red" variant="h3" className="card-header-title">
            <strong>VIPUL SHARMA</strong>
          </Typography>
        }
      />
      <CardContent className="card-content">
        <Box className="profile-container">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper className="about-me-paper">
                <Stack direction="column" spacing={2}>
                <Typography align="center" color="secondary" variant="h4">
                    ✨About Me✨
                  </Typography>
                  <Typography variant="body1">
                    👶 Early Interest: My love for programming began with Java and the excitement of solving problems through code. 🔍 First Steps in Coding: Writing Java code for sorting and technical challenges turned into a relaxing hobby, learning from open-source communities. 🌟 Inspiration and Mentorship: Seeing talented coders motivated me to improve and fueled my passion.
                  </Typography>
                  <Typography variant="body1">
                    🌍 Embracing Open Source: Open source taught me the joy of contributing. Being a Google Code-in finalist in 2013 was a milestone. 👨‍💻 Consistency and Contributions: Consistently contributing to GitHub, working on Android projects, and attending hackathons brings me happiness.
                  </Typography>
                  <Typography variant="body1">
                    💡 Logical Thinking and Growth: Programming refined my logical thinking and problem-solving skills. It defines me. 🤖 Embracing AI: I believe in AI's potential to create a better world. 🚀 Future Goals: I aim to leverage powerful computation techniques to achieve my goals and help businesses thrive.
                    👶 Early Interest: My love for programming began with Java and the excitement of solving problems through code...
                  </Typography>
                  {/* GitHub Stats */}
                  <Box className="github-stats">
                    <img
                      src="https://github-readme-stats.vercel.app/api?username=vipulroxx&show_icons=true&theme=radical"
                      alt="Vipul's GitHub stats"
                    />
                  </Box>
                  <FullScreenDialog/> 
                </Stack>
                
                 {/* Tech Stack Section */}
                 <Typography color="secondary" variant="h4">
                      🥰 Tech Stacks ♛
                  </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                  <Link href="https://angular.io" target="_blank" rel="noopener noreferrer"><img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40" /></Link>
                  <Link href="https://cordova.apache.org/" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg" alt="apachecordova" width="40" height="40" /></Link>
                  <Link href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40" /></Link>
                  <Link href="https://azure.microsoft.com/en-in/" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="40" height="40" /></Link>
                  <Link href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40" /></Link>
                  <Link href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" /></Link>
                  <Link href="https://www.cprogramming.com/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40" /></Link>
                  <Link href="https://circleci.com" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg" alt="circleci" width="40" height="40" /></Link>
                  <Link href="https://www.w3schools.com/cpp/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40" /></Link>
                  <Link href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /></Link>
                  <Link href="https://www.cypress.io" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="40" height="40" /></Link>
                  <Link href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40" /></Link>
                  <Link href="https://www.elastic.co" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" alt="elasticsearch" width="40" height="40" /></Link>
                  <Link href="https://expressjs.com" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /></Link>
                  <Link href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40" /></Link>
                  <Link href="https://cloud.google.com" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="40" height="40" /></Link>
                  <Link href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /></Link>
                  <Link href="https://grafana.com" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" alt="grafana" width="40" height="40" /></Link>
                  <Link href="https://graphql.org" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40" /></Link>
                  <Link href="https://heroku.com" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40" /></Link>
                  <Link href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /></Link>
                  <Link href="https://gohugo.io/" target="_blank" rel="noopener noreferrer"><img src="https://api.iconify.design/logos-hugo.svg" alt="hugo" width="40" height="40" /></Link>
                  <Link href="https://jasmine.github.io/" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg" alt="jasmine" width="40" height="40" /></Link>
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /></Link>
                  <Link href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg" alt="jekyll" width="40" height="40" /></Link>
                  <Link href="https://www.jenkins.io" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="40" height="40" /></Link>
                  <Link href="https://jestjs.io" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40" /></Link>
                  <Link href="https://karma-runner.github.io/latest/index.html" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg" alt="karma" width="40" height="40" /></Link>
                  <Link href="https://www.elastic.co/kibana" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg" alt="kibana" width="40" height="40" /></Link>
                  <Link href="https://kubernetes.io" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="40" height="40" /></Link>
                  <Link href="https://www.linux.org/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" /></Link>
                  <Link href="https://mochajs.org" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg" alt="mocha" width="40" height="40" /></Link>
                  <Link href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /></Link>
                  <Link href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noopener noreferrer"><img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40" /></Link>
                  <Link href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" /></Link>
                  <Link href="https://www.nginx.com" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40" /></Link>
                  <Link href="https://nodejs.org" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /></Link>
                  <Link href="https://www.php.net" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40" /></Link>
                  <Link href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /></Link>
                  <Link href="https://postman.com" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" /></Link>
                  <Link href="https://github.com/puppeteer/puppeteer" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg" alt="puppeteer" width="40" height="40" /></Link>
                  <Link href="https://www.python.org" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" /></Link>
                  <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /></Link>
                  <Link href="https://redis.io" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="40" height="40" /></Link>
                  <Link href="https://sass-lang.com" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" /></Link>
                  <Link href="https://www.selenium.dev" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg" alt="selenium" width="40" height="40" /></Link>
                  <Link href="https://www.sqlite.org/" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40" /></Link>
                  <Link href="https://travis-ci.org" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg" alt="travisci" width="40" height="40" /></Link>
                  <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" /></Link>
                  <Link href="https://www.java.com" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="java" width="40" height="40" /></Link>
                  <Link href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer"><img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="springboot" width="40" height="40" /></Link>
                  <Link href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" alt=".net" width="40" height="40" /></Link>
                  <Link href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer"><img src={langchainLogo} alt="langchain" width="40" height="40" /></Link>
                  <Link href="https://github.com/bats-core/bats-core" target="_blank" rel="noopener noreferrer"><img src={batsLogo} alt="bats" width="40" height="40" /></Link>
                  <Link href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" alt="webpack" width="40" height="40" /></Link>
                </Box>
              </Paper>
              {/* Badges & Certifications Section */}
              <Box sx={{ mt: 4 }}>
                <Typography color="secondary" variant="h4" align="center">
                  🏆 Badges & Certifications 🎓
                </Typography>
                <Grid container spacing={2} sx={{ overflowX: 'auto', maxHeight: '200px' }}>
                    <Grid item xs={6} sm={4} md={2}>
                      <img src={AWSSolutionsArchitect} alt="AWSSolutionsArchitect" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                      <img src={AWSBusinessAccredited} alt="AWSBusinessAccredited" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                      <img src={AWSCloudPractitioner} alt="AWSCloudPractitioner" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                      <img src={AWSCloudEconomicsEssential} alt="AWSCloudEconomicsEssential" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                      <img src={PwCDigitalAcumen} alt="PwCDigitalAcumen" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                      <img src={PwCHumanCenteredDesign} alt="PwCHumanCenteredDesign" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color="secondary" variant="h4" align="center" sx={{ mt: 2 }}>
                🖥️ Open Source Projects 💼
              </Typography>
              <Box className="projects-section">
                <Projects />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography margin="2rem" color="secondary" variant="h3" align="center">
          Experience
        </Typography>
        <Experience />
        <Typography marginTop="2rem" color="secondary" variant="h3" align="center">
          Publication
        </Typography>
        <Publication />
      </CardContent>
      <CardActionArea className="social-icons">
        <Box className="social-icons">
          <a href="https://www.facebook.com/vipulvsss/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="https://www.instagram.com/mudbludbullets936/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/vipul-vs-sharma/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://twitter.com/vipulVSsharma" target="_blank" rel="noopener noreferrer">
            <TwitterIcon fontSize="large" />
          </a>
          <a href="https://www.reddit.com/user/vipulroxx" target="_blank" rel="noopener noreferrer">
            <RedditIcon fontSize="large" />
          </a>
          <a href="https://github.com/vipulroxx" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" />
          </a>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default Home;
