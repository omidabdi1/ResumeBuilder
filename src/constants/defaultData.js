import { v4 as uuidv4 } from 'uuid';

export const TEMPLATE_OPTIONS = [
  { id: 'interactive', label: '✦ Interactive' },
  { id: 'classic', label: 'Classic' },
  { id: 'modern', label: 'Modern' },
  { id: 'minimal', label: 'Minimal' },
];

export const DEFAULT_RESUME_DATA = {
  activeTemplate: 'interactive',
  sectionVisibility: {
    projects: true,
    certifications: true,
  },
  resumeData: {
    personalInfo: {
      fullName: 'Alex Johnson',
      jobTitle: 'Full Stack Software Engineer',
      email: 'alex.johnson@email.com',
      phone: '(555) 123-4567',
      location: 'San Francisco, CA',
      website: 'alexjohnson.dev',
      linkedin: 'linkedin.com/in/alexjohnson',
      github: 'alexjohnson',
      youtube: '',
    },
    summary:
      'Passionate full stack engineer with 5+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud infrastructure. Proven track record of delivering high-quality software and mentoring junior developers.',
    workExperience: [
      {
        id: uuidv4(),
        company: 'TechCorp Inc.',
        role: 'Senior Software Engineer',
        startDate: 'Mar 2021',
        endDate: 'Present',
        location: 'San Francisco, CA',
        bullets: [
          'Led development of a microservices architecture serving 2M+ daily active users',
          'Reduced page load time by 40% through performance optimizations and lazy loading',
          'Mentored team of 4 junior engineers and conducted code reviews',
          'Collaborated with product and design teams to deliver 12 major features',
        ],
      },
      {
        id: uuidv4(),
        company: 'StartupXYZ',
        role: 'Software Engineer',
        startDate: 'Jun 2019',
        endDate: 'Feb 2021',
        location: 'Remote',
        bullets: [
          'Built React-based dashboard used by 500+ enterprise clients',
          'Developed RESTful APIs with Node.js and PostgreSQL',
          'Implemented CI/CD pipeline reducing deployment time by 60%',
        ],
      },
    ],
    education: [
      {
        id: uuidv4(),
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        startDate: '2015',
        endDate: '2019',
        gpa: '3.8',
        honors: 'Magna Cum Laude',
      },
    ],
    skills: [
      {
        id: uuidv4(),
        category: 'Languages',
        items: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
      },
      {
        id: uuidv4(),
        category: 'Frameworks & Libraries',
        items: ['React', 'Node.js', 'Express', 'Next.js', 'GraphQL'],
      },
      {
        id: uuidv4(),
        category: 'Tools & Platforms',
        items: ['AWS', 'Docker', 'Kubernetes', 'Git', 'PostgreSQL', 'Redis'],
      },
    ],
    featuredSkills: [
      { id: uuidv4(), name: 'JavaScript', level: 92 },
      { id: uuidv4(), name: 'React', level: 90 },
      { id: uuidv4(), name: 'Node.js', level: 85 },
      { id: uuidv4(), name: 'TypeScript', level: 80 },
      { id: uuidv4(), name: 'Python', level: 72 },
      { id: uuidv4(), name: 'AWS', level: 68 },
    ],
    projects: [
      {
        id: uuidv4(),
        name: 'OpenTask',
        url: 'github.com/alexj/opentask',
        description: 'An open-source project management tool built with React and Node.js.',
        bullets: [
          'Gained 2,000+ GitHub stars within first month of release',
          'Implemented real-time collaboration using WebSockets',
        ],
        technologies: 'React, Node.js, Socket.io, MongoDB',
      },
      {
        id: uuidv4(),
        name: 'CloudDash',
        url: 'github.com/alexj/clouddash',
        description: 'Unified AWS resource monitoring dashboard with cost analytics.',
        bullets: [
          'Reduced cloud spend visibility gap by 70% for mid-size teams',
          'Supports 15+ AWS services with real-time metrics',
        ],
        technologies: 'Next.js, AWS SDK, Recharts, PostgreSQL',
      },
    ],
    certifications: [
      {
        id: uuidv4(),
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: 'Jan 2023',
        credentialId: 'AWS-SA-12345',
        url: '',
      },
    ],
  },
};
