import React from 'react';

import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
  color?: string;
}

function Button({ title, color, ...rest}: ButtonProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
