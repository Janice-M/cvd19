import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Layout, CardHeader, Card, useTheme} from '@ui-kitten/components';
import Pie from 'react-native-pie';
import CasePill from './CasePill';

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
  active?: number;
  /**
   * renders number of people recovered from the disease
   */
  recovered?: number;
  /**
   *renders the number of people dead due to `covid 19`
   */
  deaths?: number;
  /**
   * severly affected and under ICU
   */
  critical?: number;
}
const data = {
  total: 2543,
  active: 2000,
  recovered: 191,
  deaths: 72,
  critical: 280,
};

const InfectionPie: React.FC<IPieProps> = ({
  country = 'Kenya',
  total = data.total,
  active = data.active,
  recovered = data.recovered,
  deaths = data.deaths,
  critical = data.critical,
}) => {
  const theme = useTheme();
  const getPercentage = (cases: number) => (cases / total) * 100;
  const Header = () => (
    <CardHeader
      title={total.toString()}
      description="Total Cases"
      headerStyle={{margin: 40}}
    />
  );
  return (
    <Layout style={{marginTop: 20, width: '80%'}}>
      <Text category="h3">Infection Gauges</Text>
      <Card style={styles.card} status="danger">
        <Layout style={styles.container}>
          <Layout style={styles.header}>
            <Text status="info" category="h5">
              Total Cases {country ? `in ${country}` : ''}
            </Text>
            <Text status="danger" category="h4">
              {total.toString()}
            </Text>
          </Layout>
          <Pie
            radius={80}
            innerRadius={50}
            sections={[
              //death
              {
                percentage: getPercentage(deaths),
                color: '#C70039',
              },
              //critical cases
              {
                percentage: getPercentage(critical),
                color: '#FF8000',
              },
              //recovered cases
              {
                percentage: getPercentage(recovered),
                color: '#44CD40',
              },
              //active cases
              {
                percentage: getPercentage(active),
                color: '#EBD22F',
              },
            ]}
            strokeCap={'butt'}
          />
          <Layout style={styles.pill}>
            <CasePill value={deaths} type="deaths" />
          </Layout>
        </Layout>
      </Card>
    </Layout>
  );
};

export default InfectionPie;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  card: {
    marginVertical: 8,
  },
  header: {
    margin: 4,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  pill: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 5,
  },
});
