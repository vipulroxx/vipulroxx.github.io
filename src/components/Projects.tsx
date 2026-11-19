import React, { useEffect, useMemo, useState } from "react";
import { Dialog, IconButton, Tooltip, TextField, InputAdornment, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import SearchIcon from "@mui/icons-material/Search";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TiltCard from "./fx/TiltCard";
import Reveal from "./fx/Reveal";
import SectionHeader from "./fx/SectionHeader";

interface Project {
  title: string;
  subheader: string;
  description: string;
  dialogContent: string;
  githubLink?: string;
  liveLink?: string | null;
}

const projectsData: Project[] = [
  {
    title: "AI Powered Human Resource Management System",
    subheader: "Jun, 2025",
    description: "Developed a web application for managing human resources using AI...",
    dialogContent: "The application allows users to manage human resources efficiently with AI-powered features. It includes functionalities for employee management, attendance tracking, and performance evaluation.",
    githubLink: "https://github.com/vipulroxx/hr-ai-app",
    liveLink: "https://human-resource-managemen-32452.web.app",
  },
  {
    title: "Ameer Kissan",
    subheader: "Jan, 2025",
    description: "Developed a web application for farmers to grow and sell their products...",
    dialogContent: "The application allows farmers to grow, remediate, register, list, and trade their products for sale in the market. Customers can browse the products and place orders directly through the platform.",
    githubLink: "https://github.com/vipulroxx/ameer-kisaan.git",
    liveLink: "https://ameer-kisaan-da0ec.web.app",
  },
  {
    title: "Samadhaan",
    subheader: "June, 2021",
    description: "Build a concern logging application using PHP, HTML, CSS & JS...",
    dialogContent: "Concerns can be logged by a user living in a housing colony and an administrator can attend those concerns. Final system was used in Ambuja Cement Colony at Sindri, Jharkhand and can be visited on https://accsindrisamadhan.com.",
    githubLink: "https://github.com/vipulroxx/samadhaan.git",
    liveLink: "https://accsindrisamadhaan.42web.io",
  },
  {
    title: "ITER Academics",
    subheader: "June, 2021",
    description: "Built ITER Academics website which allows users to view course outcomes...",
    dialogContent: "Website was built using single-page application development concept with latest tools including ReactJS & material design concept.",
    githubLink: "https://github.com/vipulroxx/iter-academics.git",
    liveLink: null,
  },
  {
    title: "Information Retrieval from any Document",
    subheader: "February, 2021",
    description: "Pre-processed the document data by tokenization, stop word removal and stemming in Python...",
    dialogContent: "Calculated the term and document frequency to take out the term score after the document was pre-processed. Information was then extracted by taking out the cosine similarity.",
    githubLink: "https://github.com/vipulroxx/information-retrieval-from-document.git",
  },
  {
    title: "Grocery List Android Application",
    subheader: "February, 2021",
    description: "Application built in Android aimed to make customer and vendor interact faster...",
    dialogContent: "Allowed the user to create a grocery list of their choice from listed products available on the application based on different price points. The final list was converted to PDF and could be sent to any vendor through online social messaging platforms such as WhatsApp.",
    githubLink: "https://github.com/vipulroxx/grocery.git",
    liveLink: null,
  },
  {
    title: "Greenify",
    subheader: "February, 2021",
    description: "Application built in Spring Boot JAVA for understanding endangered plants...",
    dialogContent: "Application was built to understand the endangered plants and their medicinal properties. Users could search for the plant name and get the details of the plant. The application was built using Spring Boot and Java.",
    githubLink: "https://github.com/vipulroxx/greenify.git",
    liveLink: null,
  },
  {
    title: "CPU Schedulers",
    subheader: "October, 2020",
    description: "Implemented CPU schedulers using FCFS, SJF, SRTF, and RR based policies...",
    dialogContent: "Users could choose their preferred choice of policy and check against the process running from the ready queue. Output given to the user was Gantt chart, average wait time, average turnaround time, and average response time.",
  },
  {
    title: "Lexical Analyzer",
    subheader: "September, 2020",
    description: "Used finite state machine having a set of states, a set of transitions, and a string of input data...",
    dialogContent: "FSM was then implemented in C to recognize a list of identifiers and non-negative integers.",
  },
  {
    title: "Compilers and UNIX System Call and Concepts",
    subheader: "August, 2020",
    description: "Used system calls including fork, wait, strtok, and dup2 for processes...",
    dialogContent: "Implemented concepts such as pipes, critical sections, and inter-process communication in C.",
    githubLink: "https://github.com/vipulroxx/Compiler-Class.git",
  },
  {
    title: "Implementation of Algorithms",
    subheader: "August, 2019",
    description: "Implemented N-Queens, Binomial Coefficient, CYK, Edit Distance, Floyd-Warshall algorithms in C++...",
    dialogContent: "Also implemented Knapsack, Linear Integer Partition, Backtracking, and Matrix Chain Order Optimal Parenthesis algorithms in C++.",
    githubLink: "https://github.com/vipulroxx/learn-c-.git",
    liveLink: null,
  },
  {
    title: "Programming Practice JAVA",
    subheader: "June, 2019",
    description: "Built a programming practice application using Java...",
    dialogContent: "Java Programs done in Programming Practice 2 Class: Data Structures and Algorithms. The application allowed the user to practice programming questions and get the solution for the same.",
    githubLink: "https://github.com/vipulroxx/PP2-JAVA.git",
    liveLink: null,
  },
  {
    title: "SAGE",
    subheader: "October, 2017",
    description: "Developed SAGE (Synonyms, Antonyms, General Sense & Example Usage), a game for teachers and students...",
    dialogContent: "Designed for a classroom setting, the students try to guess the meaning of a word through hints controlled by the teacher.",
    githubLink: "https://github.com/vipulroxx/sage-team-cheezit.git",
    liveLink: "https://sage.cards",
  },
  {
    title: "Point of Sales",
    subheader: "September, 2017",
    description: "Developed a point of sales web application using Angular JS, Node JS, and MariaDB...",
    dialogContent: "Main features included login utility, editing items for transaction, and selling a transaction. Built an API providing endpoints for fetching buttons and manipulating transactions.",
    githubLink: "https://github.com/vipulroxx/Point-Of-Sales.git",
    liveLink: null,
  },
  {
    title: "Axxelerate",
    subheader: "August, 2017",
    description: "Created a Python-based search engine using Scrapy for crawling webpages...",
    dialogContent: "Crawler could download more webpages based on the links found in the current webpage. Used MariaDB for the database to store the records and Flask for the webserver. Frontend was built using Angular 4 and Material Design approach.",
    githubLink: "https://github.com/vipulroxx/Axxelerate.git",
    liveLink: null,
  },
];

const yearOf = (p: Project) => p.subheader.match(/\d{4}/)?.[0] ?? "";

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [liveOnly, setLiveOnly] = useState(false);

  const filteredProjects = useMemo(
    () =>
      projectsData.filter(
        (project) =>
          (!liveOnly || project.liveLink) &&
          (project.title.toLowerCase().includes(searchQuery) ||
            project.description.toLowerCase().includes(searchQuery) ||
            project.dialogContent.toLowerCase().includes(searchQuery))
      ),
    [searchQuery, liveOnly]
  );

  // "/" focuses search, like most dev tools.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        document.getElementById("project-search")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (url?: string | null) => (e: React.MouseEvent) => {
    e.stopPropagation();
    if (url) window.open(url, "_blank", "noopener");
  };

  return (
    <div className="page">
      <SectionHeader
        kicker={`${String(projectsData.length).padStart(2, "0")} / Projects`}
        title="Things I've built"
        sub="From AI-powered HR platforms to compilers and CPU schedulers. Hover a card, click for the story."
      />

      <Reveal delay={100}>
        <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap", alignItems: "center" }}>
          <TextField
            id="project-search"
            sx={{ flex: "1 1 320px" }}
            variant="outlined"
            placeholder="Search projects..."
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "var(--muted)" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <kbd className="mono" style={{ fontSize: 12, color: "var(--muted)", border: "1px solid var(--border-strong)", borderRadius: 6, padding: "2px 7px" }}>/</kbd>
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button variant={liveOnly ? "contained" : "outlined"} onClick={() => setLiveOnly((v) => !v)} sx={{ height: 52 }}>
            <span className="live-dot" style={{ color: liveOnly ? "#064e3b" : undefined }}>Live only</span>
          </Button>
          <span className="mono" style={{ color: "var(--muted)", fontSize: 13 }}>
            {filteredProjects.length} result{filteredProjects.length === 1 ? "" : "s"}
          </span>
        </div>
      </Reveal>

      <div className="card-grid">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 80}>
            <TiltCard
              className="project-card"
              role="button"
              tabIndex={0}
              aria-label={`${project.title} details`}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(project)}
            >
              <div className="idx">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.liveLink ? <span className="live-dot">live</span> : yearOf(project)}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="actions">
                {project.githubLink && (
                  <Tooltip title="View on GitHub">
                    <IconButton size="small" onClick={open(project.githubLink)} aria-label="GitHub">
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
                {project.liveLink && (
                  <Tooltip title="View Live">
                    <IconButton size="small" onClick={open(project.liveLink)} aria-label="Live site">
                      <LaunchIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
                <span style={{ flex: 1 }} />
                <span className="mono" style={{ fontSize: 12, color: "var(--muted)", alignSelf: "center" }}>
                  {project.subheader}
                </span>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="mono" style={{ textAlign: "center", color: "var(--muted)", marginTop: 60 }}>
          {`// no projects match "${searchQuery}"`}
        </p>
      )}

      <Dialog open={!!selected} onClose={() => setSelected(null)} maxWidth="sm" fullWidth>
        {selected && (
          <div style={{ padding: "32px clamp(20px, 5vw, 40px) 36px", position: "relative" }}>
            <IconButton onClick={() => setSelected(null)} aria-label="close" sx={{ position: "absolute", top: 14, right: 14 }}>
              <CloseIcon />
            </IconButton>
            <span className="kicker">{selected.subheader}</span>
            <h2 className="section-title" style={{ fontSize: "clamp(28px, 5vw, 40px)" }}>{selected.title}</h2>
            <p className="section-sub">{selected.dialogContent}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              {selected.liveLink && (
                <Button variant="contained" href={selected.liveLink} target="_blank" rel="noopener noreferrer" endIcon={<ArrowOutwardIcon />}>
                  Visit live
                </Button>
              )}
              {selected.githubLink && (
                <Button variant="outlined" href={selected.githubLink} target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon />}>
                  Source
                </Button>
              )}
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}

export default Projects;
