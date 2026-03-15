import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useResume } from '../../context/ResumeContext';
import { TEMPLATE_OPTIONS } from '../../constants/defaultData';

export default function TemplateSelector() {
  const { state, dispatch } = useResume();

  return (
    <Box
      className="no-print"
      sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, py: 1.5, bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
        Template:
      </Typography>
      <ToggleButtonGroup
        size="small"
        exclusive
        value={state.activeTemplate}
        onChange={(_, val) => val && dispatch({ type: 'SET_TEMPLATE', payload: val })}
      >
        {TEMPLATE_OPTIONS.map((t) => (
          <ToggleButton key={t.id} value={t.id} sx={{ textTransform: 'none', px: 2 }}>
            {t.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
