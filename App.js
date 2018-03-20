import React from 'react';
import { StyleSheet, Text, View , ScrollView, TouchableHighlight, Image, FlatList} from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      isLoading: true,
      data:[]
    }
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          data: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (

          <ScrollView>

            <View style={styles.iterator}>
                <Image source={require('./assets/invent.jpg')} />
                <Text>This is nested in the view Container</Text>
            </View>

             <View style={styles.blue}>
               <FlatList
                 data={this.state.data}
                 renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                 keyExtractor={(item, index) => index}/>
            </View>

            {this.state.data.map((item,i)=>
              <View style={styles.red} key={i}>
                      <Image source={require('./assets/invent.jpg')} />
                      <Text>{item.title}, {item.releaseYear}</Text>
              </View>
            )}


          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#066',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iterator: {
    flex: 1,
    backgroundColor: '#006',
    alignItems: 'center'
  },

  red: {
    flex: 1,
    backgroundColor: '#c00',
    alignItems: 'center',
    marginBottom: 20
  },

  blue: {
    flex: 1,
    backgroundColor: '#666',
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
