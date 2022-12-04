import React from 'react';
import { FaultModelTable } from '@gns-science/toshi-nest';
import { Box, Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(() => ({
  margin: '0 0 0 10px',
}));

const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

interface FaultModelTableContainerProps {
  data: string;
  id: string;
}

export const FaultModelTableContainer: React.FC<FaultModelTableContainerProps> = (props: FaultModelTableContainerProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box id="table" sx={{ width: '100%', justifyContent: 'center' }}>
      <Accordion expanded={expanded}>
        <AccordionSummary>
          <ButtonContainer>
            <StyledButton variant="contained" onClick={handleClick}>
              {expanded ? 'Hide' : 'Show'} Fault Model Table
            </StyledButton>
          </ButtonContainer>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%' }}>
            <FaultModelTable data={props.data} id={props.id} />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
