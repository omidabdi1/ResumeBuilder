import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Typography from '@mui/material/Typography';

export default function BulletListEditor({ bullets = [''], onAdd, onUpdate, onRemove }) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
        Bullet Points
      </Typography>
      {bullets.map((bullet, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 0.75, gap: 0.5 }}>
          <DragIndicatorIcon fontSize="small" sx={{ color: 'text.disabled', flexShrink: 0 }} />
          <TextField
            size="small"
            fullWidth
            multiline
            maxRows={3}
            value={bullet}
            onChange={(e) => onUpdate(index, e.target.value)}
            placeholder={`Bullet point ${index + 1}`}
            inputProps={{ style: { fontSize: '0.8rem' } }}
          />
          <IconButton size="small" onClick={() => onRemove(index)} color="error" disabled={bullets.length === 1}>
            <RemoveCircleOutlineIcon fontSize="small" />
          </IconButton>
        </Box>
      ))}
      <Button size="small" startIcon={<AddIcon />} onClick={onAdd} sx={{ mt: 0.25 }}>
        Add bullet
      </Button>
    </Box>
  );
}
