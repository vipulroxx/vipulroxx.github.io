import React from "react";
import { Accordion, Typography, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Achievements = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (_event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <h3>PUBLICATION</h3>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography>Certified Solution Architect Associate</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Issued Jan 2022. Expires Jan 2025</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Achievements;
