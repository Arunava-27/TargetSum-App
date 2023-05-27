import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import RandomNumber from './RandomNumber';

export class Game extends Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
    initailSeconds: PropTypes.number.isRequired,
  };
  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(
    () => 1 + Math.floor(Math.random() * 10),
  );
  state = {
    selectedNumbers: [],
    initailSeconds: this.props.initailSeconds,
  };
  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  // TODO: Shuffle the random numbers

  componentDidMount = () => {
   this.intervalId=setInterval(() => {
      this.setState(prevState => {
        return {initailSeconds: prevState.initailSeconds - 1};
      }, () => {
        if (this.state.initailSeconds === 0) {
          clearInterval(this.intervalId);
        }
      });
    }, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  }
  

  isNumberSelected = numberIndex => {
    return this.state.selectedNumbers.indexOf(numberIndex) >= 0;
  };

  selectNumber = numberIndex => {
    this.setState(prevState => ({
      selectedNumbers: [...prevState.selectedNumbers, numberIndex],
    }));
  };

  // gameStatus: PLAYING, WON, LOST

  gameStatus = () => {
    const sumSelected = this.state.selectedNumbers.reduce(
      (acc, curr) => acc + this.randomNumbers[curr],
      0,
    );
    console.log(sumSelected);
    if (this.state.initailSeconds === 0) {
      return 'LOST';
    }
    if (sumSelected < this.target) {
      return 'PLAYING';
    }
    if (sumSelected === this.target) {
      return 'WON';
    }
    if (sumSelected > this.target) {
      return 'LOST';
    }
  };

  render() {
    const gameStatus = this.gameStatus();
    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>
        <Text style={styles.timer}>Time : {this.state.initailSeconds}</Text>
        <View style={styles.options}>
          {this.randomNumbers.map((randomNumber, index) => (
            <RandomNumber
              key={index}
              id={index}
              number={randomNumber}
              isDisabled={this.isNumberSelected(index) || gameStatus !== 'PLAYING'}
              onPress={this.selectNumber}
            />
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
  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
  timer: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
});
