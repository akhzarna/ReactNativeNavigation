import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,Platform,
  Alert,NetInfo,
  Image,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

class SideMenu extends Component{
    
    static options(passProps) {
    return {

     topBar: {
     visible: false,
     drawBehind: true,
     animate: true,
     }
    };
  }    



  constructor(props){
    super(props);
    
    this.state={
      
      
    }

  }

rowSelected(){

          
           
      
          this.hideSideMenu();
  }


hideSideMenu() {
  Navigation.mergeOptions(this.props.componentId, {
    sideMenu: {
      left: {
        visible: false
      }
    }
  });
}




  toggleDrawer = () => {

      this.props.navigator.toggleDrawer({
        side: 'right',
      });
    };

componentWillMount(){
 // Alert.alert("will mount");
  // if(AdCount%3==1){    
  //               Alert.alert('Hello Frnds');
  //               this.showInterstitial();
  //               AdCount++
  //               }else { AdCount++; }
}


componentDidMount() {


  
  } 






  render(){

    return(

      <View style={styles.outerContainer}>
      
    <Text style={{textAlign:'center',color:'green'}}> this is side menu </Text>
      </View>
    
    

    );}


  }


const styles=StyleSheet.create({
  outerContainer:{
    flex:1,
    backgroundColor:'#e0ebeb',
  },
  header:{
    height:200,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  textView:{
    height:60,
    justifyContent:'flex-end',
    marginLeft:10,
    marginRight:10,
    alignItems:'center',
    flexDirection:'row',
    // backgroundColor:'green',
  },
 
})

  module.exports=SideMenu;
