
import React from 'react';
import styled from 'styled-components/native';
import {  FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfo } from '../components/restaurant-info.component';
import { SafeArea } from '../../../components/utilities/safe-area.component';




const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    `
const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``



export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder='Search' />
            </SearchContainer>
            <RestaurantList
                data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8}, {name: 9}, {name: 10}]}
                renderItem={() => <RestaurantInfo />}
                keyExtractor={(item) => item.name}
            >

            </RestaurantList>
        </SafeArea>
    )
}

