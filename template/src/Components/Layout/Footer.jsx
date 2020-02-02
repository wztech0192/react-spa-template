import React from 'react';
import Typography from '@material-ui/core/Typography';

const footerStyle = {
  position: 'absolute',
  bottom: 0,
  textAlign: 'center',
  width: '100%'
};
const Footer = () => {
  return (
    <Typography style={footerStyle} component="h6" variant="caption">
      Im Footer, Edit me
    </Typography>
  );
};

export default Footer;
