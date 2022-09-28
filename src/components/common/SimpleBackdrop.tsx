import { CircularProgress, Backdrop } from '@mui/material';

const SimpleBackdrop: React.FC = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default SimpleBackdrop;
