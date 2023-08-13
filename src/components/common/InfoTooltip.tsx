import React, { useRef, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface InfoTooltipProps {
  content: string;
  format: boolean;
}

const StyledIconButton = styled(IconButton)(() => ({
  bottom: '10px',
  right: '3px',
}));

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ content, format }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const iconRef = useRef<HTMLButtonElement>(null);
  const [x, setX] = useState<number | undefined>();
  const [y, setY] = useState<number | undefined>();

  const getPosition = () => {
    const x = iconRef.current?.offsetLeft;
    setX(x);
    const y = iconRef.current?.offsetTop;
    setY(y);
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', getPosition);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <StyledIconButton ref={iconRef} onClick={handleOpen}>
        <InfoIcon />
      </StyledIconButton>
      <Dialog
        PaperProps={{
          style: {
            position: 'absolute',
            top: y + 'px',
            left: x + 'px',
            maxHeight: '70vh',
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          {format ? (
            <ReactMarkdown linkTarget={'_blank'} remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          ) : (
            <p>{content}</p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InfoTooltip;
