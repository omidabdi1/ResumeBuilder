import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';

export default function EntryCard({ title, onDelete, children, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <Card variant="outlined" sx={{ mb: 1.5 }}>
      <CardHeader
        title={title || 'New Entry'}
        titleTypographyProps={{ variant: 'body2', fontWeight: 600, noWrap: true }}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="small" onClick={() => setExpanded((e) => !e)}>
              <ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
            </IconButton>
            <IconButton size="small" onClick={onDelete} color="error">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        }
        sx={{ py: 1, '& .MuiCardHeader-content': { overflow: 'hidden' } }}
      />
      <Collapse in={expanded}>
        <CardContent sx={{ pt: 0, '&:last-child': { pb: 1.5 } }}>
          {children}
        </CardContent>
      </Collapse>
    </Card>
  );
}
