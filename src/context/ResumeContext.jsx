import { createContext, useContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_RESUME_DATA } from '../constants/defaultData';

const ResumeContext = createContext(null);

const STORAGE_KEY = 'resumeBuilderState';

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    // ignore
  }
  return null;
}

function saveToStorage(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

function getBlankEntry(section) {
  const base = { id: uuidv4() };
  switch (section) {
    case 'workExperience':
      return { ...base, company: '', role: '', startDate: '', endDate: '', location: '', bullets: [''] };
    case 'education':
      return { ...base, institution: '', degree: '', field: '', startDate: '', endDate: '', gpa: '', honors: '' };
    case 'projects':
      return { ...base, name: '', url: '', description: '', bullets: [''], technologies: '' };
    case 'certifications':
      return { ...base, name: '', issuer: '', date: '', credentialId: '', url: '' };
    case 'skills':
      return { ...base, category: '', items: [] };
    default:
      return base;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TEMPLATE':
      return { ...state, activeTemplate: action.payload };

    case 'TOGGLE_SECTION':
      return {
        ...state,
        sectionVisibility: {
          ...state.sectionVisibility,
          [action.payload]: !state.sectionVisibility[action.payload],
        },
      };

    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          personalInfo: { ...state.resumeData.personalInfo, ...action.payload },
        },
      };

    case 'UPDATE_SUMMARY':
      return {
        ...state,
        resumeData: { ...state.resumeData, summary: action.payload },
      };

    case 'ADD_ENTRY': {
      const section = action.section;
      const newEntry = action.payload || getBlankEntry(section);
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          [section]: [...state.resumeData[section], newEntry],
        },
      };
    }

    case 'REMOVE_ENTRY': {
      const section = action.section;
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          [section]: state.resumeData[section].filter((e) => e.id !== action.payload),
        },
      };
    }

    case 'UPDATE_ENTRY': {
      const section = action.section;
      const { id, field, value } = action.payload;
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          [section]: state.resumeData[section].map((e) =>
            e.id === id ? { ...e, [field]: value } : e
          ),
        },
      };
    }

    case 'ADD_BULLET': {
      const { section, entryId } = action.payload;
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          [section]: state.resumeData[section].map((e) =>
            e.id === entryId ? { ...e, bullets: [...e.bullets, ''] } : e
          ),
        },
      };
    }

    case 'UPDATE_BULLET': {
      const { section, entryId, index, value } = action.payload;
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          [section]: state.resumeData[section].map((e) => {
            if (e.id !== entryId) return e;
            const bullets = [...e.bullets];
            bullets[index] = value;
            return { ...e, bullets };
          }),
        },
      };
    }

    case 'REMOVE_BULLET': {
      const { section, entryId, index } = action.payload;
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          [section]: state.resumeData[section].map((e) => {
            if (e.id !== entryId) return e;
            const bullets = e.bullets.filter((_, i) => i !== index);
            return { ...e, bullets: bullets.length ? bullets : [''] };
          }),
        },
      };
    }

    case 'RESET':
      return DEFAULT_RESUME_DATA;

    default:
      return state;
  }
}

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, () => {
    return loadFromStorage() || DEFAULT_RESUME_DATA;
  });

  useEffect(() => {
    saveToStorage(state);
  }, [state]);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error('useResume must be used within ResumeProvider');
  return ctx;
}
