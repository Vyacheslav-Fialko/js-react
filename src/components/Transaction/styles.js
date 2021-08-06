import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({value}) => value < 0 ? 'rgb(253, 191, 191)' : 'rgb(191, 253, 191)'};
  border: 1px solid #d3d3d3;
  border-tadius: 10px;
  padding: 10px;
  margin-bottom:15px;
`;

Wrapper.displayName = 'TransitionWrapper';