import React, {Component} from 'react';
import { AppRegistry, View, Text, Image, StyleSheet, TextInput} from 'react-native';

class Bpp extends Component{
  render() {
    return(
      <View style={{flex:1}}>
        <View style={styles.headerContainer}>
          <View style={styles.flexForImg}>
	        <Image
	          source={require('./camera-retro.png')} style={styles.imgCamera}
	        />
	      </View>

	      <View style={{flex:6}}>
	        <TextInput style={styles.searchInput} placeholder="Search..."/>
	      </View>

	      <View style={styles.flexForImg}>
	        <Image
	          source={require('./comment-dots.png')} style={styles.imgCamera}
	        />
	      </View>
        </View>

        <View style={{flex:15, backgroundColor:"grey"}}>

        </View>
      </View>
	)
  }
}

export default Bpp

AppRegistry.registerComponent('Quiz', () => FlexDirectionBasics);

const styles = StyleSheet.create({
	headerContainer:{
		flex:1,
		backgroundColor:"#4267B2",
		justifyContent:"center",
		flexDirection:"row",
	},
	imgCamera:{
		width:25,
		height:25,
	},
	flexForImg:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#4267B2",
	},
	searchInput: {
    	margin: 15,
    	borderBottomWidth: 1,
    	padding: 5,
    	width: 270,
    },
})