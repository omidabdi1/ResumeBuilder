import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useResume } from '../../context/ResumeContext';

export default function SummaryForm() {
  const { state, dispatch } = useResume();

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.main' }}>
        Professional Summary
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        size="small"
        label="Summary"
        placeholder="Write a brief professional summary..."
        value={state.resumeData.summary}
        onChange={(e) => dispatch({ type: 'UPDATE_SUMMARY', payload: e.target.value })}
      />
    </Box>
  );
}
