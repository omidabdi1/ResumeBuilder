import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BarChartIcon from '@mui/icons-material/BarChart';
import CodeIcon from '@mui/icons-material/Code';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RTooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

// ── utils ──────────────────────────────────────────────────────────────────────

function getYouTubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
  return m ? m[1] : null;
}

function ensureHttps(url) {
  if (!url) return '#';
  return url.startsWith('http') ? url : `https://${url}`;
}

// ── Section Header ─────────────────────────────────────────────────────────────

function SectionHeader({ icon, title }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
      <Box sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}>{icon}</Box>
      <Typography variant="h6" fontWeight={700} sx={{ whiteSpace: 'nowrap', letterSpacing: '-0.3px' }}>
        {title}
      </Typography>
      <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider', ml: 0.5 }} />
    </Box>
  );
}

// ── Contact Link ───────────────────────────────────────────────────────────────

function ContactLink({ href, icon, label }) {
  return (
    <Tooltip title={label} placement="top">
      <Box
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          color: 'text.secondary',
          textDecoration: 'none',
          fontSize: '0.8rem',
          '&:hover': { color: 'primary.main' },
          transition: 'color 0.2s',
        }}
      >
        {icon}
        <span>{label}</span>
      </Box>
    </Tooltip>
  );
}

// ── YouTube Player ─────────────────────────────────────────────────────────────

function YouTubeEmbed({ videoId }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        aspectRatio: '16/9',
        cursor: playing ? 'default' : 'pointer',
        boxShadow: 4,
        '&:hover .play-overlay': { opacity: playing ? 0 : 1 },
      }}
      onClick={() => !playing && setPlaying(true)}
    >
      {playing ? (
        <iframe
          src={embedUrl}
          title="Intro video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        />
      ) : (
        <>
          <Box
            component="img"
            src={thumbnail}
            alt="Video thumbnail"
            sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <Box
            className="play-overlay"
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              bgcolor: 'rgba(0,0,0,0.35)',
              opacity: 0.9,
              transition: 'opacity 0.2s',
            }}
          >
            <PlayCircleIcon sx={{ fontSize: 64, color: 'white', filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.6))' }} />
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, letterSpacing: 0.5 }}>
              Watch intro
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}

// ── Experience Card ────────────────────────────────────────────────────────────

function ExperienceCard({ entry }) {
  const [open, setOpen] = useState(false);
  const bullets = entry.bullets.filter((b) => b.trim());

  return (
    <Paper
      variant="outlined"
      sx={{
        mb: 1.5,
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'box-shadow 0.2s, border-color 0.2s',
        '&:hover': { boxShadow: 2, borderColor: 'primary.light' },
      }}
    >
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          cursor: 'pointer',
          '&:hover': { bgcolor: 'action.hover' },
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 1.5,
            bgcolor: open ? 'primary.main' : 'primary.50',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background-color 0.2s',
          }}
        >
          <WorkIcon sx={{ fontSize: 18, color: open ? 'white' : 'primary.main' }} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="subtitle2" fontWeight={700} noWrap>
            {entry.role}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {entry.company}
            {entry.location ? ` · ${entry.location}` : ''}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
          <Chip
            label={`${entry.startDate}${entry.endDate ? ` – ${entry.endDate}` : ''}`}
            size="small"
            sx={{ fontSize: '0.7rem', height: 22 }}
          />
          <IconButton size="small" sx={{ p: 0.25 }}>
            {open ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
          </IconButton>
        </Box>
      </Box>
      <Collapse in={open}>
        <Divider />
        <Box sx={{ p: 2, pt: 1.5, bgcolor: 'grey.50' }}>
          {bullets.map((b, i) => (
            <Box key={i} sx={{ display: 'flex', gap: 1, mb: 0.75 }}>
              <Typography sx={{ color: 'primary.main', lineHeight: 1.7, flexShrink: 0, fontWeight: 700 }}>
                ›
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                {b}
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Paper>
  );
}

// ── Project Card ───────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  const techs = project.technologies
    ? project.technologies.split(',').map((t) => t.trim()).filter(Boolean)
    : [];
  const bullets = project.bullets.filter((b) => b.trim());

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        transition: 'box-shadow 0.2s, border-color 0.2s',
        '&:hover': { boxShadow: 3, borderColor: 'primary.light' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1 }}>
        <Typography variant="subtitle2" fontWeight={700}>
          {project.name}
        </Typography>
        {project.url && (
          <Tooltip title="Open project">
            <IconButton
              size="small"
              component="a"
              href={ensureHttps(project.url)}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 0.25, color: 'primary.main', flexShrink: 0 }}
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {project.description && (
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {project.description}
        </Typography>
      )}

      {bullets.length > 0 && (
        <Box>
          {bullets.map((b, i) => (
            <Box key={i} sx={{ display: 'flex', gap: 0.75, mb: 0.4 }}>
              <Typography sx={{ color: 'primary.main', fontSize: '0.75rem', lineHeight: 1.7, flexShrink: 0, fontWeight: 700 }}>
                ›
              </Typography>
              <Typography variant="caption" sx={{ lineHeight: 1.7 }}>
                {b}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {techs.length > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto', pt: 0.5 }}>
          {techs.map((t) => (
            <Chip key={t} label={t} size="small" sx={{ fontSize: '0.68rem', height: 20, bgcolor: 'primary.50', color: 'primary.dark', border: 'none' }} />
          ))}
        </Box>
      )}
    </Paper>
  );
}

// ── Skills Chart ───────────────────────────────────────────────────────────────

const SKILL_COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#7c3aed', '#a78bfa', '#818cf8'];

function SkillsChart({ featuredSkills }) {
  if (!featuredSkills?.length) return null;
  const data = featuredSkills.map((s) => ({ name: s.name, level: s.level }));
  const chartHeight = Math.max(data.length * 44 + 20, 120);

  return (
    <Box sx={{ mb: 2.5 }}>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart layout="vertical" data={data} margin={{ top: 0, right: 24, left: 0, bottom: 0 }}>
          <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fontWeight: 500 }} width={100} />
          <RTooltip formatter={(v) => [`${v}%`, 'Proficiency']} />
          <Bar dataKey="level" radius={[0, 6, 6, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={SKILL_COLORS[i % SKILL_COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

// ── GitHub Activity ────────────────────────────────────────────────────────────

function GitHubActivity({ username }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box
        component="a"
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: 'block', '&:hover': { opacity: 0.85 }, transition: 'opacity 0.2s' }}
      >
        <Box
          component="img"
          src={`https://ghchart.rainierio.com/${username}`}
          alt={`${username}'s GitHub contributions`}
          sx={{ width: '100%', height: 'auto', borderRadius: 1.5, border: '1px solid', borderColor: 'divider' }}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Box
          component="img"
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&count_private=true`}
          alt="GitHub stats"
          sx={{ maxWidth: 380, width: '100%', height: 'auto', borderRadius: 1 }}
        />
        <Box
          component="img"
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true`}
          alt="Top languages"
          sx={{ maxWidth: 280, width: '100%', height: 'auto', borderRadius: 1 }}
        />
      </Box>
    </Box>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function InteractiveTemplate({ data, sectionVisibility }) {
  const {
    personalInfo,
    summary,
    workExperience,
    education,
    skills,
    projects,
    certifications,
    featuredSkills,
  } = data;

  const videoId = getYouTubeId(personalInfo.youtube);
  const github = personalInfo.github?.trim();

  return (
    <Box sx={{ maxWidth: 860, mx: 'auto', p: { xs: 2, sm: 3 }, pb: 6 }}>

      {/* ── HERO ── */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: videoId ? { xs: '1fr', sm: '1fr 1.7fr' } : '1fr',
          gap: 3,
          mb: 4,
          p: { xs: 2.5, sm: 3 },
          borderRadius: 3,
          background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        {videoId && <YouTubeEmbed videoId={videoId} />}

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1.5 }}>
          <Box>
            <Typography variant="h4" fontWeight={800} sx={{ lineHeight: 1.1, letterSpacing: '-0.5px' }}>
              {personalInfo.fullName}
            </Typography>
            <Typography variant="h6" color="primary.main" fontWeight={500} sx={{ mt: 0.5 }}>
              {personalInfo.jobTitle}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {personalInfo.email && (
              <ContactLink
                href={`mailto:${personalInfo.email}`}
                icon={<EmailIcon sx={{ fontSize: 15 }} />}
                label={personalInfo.email}
              />
            )}
            {personalInfo.phone && (
              <ContactLink
                href={`tel:${personalInfo.phone}`}
                icon={<PhoneIcon sx={{ fontSize: 15 }} />}
                label={personalInfo.phone}
              />
            )}
            {personalInfo.location && (
              <ContactLink
                href={`https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`}
                icon={<LocationOnIcon sx={{ fontSize: 15 }} />}
                label={personalInfo.location}
              />
            )}
            {personalInfo.linkedin && (
              <ContactLink
                href={ensureHttps(personalInfo.linkedin)}
                icon={<LinkedInIcon sx={{ fontSize: 15 }} />}
                label="LinkedIn"
              />
            )}
            {github && (
              <ContactLink
                href={`https://github.com/${github}`}
                icon={<GitHubIcon sx={{ fontSize: 15 }} />}
                label={github}
              />
            )}
            {personalInfo.website && (
              <ContactLink
                href={ensureHttps(personalInfo.website)}
                icon={<LanguageIcon sx={{ fontSize: 15 }} />}
                label={personalInfo.website}
              />
            )}
          </Box>
        </Box>
      </Box>

      {/* ── SUMMARY ── */}
      {summary && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" sx={{ lineHeight: 1.85, color: 'text.secondary' }}>
            {summary}
          </Typography>
        </Box>
      )}

      {/* ── EXPERIENCE ── */}
      {workExperience?.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <SectionHeader icon={<WorkIcon />} title="Experience" />
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1.5, ml: 0.5 }}>
            Click any role to expand details
          </Typography>
          {workExperience.map((entry) => (
            <ExperienceCard key={entry.id} entry={entry} />
          ))}
        </Box>
      )}

      {/* ── SKILLS ── */}
      {(featuredSkills?.length > 0 || skills?.length > 0) && (
        <Box sx={{ mb: 4 }}>
          <SectionHeader icon={<BarChartIcon />} title="Skills" />
          {featuredSkills?.length > 0 && <SkillsChart featuredSkills={featuredSkills} />}
          {skills?.length > 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {skills.map((group) => (
                <Box key={group.id} sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, alignItems: 'center' }}>
                  <Typography
                    variant="caption"
                    fontWeight={700}
                    color="text.secondary"
                    sx={{ mr: 0.5, minWidth: 100, flexShrink: 0 }}
                  >
                    {group.category}:
                  </Typography>
                  {group.items.map((item, i) => (
                    <Chip key={i} label={item} size="small" sx={{ fontSize: '0.72rem', height: 22 }} />
                  ))}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      )}

      {/* ── PROJECTS ── */}
      {sectionVisibility?.projects !== false && projects?.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <SectionHeader icon={<CodeIcon />} title="Projects" />
          <Grid container spacing={2}>
            {projects.map((p) => (
              <Grid item key={p.id} xs={12} sm={6}>
                <ProjectCard project={p} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* ── GITHUB ACTIVITY ── */}
      {github && (
        <Box sx={{ mb: 4 }}>
          <SectionHeader icon={<GitHubIcon />} title="GitHub Activity" />
          <GitHubActivity username={github} />
        </Box>
      )}

      {/* ── EDUCATION ── */}
      {education?.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <SectionHeader icon={<SchoolIcon />} title="Education" />
          {education.map((edu) => (
            <Paper
              key={edu.id}
              variant="outlined"
              sx={{
                p: 2,
                mb: 1.5,
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: 1,
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: 1 },
              }}
            >
              <Box>
                <Typography variant="subtitle2" fontWeight={700}>
                  {edu.degree} in {edu.field}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.institution}
                </Typography>
                {(edu.gpa || edu.honors) && (
                  <Typography variant="caption" color="text.secondary">
                    {edu.gpa ? `GPA: ${edu.gpa}` : ''}
                    {edu.gpa && edu.honors ? ' · ' : ''}
                    {edu.honors}
                  </Typography>
                )}
              </Box>
              <Chip
                label={`${edu.startDate} – ${edu.endDate}`}
                size="small"
                variant="outlined"
                sx={{ fontSize: '0.7rem', height: 22, flexShrink: 0 }}
              />
            </Paper>
          ))}
        </Box>
      )}

      {/* ── CERTIFICATIONS ── */}
      {sectionVisibility?.certifications !== false && certifications?.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <SectionHeader icon={<EmojiEventsIcon />} title="Certifications" />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {certifications.map((cert) => (
              <Paper
                key={cert.id}
                variant="outlined"
                sx={{
                  p: 2,
                  borderRadius: 2,
                  minWidth: 200,
                  flex: '1 1 200px',
                  transition: 'box-shadow 0.2s',
                  '&:hover': { boxShadow: 2 },
                }}
              >
                <Typography variant="subtitle2" fontWeight={600} sx={{ fontSize: '0.82rem' }}>
                  {cert.name}
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.25 }}>
                  {cert.issuer}
                  {cert.date ? ` · ${cert.date}` : ''}
                </Typography>
                {cert.url && (
                  <Box
                    component="a"
                    href={ensureHttps(cert.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.25,
                      mt: 0.75,
                      color: 'primary.main',
                      textDecoration: 'none',
                      fontSize: '0.72rem',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    View credential <OpenInNewIcon sx={{ fontSize: 12 }} />
                  </Box>
                )}
              </Paper>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
