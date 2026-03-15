import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useResumeSection } from '../../hooks/useResumeSection';

export default function FeaturedSkillsForm() {
  const { entries, addEntry, removeEntry, updateEntry } = useResumeSection('featuredSkills');

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5, color: 'primary.main' }}>
        Featured Skills
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ mb: 1.5, display: 'block' }}>
        Shown as a proficiency chart in the Interactive template
      </Typography>

      {entries.map((entry) => (
        <Box key={entry.id} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
          <TextField
            size="small"
            label="Skill"
            value={entry.name}
            onChange={(e) => updateEntry(entry.id, 'name', e.target.value)}
            sx={{ width: 150, flexShrink: 0 }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="caption" color="text.secondary">
              {entry.level}%
            </Typography>
            <Slider
              value={entry.level}
              onChange={(_, val) => updateEntry(entry.id, 'level', val)}
              min={0}
              max={100}
              size="small"
              sx={{ display: 'block', mt: 0.25 }}
            />
          </Box>
          <IconButton size="small" onClick={() => removeEntry(entry.id)} color="error">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      ))}

      <Button size="small" startIcon={<AddIcon />} onClick={addEntry} variant="outlined" sx={{ mt: 0.5 }}>
        Add Skill
      </Button>
    </Box>
  );
}
