import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import { useResumeSection } from '../../hooks/useResumeSection';

export default function SkillsForm() {
  const { entries, addEntry, removeEntry, updateEntry } = useResumeSection('skills');

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.main' }}>
        Skills
      </Typography>

      {entries.map((skill) => (
        <Box key={skill.id} sx={{ display: 'flex', gap: 1, mb: 1.5, alignItems: 'flex-start' }}>
          <Grid container spacing={1} sx={{ flex: 1 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                size="small"
                label="Category"
                placeholder="e.g. Languages"
                value={skill.category}
                onChange={(e) => updateEntry(skill.id, 'category', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Autocomplete
                multiple
                freeSolo
                size="small"
                options={[]}
                value={skill.items}
                onChange={(_, newValue) => updateEntry(skill.id, 'items', newValue)}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip variant="outlined" label={option} size="small" {...getTagProps({ index })} />
                  ))
                }
                renderInput={(params) => (
                  <TextField {...params} label="Skills" placeholder="Type and press Enter" />
                )}
              />
            </Grid>
          </Grid>
          <IconButton size="small" color="error" onClick={() => removeEntry(skill.id)} sx={{ mt: 0.5 }}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      ))}

      <Button size="small" startIcon={<AddIcon />} onClick={addEntry} variant="outlined" sx={{ mt: 0.5 }}>
        Add Skill Category
      </Button>
    </Box>
  );
}
