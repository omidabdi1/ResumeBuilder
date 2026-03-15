import { v4 as uuidv4 } from 'uuid';
import { useResume } from '../context/ResumeContext';

export function useResumeSection(section) {
  const { state, dispatch } = useResume();
  const entries = state.resumeData[section] || [];

  function addEntry() {
    dispatch({ type: 'ADD_ENTRY', section });
  }

  function removeEntry(id) {
    dispatch({ type: 'REMOVE_ENTRY', section, payload: id });
  }

  function updateEntry(id, field, value) {
    dispatch({ type: 'UPDATE_ENTRY', section, payload: { id, field, value } });
  }

  function addBullet(entryId) {
    dispatch({ type: 'ADD_BULLET', payload: { section, entryId } });
  }

  function updateBullet(entryId, index, value) {
    dispatch({ type: 'UPDATE_BULLET', payload: { section, entryId, index, value } });
  }

  function removeBullet(entryId, index) {
    dispatch({ type: 'REMOVE_BULLET', payload: { section, entryId, index } });
  }

  return { entries, addEntry, removeEntry, updateEntry, addBullet, updateBullet, removeBullet };
}
