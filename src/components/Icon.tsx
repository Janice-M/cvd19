import React from 'react';
import {Icon} from '@ui-kitten/components';

interface IconProps {
  /**
   * renders `icon` given the name
   */
  name: string;
  /**
   * renders styles to the icon
   */
  style: any;
}

const IconComponent: React.FC<IconProps> = ({style, name}) => {
  return <Icon {...style} name={name} />;
};

export default IconComponent;
