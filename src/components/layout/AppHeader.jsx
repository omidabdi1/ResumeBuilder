import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PrintIcon from '@mui/icons-material/Print';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import { useResume } from '../../context/ResumeContext';

export default function AppHeader() {
  const { dispatch } = useResume();

  function handlePrint() {
    window.print();
  }

  function handleReset() {
    if (window.confirm('Reset all data to sample resume? This cannot be undone.')) {
      dispatch({ type: 'RESET' });
    }
  }

  return (
    <AppBar position="static" elevation={1} className="no-print">
      <Toolbar>
        <DescriptionIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Resume Builder
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton color="inherit" onClick={handleReset} title="Reset to sample data" size="small">
            <RestartAltIcon />
          </IconButton>
          <Button
            color="inherit"
            variant="outlined"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{ borderColor: 'rgba(255,255,255,0.5)', '&:hover': { borderColor: 'white' } }}
          >
            Export PDF
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
