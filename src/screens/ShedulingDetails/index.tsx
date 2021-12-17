import React from 'react';
import { Feather } from '@expo/vector-icons';

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetail,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import Button from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';


const dataImages = [
  'https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png',
]

export function ShedulingDetails() {
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/12/21</DateValue>
          </DateInfo>

          <Feather
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>25/12/21</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetail>
            <RentalPriceQuota>R$ 580,00 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1.740,000</RentalPriceTotal>
          </RentalPriceDetail>
        </RentalPrice>
      </Content>

        <Footer>
          <Button title="Alugar agora" color={theme.colors.success}/>
        </Footer>
    </Container>
  );
};
