import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { useResumeSection } from '../../hooks/useResumeSection';
import EntryCard from './shared/EntryCard';
import BulletListEditor from './shared/BulletListEditor';

export default function WorkExperienceForm() {
  const { entries, addEntry, removeEntry, updateEntry, addBullet, updateBullet, removeBullet } = useResumeSection('workExperience');

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.main' }}>
        Work Experience
      </Typography>

      {entries.map((job) => (
        <EntryCard
          key={job.id}
          title={job.role && job.company ? `${job.role} at ${job.company}` : job.role || job.company || 'New Position'}
          onDelete={() => removeEntry(job.id)}
        >
          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth size="small" label="Job Title / Role" value={job.role} onChange={(e) => updateEntry(job.id, 'role', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth size="small" label="Company" value={job.company} onChange={(e) => updateEntry(job.id, 'company', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth size="small" label="Start Date" placeholder="Jan 2022" value={job.startDate} onChange={(e) => updateEntry(job.id, 'startDate', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth size="small" label="End Date" placeholder="Present" value={job.endDate} onChange={(e) => updateEntry(job.id, 'endDate', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth size="small" label="Location" value={job.location} onChange={(e) => updateEntry(job.id, 'location', e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <BulletListEditor
                bullets={job.bullets}
                onAdd={() => addBullet(job.id)}
                onUpdate={(index, value) => updateBullet(job.id, index, value)}
                onRemove={(index) => removeBullet(job.id, index)}
              />
            </Grid>
          </Grid>
        </EntryCard>
      ))}

      <Button size="small" startIcon={<AddIcon />} onClick={addEntry} variant="outlined" sx={{ mt: 0.5 }}>
        Add Work Experience
      </Button>
    </Box>
  );
}
