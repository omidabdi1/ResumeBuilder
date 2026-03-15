import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PersonalInfoForm from './PersonalInfoForm';
import SummaryForm from './SummaryForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import CertificationsForm from './CertificationsForm';

export default function FormPanel() {
  return (
    <Box sx={{ p: 2.5 }}>
      <PersonalInfoForm />
      <Divider sx={{ my: 2 }} />
      <SummaryForm />
      <Divider sx={{ my: 2 }} />
      <WorkExperienceForm />
      <Divider sx={{ my: 2 }} />
      <EducationForm />
      <Divider sx={{ my: 2 }} />
      <SkillsForm />
      <Divider sx={{ my: 2 }} />
      <ProjectsForm />
      <Divider sx={{ my: 2 }} />
      <CertificationsForm />
    </Box>
  );
}
