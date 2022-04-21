
import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfo } from '../components/restaurant-info.component';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    `

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.secondary};
    `

export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder='Search' />
            </SearchContainer>
            <RestaurantListContainer >
                <RestaurantInfo />
            </RestaurantListContainer>
        </SafeArea>
    )
}
