import React from 'react';
import { StyleSheet, Text, View , ScrollView, TextInput,
          TouchableHighlight, Image, FlatList, ActivityIndicator, Alert, DrawerLayoutAndroid} from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      isLoading: true,
      data:[]
    }
  }

  componentDidMount(){
    return fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1013bb0b1d32487d8a57012b2e62bbf3')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          data: responseJson.articles,
          search: ""
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  kenOnPressButton(text) {
   Alert.alert(text)
 }

  render() {

    var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
    </View>
  );

    if(this.state.isLoading){
     return(
       <View style={{flex: 1, padding: 20}}>
         <ActivityIndicator/>
       </View>
     )
   }


    return (


      <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>

          <ScrollView>

            <View style={styles.iterator}>
                <Image style={{height:70, width:200}} source={{uri:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png'}} />
                <Text style={{color:"#fff"}}>This is a news App! Cool google logo upstairs</Text>
            </View>


            <View style={{flex: 1,padding:10, paddingTop: 10, backgroundColor:"#006"}}>
              <TextInput
              placeholder="Search..."
              style={{flex: 1, padding: 2, backgroundColor:"#fff", height:40, fontSize:20, borderBottomWidth:0}}
              onSubmitEditing={(text) => this.setState({text})} />
              <Text>{this.state.search}</Text>
            </View>

            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>

            {this.state.data.map((item,i)=>
              <TouchableHighlight onPress={()=> { Alert.alert(item.source.name+ ": " + item.description)}} key={i}>
                <View style={styles.red} >
                  <View style={styles.fiftyfifty}>
                      <Image style={styles.images} source={{uri:item.urlToImage}} />
                  </View>
                  <View style={styles.fiftyfiftyone}>
                          <Text>{item.source.name}{item.description}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            )}


          </ScrollView>
          </DrawerLayoutAndroid>
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

  fiftyfifty: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    position: 'relative'
  },

  fiftyfiftyone: {
    flex: 0.6,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    paddingLeft:10
  },

  iterator: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#006',
    alignItems: 'center'
  },

  red: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
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

  images: {
    width:100,
    height: 100
  },

});
