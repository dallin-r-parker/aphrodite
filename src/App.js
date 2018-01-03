import React, { Component } from 'react';
import { StyleSheet, css } from "aphrodite";

class App extends Component {
  render() {
    return (
      <div>
        HELLO WORLD
        <span className={css(styles.red)}>
          My name is Dallin parker
        </span>
        <span className={css(styles.hover)}>
          My wife's name is Mikayda
        </span>
        <span className={css(styles.small)}>
          My dog's name is Brady
        </span>
        <span className={css(styles.blue, styles.small)}>
          I do not have a cat
        </span>
      </div>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  red: {
      backgroundColor: 'red'
  },

  blue: {
      backgroundColor: 'blue'
  },

  hover: {
      ':hover': {
          backgroundColor: 'red'
      }
  },

  small: {
      '@media (max-width: 600px)': {
          backgroundColor: 'red',
      }
  }
});