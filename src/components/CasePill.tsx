import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {ViewStyle, StyleProp} from 'react-native';

type pillType = 'deaths' | 'active' | 'critical' | 'recovered';

interface CasePillProps {
  /**
   * number of people
   */
  value: number;
  /**
   * type of case can be `deaths` | `active` | `critical` | `recovered`
   */
  type: pillType;
}

const colors = {
  deaths: '#C70039',
  active: '#FF8000',
  recovered: '#44CD40',
  critical: '#EBD22F',
};

const CasePill: React.FC<CasePillProps> = ({value, type}) => {
  const color = colors[type];
  const caseStyles: StyleProp<ViewStyle> = {
    flexGrow: 1,
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: color,
    padding: 3,
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 3,
    borderLeftWidth: 10,
    justifyContent: 'space-between',
  };
  return (
    <Layout style={caseStyles}>
      <Text style={{marginRight: 5, color: color}}>
        {type.toLocaleUpperCase()}
      </Text>
      <Text style={{color: color}} category="h6">
        {value.toString()}
      </Text>
    </Layout>
  );
};

export default CasePill;
