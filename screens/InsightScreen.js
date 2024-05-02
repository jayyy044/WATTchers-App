import { View, Text, StyleSheet,Image,Modal, Pressable, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";


export default function InsightScreen(){
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <View style={styles.container}>

        <View style = {styles.div}>
            <View style = {styles.header}>
                <Text style={styles.text}>Montly Price Comparision</Text>
            </View>
            <View style = {styles.picture}>
              <TouchableWithoutFeedback onPress={() => setVisible1(true)}>
                <Image
                  source={require('../assets/ProviderComp.jpg')}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20
                  }}
                />
              </TouchableWithoutFeedback>
            </View>
        </View>
          <Modal visible={visible1}>
            <Pressable onPress={() => setVisible1(false)}>
              <Image
                source={require('../assets/ProviderComp.jpg')}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            </Pressable>
          </Modal>

        <View style = {styles.div}>
            <View style = {styles.header}>
                <Text style={styles.text}>Prediction for next month</Text>
            </View>
            <View style = {styles.picture}>
                <TouchableWithoutFeedback onPress={() => setVisible2(true)}>
                  <Image
                    source={require('../assets/prediction.png')}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'stretch',
                      borderBottomRightRadius: 20,
                      borderBottomLeftRadius: 20
                    }}
                  />
                </TouchableWithoutFeedback>
            </View>
        </View>
        <Modal visible={visible2}>
        <Pressable onPress={() => setVisible2(false)}>
          <Image
            source={require('../assets/prediction.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </Pressable>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft:20,  
    paddingTop: 15,

  },
  div: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 15,
    marginBottom: 10,
  },
  header:{
    flex:1,
    borderBottomWidth: 1,
  },
  picture: {
    flex: 5.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});