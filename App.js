import React from 'react';
import { StyleSheet, Text, View , ScrollView, TouchableHighlight, Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (

          <ScrollView>

            <View style={styles.iterator}>
                <Image source={require('./assets/invent.jpg')} />
                <Text>This is nested in the view Container</Text>
            </View>

            <View style={styles.blue}>
                <Text>This is nested in the view Container</Text>
            </View>

            <View style={styles.red}>
                <Text>This is nested in the view Container</Text>
            </View>

            <View style={styles.yellow}>
                <Text>This is nested in the view Container</Text>
            </View>


            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>


            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Open up App.js to start working on your app!</Text>


          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b259',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iterator: {
    flex: 1,
    backgroundColor: '#00b259',
    alignItems: 'center',
    height: 100
  },

  red: {
    flex: 1,
    backgroundColor: '#c00',
    alignItems: 'center',
    height: 100
  },

  blue: {
    flex: 1,
    backgroundColor: '#039',
    alignItems: 'center',
    height: 100
  },

  yellow: {
    flex: 1,
    backgroundColor: '#ff9',
    alignItems: 'center',
    height: 100
  },
});
