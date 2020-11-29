import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';

export const Input = forwardRef((props, ref, children) => {
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        
        {...props}
        {...children}
      />
    </>
  );
});
