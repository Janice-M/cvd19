import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';

const IconProvider = (source: ImageSourcePropType) => ({
  //@ts-ignore
  toReactElement: ({animation, ...style}) => (
    <Image style={style} source={source} />
  ),
});

export const AssetIconsPack = {
  name: 'assets',
  icons: {
    home: IconProvider(require('../assets/icons/home.png')),
    stats: IconProvider(require('../assets/icons/stats.png')),
    virus: IconProvider(require('../assets/icons/virus.png')),
  },
};
