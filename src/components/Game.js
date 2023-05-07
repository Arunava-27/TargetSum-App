import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RandomNumber from './RandomNumber';

export class Game extends Component {
  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(
    () => 1 + Math.floor(Math.random() * 10),
  );
  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

    // TODO: Shuffle the random numbers

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.target}> {this.target} </Text>
        <View style={styles.options}>
          {this.randomNumbers.map((randomNumber, index) => (
            <RandomNumber key={index} number={randomNumber} />
          ))}
        </View>
      </View>
    );
  }
}

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    paddingTop: 50,
    height: 1000,
  },
  target: {
    fontSize: 50,
    backgroundColor: '#bbb',
    margin: 50,
    textAlign: 'center',
  },
    options: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    },
  option: {
    backgroundColor: '#ddd',
    width: 100,
    marginHorizontal: 35,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});
