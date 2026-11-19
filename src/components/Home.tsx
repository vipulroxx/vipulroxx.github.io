import React, { useEffect, useState } from "react";
import { Button, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import RedditIcon from "@mui/icons-material/Reddit";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ProfileImage from "../static/img/pics/vipul.png";
import AthleteImage from "../static/img/pics/athelete.png";
import Resume from "./Resume";
import langchainLogo from "../static/icons/langchain-icon.jpeg";
import batsLogo from "../static/icons/bats-icon.jpeg";
import ParticleField from "./fx/ParticleField";
import Reveal from "./fx/Reveal";
import TiltCard from "./fx/TiltCard";
import SectionHeader from "./fx/SectionHeader";
import useTypewriter from "./fx/useTypewriter";

import AWSSolutionsArchitect from "../static/img/badges/AWS Solutions Architect.png";
import AWSBusinessAccredited from "../static/img/badges/AWS Business Accredited.png";
import AWSCloudPractitioner from "../static/img/badges/AWS Cloud Practitioner.png";
import AWSCloudEconomicsEssential from "../static/img/badges/AWS Cloud Economics Essential.png";
import PwCDigitalAcumen from "../static/img/badges/PwC Digital Acumen.png";
import PwCHumanCenteredDesign from "../static/img/badges/PwC Human Centered Design.png";

const EMAIL = "vipulsharma936@gmail.com";

// Add a profile URL to show its icon in the hero. Entries without an href are hidden.
const SOCIALS: { label: string; href: string; icon: React.ReactNode }[] = [
  { label: "GitHub", href: "https://github.com/vipulroxx", icon: <GitHubIcon /> },
  { label: "LinkedIn", href: "", icon: <LinkedInIcon /> },
  { label: "X", href: "", icon: <XIcon /> },
  { label: "Instagram", href: "", icon: <InstagramIcon /> },
  { label: "Facebook", href: "", icon: <FacebookIcon /> },
  { label: "Reddit", href: "", icon: <RedditIcon /> },
  { label: "Email", href: `mailto:${EMAIL}`, icon: <EmailIcon /> },
];

const ROLES = [
  "build GenAI products.",
  "ship full-stack apps.",
  "architect on the cloud.",
  "compete as an athlete.",
];

const TECH = [
  { href: "https://angular.io", src: "https://angular.io/assets/images/logos/angular/angular.svg", alt: "Angular" },
  { href: "https://reactjs.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", alt: "React" },
  { href: "https://nodejs.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { href: "https://www.python.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
  { href: "https://flask.palletsprojects.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", alt: "Flask" },
  { href: "https://www.java.com", src: "https://www.vectorlogo.zone/logos/java/java-icon.svg", alt: "Java" },
  { href: "https://spring.io/projects/spring-boot", src: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg", alt: "Spring Boot" },
  { href: "https://aws.amazon.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg", alt: "AWS" },
  { href: "https://azure.microsoft.com/en-in/", src: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg", alt: "Azure" },
  { href: "https://www.docker.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", alt: "Docker" },
  { href: "https://kubernetes.io", src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg", alt: "Kubernetes" },
  { href: "https://graphql.org", src: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg", alt: "GraphQL" },
  { href: "https://www.mysql.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", alt: "MySQL" },
  { href: "https://www.postgresql.org", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { href: "https://redis.io", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg", alt: "Redis" },
  { href: "https://sass-lang.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", alt: "Sass" },
  { href: "https://www.typescriptlang.org/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { href: "https://webpack.js.org/", src: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png", alt: "Webpack" },
  { href: "https://www.php.net", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", alt: "PHP" },
  { href: "https://www.mongodb.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { href: "https://firebase.google.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg", alt: "Firebase" },
  { href: "https://www.elastic.co", src: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg", alt: "Elasticsearch" },
  { href: "https://cordova.apache.org/", src: "https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg", alt: "Apache Cordova" },
  { href: "https://www.gnu.org/software/bash/", src: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg", alt: "Bash" },
  { href: "https://getbootstrap.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg", alt: "Bootstrap" },
  { href: "https://www.cprogramming.com/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", alt: "C" },
  { href: "https://circleci.com", src: "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg", alt: "CircleCI" },
  { href: "https://www.w3schools.com/cpp/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
  { href: "https://www.w3schools.com/css/", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", alt: "CSS3" },
  { href: "https://www.cypress.io", src: "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg", alt: "Cypress" },
  { href: "https://expressjs.com", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", alt: "Express" },
  { href: "https://cloud.google.com", src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg", alt: "Google Cloud" },
  { href: "https://git-scm.com/", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "Git" },
  { href: "https://grafana.com", src: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg", alt: "Grafana" },
  { href: "https://heroku.com", src: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg", alt: "Heroku" },
  { href: "https://www.langchain.com/", src: langchainLogo, alt: "LangChain" },
  { href: "https://github.com/bats-core/bats-core", src: batsLogo, alt: "Bats" },];

const BADGES = [
  { src: AWSSolutionsArchitect, alt: "AWS Solutions Architect" },
  { src: AWSBusinessAccredited, alt: "AWS Business Accredited" },
  { src: AWSCloudPractitioner, alt: "AWS Cloud Practitioner" },
  { src: AWSCloudEconomicsEssential, alt: "AWS Cloud Economics Essential" },
  { src: PwCDigitalAcumen, alt: "PwC Digital Acumen" },
  { src: PwCHumanCenteredDesign, alt: "PwC Human-Centered Design" },
];

function Marquee({ items, reverse = false }: { items: typeof TECH; reverse?: boolean }) {
  // The list is rendered twice so the loop is seamless; the copy is hidden from assistive tech.
  const renderSet = (copy: boolean) =>
    items.map((t) => (
      <a
        key={`${copy ? "c" : "o"}-${t.alt}`}
        className="tech-pill"
        href={t.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden={copy || undefined}
        tabIndex={copy ? -1 : undefined}
      >
        <img src={t.src} alt={copy ? "" : t.alt} loading="lazy" />
        {t.alt}
      </a>
    ));
  return (
    <div className={`marquee ${reverse ? "reverse" : ""}`}>
      <div className="marquee-track">
        {renderSet(false)}
        {renderSet(true)}
      </div>
    </div>
  );
}

const Home = () => {
  const [showAthlete, setShowAthlete] = useState(false);
  const navigate = useNavigate();
  const typed = useTypewriter(ROLES);

  useEffect(() => {
    const interval = setInterval(() => setShowAthlete((v) => !v), 3500);
    return () => clearInterval(interval);
  }, []);

  const half = Math.ceil(TECH.length / 2);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <ParticleField />
        <div className="hero-inner">
          <div>
            <Reveal>
              <span className="kicker">Full-stack GenAI engineer · Athlete</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hero-name gradient-text">VIPUL SHARMA</h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hero-role">
                I <span className="typed">{typed}</span>
                <span className="caret" aria-hidden="true" />
              </p>
              <div className="hero-emoji" aria-hidden="true">🌎 🇮🇳 🪽 ⚡️ 🏅 💖</div>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero-chips">
                <Chip label="Full Stack GenAI @ ITC Infotech" variant="outlined" />
                <Chip label="Commercial Asset Tech @ PwC" variant="outlined" />
                <Chip label="Athlete @ AFI | WWRC 2025" variant="outlined" />
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="hero-actions">
                <Resume />
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<WorkspacePremiumIcon />}
                  onClick={() => navigate("/CertificateGallery")}
                >
                  Certificates
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowOutwardIcon />}
                  onClick={() => navigate("/experience")}
                >
                  Experience
                </Button>
              </div>
              <div className="socials">
                {SOCIALS.filter((s) => s.href).map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-avatar">
            <div className="avatar-wrap">
              <div className="avatar-ring blur" />
              <div className="avatar-ring" />
              <div className="avatar-img">
                <img src={ProfileImage} alt="Vipul Sharma" className={showAthlete ? "hidden" : ""} />
                <img src={AthleteImage} alt="Vipul Sharma competing" className={showAthlete ? "" : "hidden"} />
              </div>
              <span className="avatar-tag t1">⚡ {showAthlete ? "athlete.mode" : "engineer.mode"}</span>
              <span className="avatar-tag t2">🇮🇳 India</span>
            </div>
          </Reveal>
        </div>
        <div className="scroll-hint" aria-hidden="true" />
      </section>

      <div className="page" style={{ paddingTop: 0 }}>
        {/* ---------- Tech ---------- */}
        <section className="home-section">
          <SectionHeader
            kicker="01 / Stack"
            title="Technologies"
            sub="The languages, frameworks and clouds I reach for, from LLM agents to Kubernetes."
          />
          <Reveal delay={100}>
            <div style={{ display: "grid", gap: 12, marginTop: 40 }}>
              <Marquee items={TECH.slice(0, half)} />
              <Marquee items={TECH.slice(half)} reverse />
            </div>
          </Reveal>
        </section>

        {/* ---------- Badges ---------- */}
        <section className="home-section">
          <SectionHeader kicker="02 / Credentials" title="Badges" sub="Certified on AWS, accredited at PwC." />
          <div className="badge-grid">
            {BADGES.map((b, i) => (
              <Reveal key={b.alt} delay={i * 70}>
                <TiltCard className="badge-card">
                  <img src={b.src} alt={b.alt} loading="lazy" />
                  <span>{b.alt}</span>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <Reveal>
          <section className="glass cta">
            <span className="kicker">03 / Contact</span>
            <h2>
              Let's build something <span className="gradient-text">fast.</span>
            </h2>
            <p className="section-sub" style={{ margin: "20px auto 0" }}>
              Open to GenAI, full-stack and cloud collaborations.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
              <Button variant="contained" size="large" href={`mailto:${EMAIL}`} endIcon={<ArrowOutwardIcon />}>
                Say hi
              </Button>
              <Button variant="outlined" size="large" onClick={() => navigate("/projects")}>
                See projects
              </Button>
            </div>
          </section>
        </Reveal>

        <footer className="site-footer">
          <div>&copy; {new Date().getFullYear()} Vipul Sharma. All rights reserved.</div>
          <div style={{ marginTop: 6, opacity: 0.6 }}>Designed &amp; built by Vipul Sharma</div>
        </footer>
      </div>
    </>
  );
};

export default Home;
