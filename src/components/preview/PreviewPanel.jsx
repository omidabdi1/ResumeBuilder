import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useResume } from '../../context/ResumeContext';
import TemplateSelector from './TemplateSelector';
import ClassicTemplate from './templates/ClassicTemplate';
import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import InteractiveTemplate from './templates/InteractiveTemplate';

const TEMPLATES = {
  interactive: InteractiveTemplate,
  classic: ClassicTemplate,
  modern: ModernTemplate,
  minimal: MinimalTemplate,
};

export default function PreviewPanel() {
  const { state } = useResume();
  const { activeTemplate, resumeData, sectionVisibility } = state;

  const ActiveTemplate = TEMPLATES[activeTemplate] || ClassicTemplate;
  const isInteractive = activeTemplate === 'interactive';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TemplateSelector />
      <Box sx={{ flex: 1, overflow: 'auto', p: isInteractive ? 0 : 2, bgcolor: isInteractive ? 'background.default' : undefined }}>
        {isInteractive ? (
          <ActiveTemplate data={resumeData} sectionVisibility={sectionVisibility} />
        ) : (
          <Paper
            id="resume-preview"
            elevation={3}
            sx={{
              width: '210mm',
              minHeight: '297mm',
              maxWidth: '100%',
              margin: '0 auto',
              p: '0.5in',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            <ActiveTemplate data={resumeData} sectionVisibility={sectionVisibility} />
          </Paper>
        )}
      </Box>
    </Box>
  );
}
