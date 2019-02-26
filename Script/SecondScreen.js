
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NetInfo,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  Platform,
  ActivityIndicator,
  AsyncStorage,
  Dimensions,
  Slider,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Picker,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
var {height, width} = Dimensions.get('window');

var {DEVICE_HEIGHT, DEVICE_WIDTH} = Dimensions.get('window');
var AdCount=0;


class SecondScreen extends Component{
   
   static options(passProps) {
    return {

      topBar: {
        background: {
        color: '#a8f7c3',
        // component: {
        //      name: 'car.TopBar',
        //      aligment: 'center'
        // }
   },
        title: {
          text: 'Main Screen',
          color:'red',
        },
        // leftButtons: [
        //   {
        //     id: 'button',
        //     icon: require('./Icons/menux.png')
        //   }
        // ],
        // rightButtons: [{
        //   id: 'buttonOne',
        //   icon: require('./Icons/favorite.png')
        // }],
      }
    };
  }    

  constructor(props){

    super(props);
   
    Navigation.events().bindComponent(this);
   // this.props.navigator.setOnNavigatorEvent(this.addOnNavigationEvent.bind(this));
     
    this.state={
        bannerid:'',     
        bookArray:[],
       
    }    
     
      



  }

  
 hideSideMenu() {
  Navigation.mergeOptions(this.props.componentId, {
    sideMenu: {
      left: {
        visible: true
      }
    }
  });
}

 

 componentWillUnmount() {
   NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);
   //console.log("unmount of home Screen");
    
}

 
componentDidMount(){
  
    

}



checkForInternectConnection(){
  


}

componentWillMount(){
  
   NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);
    NetInfo.isConnected.fetch().done(
      (isConnected) => {  }
    );
}

  


handleConnectionChange = (isConnected) => {



}  



  

    
   
    
       rowSelected(){
    
//    Navigation.push(this.props.componentId, {
//   component: {
//     name: 'SecondScreen',
//     passProps: {data},
//     options: {
//       animations: {
//         pop: {
//           enable: true
//         }
//       }
//     }
//   }
// });
}

   
  render(){


   

    return(

      <View style={{flex:1,backgroundColor:'#eeeeee',justifyContent:'center',}}>
     
     <Text style={{color:'red',textAlign:'center',margin:20}}> Welcome To Second Screen </Text>

      </View>

    );


  }


}

const styles=StyleSheet.create({
outerContainer:{
  flex:1,
  backgroundColor:'#e0ebeb', //Constants.ThemeColor,
},

})

module.exports=SecondScreen;



























