import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SideSection({ title }) {
  return (
    <Typography
      variant="overline"
      sx={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: 2, mt: 2, mb: 0.5, borderBottom: '1px solid rgba(255,255,255,0.3)', pb: 0.5 }}
    >
      {title}
    </Typography>
  );
}

function MainSection({ title }) {
  return (
    <Box sx={{ mt: 2, mb: 0.75 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.72rem', color: 'primary.main' }}>
        {title}
      </Typography>
      <Box sx={{ height: 2, bgcolor: 'primary.main', mt: 0.25, mb: 0.5 }} />
    </Box>
  );
}

function ContactItem({ icon, text }) {
  if (!text) return null;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.5 }}>
      <Box sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', display: 'flex' }}>{icon}</Box>
      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.7rem', wordBreak: 'break-all' }}>
        {text}
      </Typography>
    </Box>
  );
}

function BulletList({ bullets }) {
  const items = bullets?.filter(Boolean);
  if (!items?.length) return null;
  return (
    <Box component="ul" sx={{ m: 0, pl: 2.5, mt: 0.5 }}>
      {items.map((b, i) => (
        <Typography key={i} component="li" variant="body2" sx={{ fontSize: '0.75rem', mb: 0.25, lineHeight: 1.5 }}>
          {b}
        </Typography>
      ))}
    </Box>
  );
}

export default function ModernTemplate({ data, sectionVisibility }) {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications } = data;

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '35% 65%', minHeight: '100%', fontFamily: 'Roboto, Arial, sans-serif' }}>
      {/* Sidebar */}
      <Box sx={{ bgcolor: 'primary.main', p: 2.5, color: 'white' }}>
        <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.2rem', color: 'white', lineHeight: 1.2 }}>
          {personalInfo.fullName || 'Your Name'}
        </Typography>
        {personalInfo.jobTitle && (
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', mt: 0.5, fontStyle: 'italic' }}>
            {personalInfo.jobTitle}
          </Typography>
        )}

        {/* Contact */}
        <SideSection title="Contact" />
        <ContactItem icon={<EmailIcon fontSize="inherit" />} text={personalInfo.email} />
        <ContactItem icon={<PhoneIcon fontSize="inherit" />} text={personalInfo.phone} />
        <ContactItem icon={<LocationOnIcon fontSize="inherit" />} text={personalInfo.location} />
        <ContactItem icon={<LinkIcon fontSize="inherit" />} text={personalInfo.website} />
        <ContactItem icon={<LinkedInIcon fontSize="inherit" />} text={personalInfo.linkedin} />

        {/* Skills */}
        {skills?.length > 0 && (
          <>
            <SideSection title="Skills" />
            {skills.map((s) => (
              <Box key={s.id} sx={{ mb: 1 }}>
                {s.category && (
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', mb: 0.5 }}>
                    {s.category}
                  </Typography>
                )}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {s.items?.map((item, i) => (
                    <Chip
                      key={i}
                      label={item}
                      size="small"
                      sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.65rem', height: 20, border: '1px solid rgba(255,255,255,0.3)' }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </>
        )}

        {/* Certifications in sidebar */}
        {sectionVisibility?.certifications && certifications?.length > 0 && (
          <>
            <SideSection title="Certifications" />
            {certifications.map((c) => (
              <Box key={c.id} sx={{ mb: 1 }}>
                <Typography sx={{ color: 'white', fontSize: '0.72rem', fontWeight: 600 }}>{c.name}</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.65rem' }}>{c.issuer}</Typography>
                {c.date && <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem' }}>{c.date}</Typography>}
              </Box>
            ))}
          </>
        )}
      </Box>

      {/* Main Content */}
      <Box sx={{ p: 2.5 }}>
        {/* Summary */}
        {summary && (
          <>
            <MainSection title="Professional Summary" />
            <Typography variant="body2" sx={{ fontSize: '0.75rem', lineHeight: 1.6 }}>
              {summary}
            </Typography>
          </>
        )}

        {/* Work Experience */}
        {workExperience?.length > 0 && (
          <>
            <MainSection title="Work Experience" />
            {workExperience.map((job) => (
              <Box key={job.id} sx={{ mb: 1.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.82rem' }}>{job.role}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', whiteSpace: 'nowrap', ml: 1 }}>
                    {[job.startDate, job.endDate].filter(Boolean).join(' – ')}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontStyle: 'italic' }}>
                    {job.company}
                  </Typography>
                  {job.location && (
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{job.location}</Typography>
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
            <MainSection title="Education" />
            {education.map((edu) => (
              <Box key={edu.id} sx={{ mb: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.82rem' }}>{edu.institution}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', ml: 1 }}>
                    {[edu.startDate, edu.endDate].filter(Boolean).join(' – ')}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
                  {[edu.degree, edu.field].filter(Boolean).join(' in ')}
                  {edu.honors && ` · ${edu.honors}`}
                  {edu.gpa && ` · GPA: ${edu.gpa}`}
                </Typography>
              </Box>
            ))}
          </>
        )}

        {/* Projects */}
        {sectionVisibility?.projects && projects?.length > 0 && (
          <>
            <MainSection title="Projects" />
            {projects.map((p) => (
              <Box key={p.id} sx={{ mb: 1.25 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.82rem' }}>{p.name}</Typography>
                  {p.url && <Typography variant="caption" sx={{ color: 'primary.main' }}>{p.url}</Typography>}
                </Box>
                {p.technologies && (
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                    {p.technologies}
                  </Typography>
                )}
                {p.description && (
                  <Typography variant="body2" sx={{ fontSize: '0.75rem', mt: 0.25 }}>{p.description}</Typography>
                )}
                <BulletList bullets={p.bullets} />
              </Box>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
}
