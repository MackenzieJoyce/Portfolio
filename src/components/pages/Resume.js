// I think id needs to be useId
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const styles = {
  resume: {
    flexDirection: 'column'
  },
  accordion: {
    margin: '0% 8% 3% 8%'
  },
  accordionTitle: {
    color: '#1d1d1d',
    fontSize: '1.1rem'
  }
  // accordionDetails: {
  //   display: 'flex',
  //   flexDirection: 'column'
  // }
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="contentEntire" style={styles.resume}>
      <Container maxWidth="sm" style={styles.resumeTitle}>
        <h3 className="title">Work History</h3>
        {/* <p className="lead">
          I have never done anything except web development.
        </p> */}
      </Container>
      <div
        style={styles.accordion}
        sx={{
          'p#text': { display: 'flex', flexDirection: 'column' }
        }}
      >
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <h3 style={styles.accordionTitle}>Projects</h3>
          </AccordionSummary>
          <AccordionDetails>
            {/* style={styles.accordionDetails} */}
            <p>
              Add the projects in a list and put the text in here rather than
              the portfolio.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <h3 style={styles.accordionTitle}>Work Experience</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>Black Hammock Bee Farms</p>
            <p>
              Grew the following on the farm's social media account; Instagram
              three times as much and then steadily growing. Facebook by 50% and
              maintained following. Maintained the social media accounts and
              marketing for a local farm. Prepared and delivered multiple
              updates per day, interacting with their audience.
            </p>
            <p>Inova Fairfax Hospital</p>
            <p>
              Utilized Epic Systems software to document sensitive information.
              Interpreted and effectively communicated, verbally and in writing,
              assessment results and treatment needs to people with varying
              levels of knowledge of the field. Maintained interdisciplinary
              communication in a fast-paced setting.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <h3 style={styles.accordionTitle}>Education and Certifications</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>The George Washington University M.A.</p>
            <span>Fall 2018 - Spring 2020</span>
            <p> University of Central Florida B.S.</p>
            <span>Fall 2013 - Summer 2017</span>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
