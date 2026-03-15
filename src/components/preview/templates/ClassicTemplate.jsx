import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ContactItem({ icon, text }) {
  if (!text) return null;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.75rem', color: 'text.secondary' }}>
      <Box sx={{ fontSize: '0.9rem', display: 'flex' }}>{icon}</Box>
      <Typography variant="caption">{text}</Typography>
    </Box>
  );
}

function SectionHeader({ title }) {
  return (
    <Box sx={{ mt: 2, mb: 0.75 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.75rem', color: 'primary.main' }}>
        {title}
      </Typography>
      <Divider sx={{ borderColor: 'primary.main', borderWidth: 1.5 }} />
    </Box>
  );
}

function BulletList({ bullets }) {
  const items = bullets?.filter(Boolean);
  if (!items?.length) return null;
  return (
    <Box component="ul" sx={{ m: 0, pl: 2.5, mt: 0.5 }}>
      {items.map((b, i) => (
        <Typography key={i} component="li" variant="body2" sx={{ fontSize: '0.78rem', mb: 0.25, lineHeight: 1.5 }}>
          {b}
        </Typography>
      ))}
    </Box>
  );
}

export default function ClassicTemplate({ data, sectionVisibility }) {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications } = data;

  return (
    <Box sx={{ fontFamily: 'Roboto, Arial, sans-serif', color: '#1a1a1a' }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 1.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.6rem', lineHeight: 1.2 }}>
          {personalInfo.fullName || 'Your Name'}
        </Typography>
        {personalInfo.jobTitle && (
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '0.9rem', mt: 0.25 }}>
            {personalInfo.jobTitle}
          </Typography>
        )}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, mt: 0.75 }}>
          <ContactItem icon={<EmailIcon fontSize="inherit" />} text={personalInfo.email} />
          <ContactItem icon={<PhoneIcon fontSize="inherit" />} text={personalInfo.phone} />
          <ContactItem icon={<LocationOnIcon fontSize="inherit" />} text={personalInfo.location} />
          <ContactItem icon={<LinkIcon fontSize="inherit" />} text={personalInfo.website} />
          <ContactItem icon={<LinkedInIcon fontSize="inherit" />} text={personalInfo.linkedin} />
        </Box>
      </Box>

      {/* Summary */}
      {summary && (
        <>
          <SectionHeader title="Professional Summary" />
          <Typography variant="body2" sx={{ fontSize: '0.78rem', lineHeight: 1.6 }}>
            {summary}
          </Typography>
        </>
      )}

      {/* Work Experience */}
      {workExperience?.length > 0 && (
        <>
          <SectionHeader title="Work Experience" />
          {workExperience.map((job) => (
            <Box key={job.id} sx={{ mb: 1.25 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem' }}>{job.role || 'Role'}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', whiteSpace: 'nowrap', ml: 1 }}>
                  {[job.startDate, job.endDate].filter(Boolean).join(' – ')}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.78rem', fontStyle: 'italic' }}>
                  {job.company}
                </Typography>
                {job.location && (
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {job.location}
                  </Typography>
                )}
              </Box>
              <BulletList bullets={job.bullets} />
            </Box>
          ))}
        </>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <>
          <SectionHeader title="Education" />
          {education.map((edu) => (
            <Box key={edu.id} sx={{ mb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem' }}>{edu.institution}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', ml: 1 }}>
                  {[edu.startDate, edu.endDate].filter(Boolean).join(' – ')}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontSize: '0.78rem' }}>
                {[edu.degree, edu.field].filter(Boolean).join(' in ')}
                {edu.honors && ` · ${edu.honors}`}
                {edu.gpa && ` · GPA: ${edu.gpa}`}
              </Typography>
            </Box>
          ))}
        </>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <>
          <SectionHeader title="Skills" />
          {skills.map((s) => (
            <Box key={s.id} sx={{ display: 'flex', mb: 0.4, fontSize: '0.78rem' }}>
              {s.category && (
                <Typography sx={{ fontWeight: 700, fontSize: '0.78rem', minWidth: 110, mr: 1 }}>
                  {s.category}:
                </Typography>
              )}
              <Typography sx={{ fontSize: '0.78rem' }}>{s.items?.join(', ')}</Typography>
            </Box>
          ))}
        </>
      )}

      {/* Projects */}
      {sectionVisibility?.projects && projects?.length > 0 && (
        <>
          <SectionHeader title="Projects" />
          {projects.map((p) => (
            <Box key={p.id} sx={{ mb: 1.25 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem' }}>{p.name || 'Project'}</Typography>
                {p.url && (
                  <Typography variant="caption" sx={{ color: 'primary.main' }}>
                    {p.url}
                  </Typography>
                )}
              </Box>
              {p.technologies && (
                <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                  {p.technologies}
                </Typography>
              )}
              {p.description && (
                <Typography variant="body2" sx={{ fontSize: '0.78rem', mt: 0.25 }}>{p.description}</Typography>
              )}
              <BulletList bullets={p.bullets} />
            </Box>
          ))}
        </>
      )}

      {/* Certifications */}
      {sectionVisibility?.certifications && certifications?.length > 0 && (
        <>
          <SectionHeader title="Certifications" />
          {certifications.map((c) => (
            <Box key={c.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.85rem' }}>{c.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {c.issuer}{c.credentialId && ` · ID: ${c.credentialId}`}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', whiteSpace: 'nowrap', ml: 1 }}>
                {c.date}
              </Typography>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
}
