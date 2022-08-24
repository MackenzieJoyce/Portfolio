// I think id needs to be useId
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const styles = {
  resume: {
    flexDirection: 'column'
  },
  accordion: {
    margin: '0% 8% 0 8%',
  }, 
  accordionTitle: { 
    color: '#1d1d1d',
    fontSize: '1.1rem',
  },
  accordionDetails: { 
    alignItems: 'left'
  }
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
        <h3 className='title'>Work History</h3>
        {/* <p className="lead">
          I have never done anything except web development.
        </p> */}
      </Container>
      <div style={styles.accordion}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')} 
          // sx={{ 
          //   p: { alignItems: 'left' }
          // }}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography style={styles.accordionTitle}>Projects</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {/* style={styles.accordionDetails} */}
              Add the projects in a list and put the text in here rather than
              the portfolio.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography style={styles.accordionTitle}>Work Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              List out actual work expereince without mentioning the years
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography style={styles.accordionTitle}>Education and Certifications</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Bootcamp certificate and then regular education without mentioning
              the degree or year
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
