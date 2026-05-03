import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const InfoAccordion = ({ 
  accordionData, 
  defaultExpandedIndex = 0,
  title = null,
  showTitle = true 
}) => {
  return (
    <Box sx={{ mx: 'auto', my: 4 }}>
      {showTitle && title && (
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          {title}
        </Typography>
      )}
      
      {accordionData.map((item, index) => (
        <Accordion 
          key={index} 
          defaultExpanded={index === defaultExpandedIndex}
          sx={{
            '&:before': {
              display: 'none', // Remove the default line
            },
            boxShadow: 'none',
            border: '1px solid #e0e0e0',
            borderRadius: '8px !important',
            mb: 2,
            '&.Mui-expanded': {
              margin: '0 0 16px 0',
            }
          }}
        >
          <AccordionSummary 
            expandIcon={
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
                borderRadius: '50%',
                color: 'black',
                '& .MuiSvgIcon-root': {
                  fontSize: '1rem',
                }
              }}>
                <AddIcon sx={{ 
                  fontSize: '1rem',
                  transition: 'transform 0.2s',
                  '&.Mui-expanded': {
                    transform: 'rotate(45deg)',
                  }
                }} />
              </Box>
            }
            sx={{
              '& .MuiAccordionSummary-expandIconWrapper': {
                transform: 'rotate(0deg)',
              },
              '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                transform: 'rotate(45deg)',
              },
              minHeight: 56,
              '&.Mui-expanded': {
                minHeight: 56,
              }
            }}
          >
            <Typography variant="h5" component="h5" sx={{ fontWeight: 500 }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 1, pb: 3 }}>
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default InfoAccordion;