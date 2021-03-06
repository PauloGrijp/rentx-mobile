import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';
import ConfirmButton from '../../components/ConfirmButton';
import theme from '../../styles/theme';

export function ShedulingComplete() {
  const { width } = useWindowDimensions()
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor={theme.colors.header}
      />
      <LogoSvg width={width}/>

      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro alugado</Title>
        <Message>
          Agora você só precisa ir {'\n'}
          até concessionária da RENTX {'\n'}
          pegar seu automóvel
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK"/>
      </Footer>
    </Container>
  );
};
