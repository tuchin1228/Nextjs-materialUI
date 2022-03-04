import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

// export const MyButton = styled(Button)((props) => ({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   // color: 'red',
//   color:  props.TextColor,
//   height: 48,
//   padding: '0 30px',
//   `&:hover:{

//   }`
// }));

// export const MyButton = styled('button')`
//   background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
//   border: 0;
//   border-radius: 3;
//   box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
//   color: ${props=>props.TextColor};
//   height: 48px;
//   padding: 0 30px;
//   &:hover {
//     color: red;
//   }
// `;

export const MyButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 3;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: ${(props) => props.TextColor};
  height: 48px;
  padding: 0 30px;
  &:hover {
    color: red;
  },
  span{
    color:yellow;
  }
  
`;

export const NavbarStyle = styled(AppBar)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
`;