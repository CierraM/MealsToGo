import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import star from "../../../../assets/star";
import open from '../../../../assets/open';
import { Spacer } from '../../../components/utilities/spacer.component';
import { Icon, RestaurantCard, RestaurantCardCover, Info, Rating, Address } from './restaurant-info-card.styles';
import { Text } from '../../../components/typography/text.component';


export const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = 'Some restaurant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://loremflickr.com/320/240?random=1", "https://loremflickr.com/320/240?random=2", "https://loremflickr.com/320/240?random=3"],
        address = '100 random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false
    } = restaurant;
    const ratingArray = Array.from(new Array(Math.round(rating)))
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }}></RestaurantCardCover>
            <Info>
                <View style={{ flex: 1 }}>
                    <Text variant="label">{name}</Text>
                    {isClosedTemporarily &&
                        <Text variant="error">Closed Temporarily</Text>
                    }
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <Address>{address}</Address>
                </View>

                {isOpenNow && <SvgXml xml={open} width={40} height={40} />}
                <Spacer position="left" size="large">
                    <Icon source={{ uri: icon }} />
                </Spacer>
            </Info>
        </RestaurantCard>
    )
}

