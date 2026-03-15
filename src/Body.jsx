import { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppHeader from './components/layout/AppHeader';
import MobileTabBar from './components/layout/MobileTabBar';
import FormPanel from './components/form/FormPanel';
import PreviewPanel from './components/preview/PreviewPanel';

export default function Body() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileTab, setMobileTab] = useState(0);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <AppHeader />

      {isMobile ? (
        <>
          <Box sx={{ flex: 1, overflow: 'hidden', pb: '56px' }}>
            {mobileTab === 0 ? (
              <Box sx={{ height: '100%', overflow: 'auto' }}>
                <FormPanel />
              </Box>
            ) : (
              <Box sx={{ height: '100%', overflow: 'auto', bgcolor: 'background.default' }}>
                <PreviewPanel />
              </Box>
            )}
          </Box>
          <MobileTabBar value={mobileTab} onChange={(_, v) => setMobileTab(v)} />
        </>
      ) : (
        <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <Box
            className="no-print"
            sx={{
              width: '50%',
              borderRight: '1px solid',
              borderColor: 'divider',
              overflow: 'auto',
              bgcolor: 'background.paper',
            }}
          >
            <FormPanel />
          </Box>
          <Box
            sx={{
              width: '50%',
              overflow: 'auto',
              bgcolor: 'background.default',
            }}
          >
            <PreviewPanel />
          </Box>
        </Box>
      )}
    </Box>
  );
}
