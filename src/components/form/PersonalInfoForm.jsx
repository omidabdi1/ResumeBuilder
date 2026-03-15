import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useResume } from '../../context/ResumeContext';

export default function PersonalInfoForm() {
  const { state, dispatch } = useResume();
  const info = state.resumeData.personalInfo;

  function handleChange(field) {
    return (e) => dispatch({ type: 'UPDATE_PERSONAL_INFO', payload: { [field]: e.target.value } });
  }

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.main' }}>
        Personal Information
      </Typography>
      <Grid container spacing={1.5}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" label="Full Name" value={info.fullName} onChange={handleChange('fullName')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" label="Job Title" value={info.jobTitle} onChange={handleChange('jobTitle')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" label="Email" type="email" value={info.email} onChange={handleChange('email')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" label="Phone" value={info.phone} onChange={handleChange('phone')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" label="Location" placeholder="City, State" value={info.location} onChange={handleChange('location')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" label="Website" placeholder="yoursite.com" value={info.website} onChange={handleChange('website')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" label="LinkedIn" placeholder="linkedin.com/in/yourprofile" value={info.linkedin} onChange={handleChange('linkedin')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" label="GitHub Username" placeholder="yourusername" value={info.github || ''} onChange={handleChange('github')} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            label="Intro Video (YouTube URL)"
            placeholder="https://youtube.com/watch?v=..."
            value={info.youtube || ''}
            onChange={handleChange('youtube')}
            helperText="Shown in Interactive template hero section"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
