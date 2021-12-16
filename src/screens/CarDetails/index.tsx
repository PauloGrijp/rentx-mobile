import React from 'react';
import { StatusBar } from 'react-native';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

const dataImages = [
  'https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png',
]

export function CarDetails() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <BackButton onPress={() => {}}/>
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={dataImages}/>
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580,00</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380Kmh" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 hp" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Accessories>
        
        <About>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Provident, ipsam eveniet.Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Provident, ipsam eveniet.
        </About>

         <About>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Provident, ipsam eveniet.Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Provident, ipsam eveniet.
        </About>
        <About>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Provident, ipsam eveniet.Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Provident, ipsam eveniet.
        </About>
        <About>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Provident, ipsam eveniet.Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Provident, ipsam eveniet.
        </About>
      </Content>
        <Footer>
          <Button title="Continuar"/>
        </Footer>
    </Container>
  );
};
