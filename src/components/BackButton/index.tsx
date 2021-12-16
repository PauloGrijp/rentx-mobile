import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';


import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container } from './styles';
import theme from '../../styles/theme';

interface Props extends BorderlessButtonProps{
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};
