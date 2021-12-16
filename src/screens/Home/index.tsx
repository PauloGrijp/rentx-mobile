import React from 'react'
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';

const data = {
  brand: 'audi',
  name: 'RS 5 Coupé',
  rent: {
    period: 'ao dia',
    price: 120
  },
  thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png',
}

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

      <CarList
        data={[1,2,3, 4, 5, 6]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={data}/>}
      />
    </Container>
  );
};
