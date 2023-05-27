import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Game from './Game';

export class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Game randomNumberCount={6} initailSeconds={10} />
        </View>
      </ScrollView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
