import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Icon = styled.Image`
    width: 15px;
    height: 15px;
`

export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]};
    `
export const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.space[3]};
`

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `

export const Rating = styled.View`
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
    flex-direction: row;
`

export const Address = styled.Text`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.caption};
`
