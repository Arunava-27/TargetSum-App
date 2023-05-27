import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export class RandomNumber extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  handleProps = () => {
    // console.log(this.props.number);
    if (this.props.isDisabled) {
      return;
    }
    this.props.onPress(this.props.id);

    // this.setState((prevState) => ({
    //   selectedNumbers: [...prevState.selectedNumbers, numberIndex],
    // }));
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handleProps}>
        <Text style={[styles.option, this.props.isDisabled && styles.disabled]} >
          {this.props.number}
        </Text>
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
  disabled: {
    opacity: 0.3,
  },
});
