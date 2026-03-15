import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SectionHeader({ title }) {
  return (
    <Box sx={{ mt: 2, mb: 0.75, borderBottom: '1px solid #ccc', pb: 0.25 }}>
      <Typography sx={{ fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: 1.5, color: '#555' }}>
        {title}
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
        <Typography key={i} component="li" variant="body2" sx={{ fontSize: '0.78rem', mb: 0.25, lineHeight: 1.5, color: '#333' }}>
          {b}
        </Typography>
      ))}
    </Box>
  );
}

export default function MinimalTemplate({ data, sectionVisibility }) {
  const { personalInfo, summary, workExperience, education, skills, projects, certifications } = data;

  const contactParts = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.location,
    personalInfo.website,
    personalInfo.linkedin,
  ].filter(Boolean);

  return (
    <Box sx={{ fontFamily: 'Roboto, Arial, sans-serif', color: '#222' }}>
      {/* Header */}
      <Box sx={{ mb: 1.5 }}>
        <Typography sx={{ fontWeight: 300, fontSize: '1.8rem', letterSpacing: -0.5, lineHeight: 1.1 }}>
          {personalInfo.fullName || 'Your Name'}
        </Typography>
        {personalInfo.jobTitle && (
          <Typography sx={{ fontSize: '0.85rem', color: '#666', mt: 0.25, fontWeight: 400 }}>
            {personalInfo.jobTitle}
          </Typography>
        )}
        {contactParts.length > 0 && (
          <Typography sx={{ fontSize: '0.72rem', color: '#777', mt: 0.75 }}>
            {contactParts.join(' · ')}
          </Typography>
        )}
      </Box>

      {/* Summary */}
      {summary && (
        <>
          <SectionHeader title="Summary" />
          <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.6, color: '#333' }}>{summary}</Typography>
        </>
      )}

      {/* Work Experience */}
      {workExperience?.length > 0 && (
        <>
          <SectionHeader title="Experience" />
          {workExperience.map((job) => (
            <Box key={job.id} sx={{ mb: 1.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '0.82rem' }}>
                  {job.role}{job.company ? `, ${job.company}` : ''}
                </Typography>
                <Typography sx={{ fontSize: '0.72rem', color: '#777', whiteSpace: 'nowrap', ml: 1 }}>
                  {[job.startDate, job.endDate].filter(Boolean).join(' – ')}{job.location ? ` · ${job.location}` : ''}
                </Typography>
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
            <Box key={edu.id} sx={{ mb: 0.75, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: '0.82rem' }}>{edu.institution}</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: '#555' }}>
                  {[edu.degree, edu.field].filter(Boolean).join(' in ')}
                  {edu.honors && ` · ${edu.honors}`}
                  {edu.gpa && ` · GPA: ${edu.gpa}`}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.72rem', color: '#777', whiteSpace: 'nowrap', ml: 1 }}>
                {[edu.startDate, edu.endDate].filter(Boolean).join(' – ')}
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
            <Box key={s.id} sx={{ display: 'flex', mb: 0.4 }}>
              {s.category && (
                <Typography sx={{ fontWeight: 600, fontSize: '0.75rem', minWidth: 100, mr: 1 }}>
                  {s.category}:
                </Typography>
              )}
              <Typography sx={{ fontSize: '0.75rem', color: '#444' }}>{s.items?.join(', ')}</Typography>
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
                <Typography sx={{ fontWeight: 600, fontSize: '0.82rem' }}>
                  {p.name}{p.url ? ` · ${p.url}` : ''}
                </Typography>
                {p.technologies && (
                  <Typography sx={{ fontSize: '0.7rem', color: '#777', ml: 1, whiteSpace: 'nowrap' }}>
                    {p.technologies}
                  </Typography>
                )}
              </Box>
              {p.description && (
                <Typography sx={{ fontSize: '0.75rem', color: '#444', mt: 0.25 }}>{p.description}</Typography>
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
                <Typography sx={{ fontWeight: 600, fontSize: '0.82rem' }}>{c.name}</Typography>
                <Typography sx={{ fontSize: '0.72rem', color: '#777' }}>
                  {c.issuer}{c.credentialId && ` · ${c.credentialId}`}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.72rem', color: '#777', whiteSpace: 'nowrap', ml: 1 }}>{c.date}</Typography>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
}
