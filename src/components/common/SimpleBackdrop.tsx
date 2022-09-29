import { CircularProgress, Backdrop } from '@mui/material';

const SimpleBackdrop: React.FC = () => {
  return (
    <Backdrop open={true} sx={{ zIndex: 140000 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default SimpleBackdrop;
