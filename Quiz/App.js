import React, { Component } from 'react';
import { AppRegistry,
  View,
  StyleSheet,
  Button,
  TextInput,
  Text } from 'react-native';

class App extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
        <View style={styles.iDummy} />

        <View style={styles.iiDummy}>
          <TextInput style={styles.twoInput} placeholder="Phone or Email"/>
          <TextInput style={styles.twoInput} placeholder="Password" secureTextEntry={true}/>

          <View style={styles.buttonLogin}>
            <Button title="Login"/>
          </View>
        </View>

        <View style={styles.iiiDummy}>
          <Text style={{justifyContent:"center"}}>Forgot Your Password?</Text>
        </View>
        <View style={styles.bigSpacerDummy}/>

        <View style={styles.iiiDummy}>
          <Text>───────── OR ─────────</Text>
        </View>

        <View style={styles.ivDummy}>

          <View style={styles.makeAccount}>
            <Button title="New Account" color="green"/>
          </View>

        </View>
      </View>
    );
  }
};

export default App

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  iDummy: {
    flex: 4,
    backgroundColor: 'powderblue',
  },
  iiDummy: {
    flex: 3.2,
    alignItems: "center",
    //backgroundColor: 'grey',
  },
  iiiDummy: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  ivDummy: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: 'grey',
  },
  bigSpacerDummy: {
    flex: 3,
    //backgroundColor:"grey",
  },
  twoInput: {
    margin: 15,
    borderBottomWidth: 1,
    padding: 5,
    width: 300,
  },
  buttonLogin: {
    width:300,
  },
  makeAccount: {
    width: 200,
  },
})