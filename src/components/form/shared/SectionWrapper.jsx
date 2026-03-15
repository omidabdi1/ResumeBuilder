import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { useResume } from '../../../context/ResumeContext';

export default function SectionWrapper({ sectionKey, title, children }) {
  const { state, dispatch } = useResume();
  const enabled = state.sectionVisibility[sectionKey] ?? true;

  function handleToggle(e) {
    e.stopPropagation();
    dispatch({ type: 'TOGGLE_SECTION', payload: sectionKey });
  }

  return (
    <Accordion disableGutters elevation={0} sx={{ border: '1px solid', borderColor: 'divider', mb: 1.5, '&:before': { display: 'none' } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 48 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%', pr: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, flexGrow: 1 }}>
            {title}
          </Typography>
          <FormControlLabel
            control={<Switch size="small" checked={enabled} onChange={handleToggle} />}
            label={<Typography variant="caption">{enabled ? 'Visible' : 'Hidden'}</Typography>}
            onClick={(e) => e.stopPropagation()}
            sx={{ mr: 0 }}
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
