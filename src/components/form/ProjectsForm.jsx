import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { useResumeSection } from '../../hooks/useResumeSection';
import SectionWrapper from './shared/SectionWrapper';
import EntryCard from './shared/EntryCard';
import BulletListEditor from './shared/BulletListEditor';

export default function ProjectsForm() {
  const { entries, addEntry, removeEntry, updateEntry, addBullet, updateBullet, removeBullet } = useResumeSection('projects');

  return (
    <SectionWrapper sectionKey="projects" title="Projects">
      {entries.map((p) => (
        <EntryCard key={p.id} title={p.name || 'New Project'} onDelete={() => removeEntry(p.id)}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth size="small" label="Project Name" value={p.name} onChange={(e) => updateEntry(p.id, 'name', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth size="small" label="URL / Link" placeholder="github.com/..." value={p.url} onChange={(e) => updateEntry(p.id, 'url', e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth size="small" label="Technologies" placeholder="React, Node.js, ..." value={p.technologies} onChange={(e) => updateEntry(p.id, 'technologies', e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth size="small" multiline rows={2} label="Description" value={p.description} onChange={(e) => updateEntry(p.id, 'description', e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <BulletListEditor
                bullets={p.bullets}
                onAdd={() => addBullet(p.id)}
                onUpdate={(index, value) => updateBullet(p.id, index, value)}
                onRemove={(index) => removeBullet(p.id, index)}
              />
            </Grid>
          </Grid>
        </EntryCard>
      ))}

      <Button size="small" startIcon={<AddIcon />} onClick={addEntry} variant="outlined" sx={{ mt: 0.5 }}>
        Add Project
      </Button>
    </SectionWrapper>
  );
}
