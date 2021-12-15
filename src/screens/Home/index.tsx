import React from 'react'
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Container, Header, TotalCars, HeaderContent } from './styles';


export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

     <Header>
       <HeaderContent>
        <Logo
          width={RFValue(118)}
          height={RFValue(12)}      
        />

        <TotalCars>
          Total de ... carros
        </TotalCars>
       </HeaderContent>
     </Header>

    </Container>
  );
};
