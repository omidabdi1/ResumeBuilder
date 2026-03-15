import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function MobileTabBar({ value, onChange }) {
  return (
    <Paper
      elevation={3}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 }}
      className="no-print"
    >
      <Tabs value={value} onChange={onChange} variant="fullWidth" indicatorColor="primary" textColor="primary">
        <Tab icon={<EditIcon />} label="Edit" iconPosition="start" />
        <Tab icon={<VisibilityIcon />} label="Preview" iconPosition="start" />
      </Tabs>
    </Paper>
  );
}
