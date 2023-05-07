import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export class RandomNumber extends Component {
    handleProps = () => {
        console.log(this.props.number);
    }
  render() {
    return (
      <TouchableOpacity onPress={this.handleProps}>
        <Text style={styles.option}>{this.props.number}</Text>
      </TouchableOpacity>
    );
  }
}

export default RandomNumber;

const styles = StyleSheet.create({
  option: {
    backgroundColor: '#ddd',
    width: 100,
    marginHorizontal: 35,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});
