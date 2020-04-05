import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

type pillType = 'deaths' | 'active' | 'critical' | 'recovered';

interface CasePillProps {
  value: number;
  type: pillType;
}

const colors = {
  deaths: '#C70039',
  active: '#FF8000',
  recovered: '#44CD40',
  critical: '#EBD22F',
};

const CasePill: React.FC<CasePillProps> = ({value, type}) => {
  return (
    <Layout style={styles.case}>
      <Text style={{marginRight: 5}} category="h5">
        {type.toLocaleUpperCase()}
      </Text>
      <Text status="primary" category="h5">
        {value.toString()}
      </Text>
    </Layout>
  );
};

export default CasePill;

const styles = StyleSheet.create({
  case: {
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 3,
  },
});
