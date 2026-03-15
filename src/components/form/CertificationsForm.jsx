import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { useResumeSection } from '../../hooks/useResumeSection';
import SectionWrapper from './shared/SectionWrapper';
import EntryCard from './shared/EntryCard';

export default function CertificationsForm() {
  const { entries, addEntry, removeEntry, updateEntry } = useResumeSection('certifications');

  return (
    <SectionWrapper sectionKey="certifications" title="Certifications">
      {entries.map((cert) => (
        <EntryCard key={cert.id} title={cert.name || 'New Certification'} onDelete={() => removeEntry(cert.id)}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth size="small" label="Certification Name" value={cert.name} onChange={(e) => updateEntry(cert.id, 'name', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth size="small" label="Issuing Organization" value={cert.issuer} onChange={(e) => updateEntry(cert.id, 'issuer', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth size="small" label="Date" placeholder="Jan 2023" value={cert.date} onChange={(e) => updateEntry(cert.id, 'date', e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField fullWidth size="small" label="Credential ID" placeholder="Optional" value={cert.credentialId} onChange={(e) => updateEntry(cert.id, 'credentialId', e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth size="small" label="Credential URL" placeholder="Optional" value={cert.url} onChange={(e) => updateEntry(cert.id, 'url', e.target.value)} />
            </Grid>
          </Grid>
        </EntryCard>
      ))}

      <Button size="small" startIcon={<AddIcon />} onClick={addEntry} variant="outlined" sx={{ mt: 0.5 }}>
        Add Certification
      </Button>
    </SectionWrapper>
  );
}
