import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { FeaturesType } from './types/features';
import { SpecialPromoType } from './types/specialPromo';

import { icons, images } from '../utils';

function useHome() {

    const theme = useTheme();

    const featuresData = [
        {
            id: 1,
            icon: icons.reload,
            color: theme.colors.purple,
            backgroundColor: theme.colors.lightpurple,
            description: "Top Up"
        },
        {
            id: 2,
            icon: icons.send,
            color: theme.colors.yellow,
            backgroundColor: theme.colors.lightyellow,
            description: "Transfer"
        },
        {
            id: 3,
            icon: icons.internet,
            color: theme.colors.primary,
            backgroundColor: theme.colors.lightGreen,
            description: "Internet"
        },
        {
            id: 4,
            icon: icons.wallet,
            color: theme.colors.red,
            backgroundColor: theme.colors.lightRed,
            description: "Wallet"
        },
        {
            id: 5,
            icon: icons.bill,
            color: theme.colors.yellow,
            backgroundColor: theme.colors.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            icon: icons.game,
            color: theme.colors.primary,
            backgroundColor: theme.colors.lightGreen,
            description: "Games"
        },
        {
            id: 7,
            icon: icons.phone,
            color: theme.colors.red,
            backgroundColor: theme.colors.lightRed,
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            icon: icons.more,
            color: theme.colors.purple,
            backgroundColor: theme.colors.lightpurple,
            description: "More"
        },
    ];

    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: "Bonus Cashback1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            img: images.promoBanner,
            title: "Bonus Cashback2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            img: images.promoBanner,
            title: "Bonus Cashback3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            img: images.promoBanner,
            title: "Bonus Cashback4",
            description: "Don't miss it. Grab it now!"
        },
    ];

    const [ features, setFeatures ] = useState<FeaturesType[]>(featuresData);
    const [ specialPromos, setSpecialPromos ] = useState<SpecialPromoType[]>(specialPromoData);

    return { features, specialPromos };

};

export default useHome;