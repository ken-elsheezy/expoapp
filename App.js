import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!, it has finally
        worked i guess you shouldnt come close to developing react native
        applications on Android if you are not using EXPO else, you probably
        might Just get frustrated.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
