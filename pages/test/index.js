import React from 'react';
import styled from '@emotion/styled';
import { MyButton } from '../../styles/style.js';
import Button from '@mui/material/Button';

export default function component() {

  return (
    <>
      <MyButton TextColor="blue">
        Styled Components<span>span</span>
      </MyButton>
      <Button variant="contained">123</Button>
    </>
  );
}
