import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';
import Pie from 'react-native-pie';

interface IPieProps {
  /**
   * renders the name of the country
   */
  country?: string;
  /**
   * renders total number of people infected in the country or state with cvd-19
   */
  total?: number;
  /**
   * renders numbe rof people with cvd19
   */
  infected?: number;
  /**
   * renders number of people recovered from the disease
   */
  recovered?: number;
  /**
   *renders the number of people dead due to `covid 19`
   */
  deaths?: number;
}
const data = {
  total: 2543,
  infected: 2280,
  recovered: 191,
  deaths: 72,
};

const InfectionPie: React.FC<IPieProps> = ({
  country = 'Kenya',
  total = data.total,
  infected = data.infected,
  recovered = data.recovered,
  deaths = data.deaths,
}) => {
  return (
    <Layout style={styles.container}>
      <Text>Infection Gauges</Text>
      <Layout style={{marginTop: 20}}>
        <Pie
          radius={80}
          innerRadius={70}
          sections={[
            {
              percentage: 25,
              color: '#C70039',
            },
            {
              percentage: 35,
              color: '#44CD40',
            },
            {
              percentage: 40,
              color: '#EBD22F',
            },
          ]}
          strokeCap={'butt'}></Pie>
        <Layout style={styles.gauge}>
          <Text style={styles.gaugeText}> Total Cases</Text>
          <Text style={styles.gaugeText}> {total.toString()}</Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default InfectionPie;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '80%',
    // backgroundColor: 'yellow',
  },
  gauge: {
    // position: 'absolute',
    // height: 200,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  gaugeText: {
    // backgroundColor: 'transparent',
    // color: '#000',
    fontSize: 24,
  },
});
