
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,ImageBackground,Dimensions,
  Image,
  Platform,
  ActivityIndicator,
  AsyncStorage,
  Picker,
  NetInfo,
  FlatList,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

class SplashScreen extends Component{



constructor(props) {
   super(props);
   //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
   this.state={
    languageCode:null,
    backgroundColor:"green",
     seriesList:[],
     showProgrees:true,
   }
 }


//  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
//     if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
//             if (event.id == 'menu') { // this is the same id field from the static navigatorButtons definition
//               this.props.navigator.toggleDrawer({
//                  side: 'right',
//                  animated: true
//                });
//             }

// }
// }

      componentWillMount(){

           
      
        
         
          setTimeout(()=> {
     

left: {
  stack: {
    children: [
      {
        component: {
          name: 'app.SideMenu',
        }
      }
    ]
  }
}

//Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
    
//       sideMenu: {
//         id: "SideMenu",
//           left: {
//   stack: {
//     children: [
//       {
//         component: {
//           name: "SideMenu",
//         }
//       }
//     ],
//     // options: {
//     //     statusBar: {
//     //     visible: true,
//     //     drawBehind: false,
//     //      }
//     //    },
//   }
// },
       // center: {
          stack: {
            id: "AppRoot",
            children: [{
              component: {
                id: "HomeScreen",
                name: "HomeScreen"
              }
            }],
             options: {
        statusBar: {
        visible: true,
        drawBehind: false,
         },
     topBar: {
     visible: true,
     drawBehind: false,
     //animate: true,
      }
    }
          }
        }
     // }
   // }
  });
//});


      
        },2000
                    );


    
  }




render(){
  
   


  return(
     <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'grey'}}>
     <Text style={{color:'green',textAlign:'center',fontSize:30}}>Hello....this is Splash </Text>                        
      </View>
    );
  }
}




const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  tochbutton:
  {
   alignItems:'center',
   alignContent:'center',
   justifyContent: 'center',
   //flex:1,
  

  },
  textStyle: {
    marginBottom:80,
   // fontWeight: 'bold',
    fontSize:25,
    color:'#000000'
  },
  backgroundImage:{
   // flex:1,
   height:220,
   width:220,
  //  alignSelf:'stretch',
    // width:null,
    // justifyContent:'center',
},
  
  });




module.exports=SplashScreen;
