import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { useResumeSection } from '../../hooks/useResumeSection';
import EntryCard from './shared/EntryCard';

export default function EducationForm() {
  const { entries, addEntry, removeEntry, updateEntry } = useResumeSection('education');

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.main' }}>
        Education
      </Typography>

      {entries.map((edu) => (
        <EntryCard
          key={edu.id}
          title={edu.institution || 'New Education'}
          onDelete={() => removeEntry(edu.id)}
        >
          <Grid container spacing={1.5}>
            <Grid item xs={12}>
              <TextField fullWidth size="small" label="Institution" value={edu.institution} onChange={(e) => updateEntry(edu.id, 'institution', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth size="small" label="Degree" placeholder="Bachelor of Science" value={edu.degree} onChange={(e) => updateEntry(edu.id, 'degree', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth size="small" label="Field of Study" placeholder="Computer Science" value={edu.field} onChange={(e) => updateEntry(edu.id, 'field', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth size="small" label="Start Year" placeholder="2015" value={edu.startDate} onChange={(e) => updateEntry(edu.id, 'startDate', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth size="small" label="End Year" placeholder="2019" value={edu.endDate} onChange={(e) => updateEntry(edu.id, 'endDate', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth size="small" label="GPA" placeholder="3.8" value={edu.gpa} onChange={(e) => updateEntry(edu.id, 'gpa', e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth size="small" label="Honors / Awards" placeholder="Magna Cum Laude" value={edu.honors} onChange={(e) => updateEntry(edu.id, 'honors', e.target.value)} />
            </Grid>
          </Grid>
        </EntryCard>
      ))}

      <Button size="small" startIcon={<AddIcon />} onClick={addEntry} variant="outlined" sx={{ mt: 0.5 }}>
        Add Education
      </Button>
    </Box>
  );
}
