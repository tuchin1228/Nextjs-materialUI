import React from 'react';
import { MyButton } from '../../styles/style.js';
import Button from '@mui/material/Button';


export default function component() {

  return (
    <>
      <MyButton>Styled Components</MyButton>
      <Button  variant="contained">
        123
      </Button>
    </>
  );
}
