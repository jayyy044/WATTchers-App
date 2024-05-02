import { View, Text, StyleSheet, Image, Modal, Pressable, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import PieChart from 'react-native-pie-chart';

const widthAndHeight = 170;
//The amount of numbers need to match the number of color specified 
const sliceColor = ['#fbd203', '#90EE90', '#ADD8E6'];


export default function HomeScreen(){
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
        <View style = {styles.insight}>
            <View style = {styles.header}>
                <Text style={styles.text}>Insight</Text>
                <Text style = {{fontSize: 18, marginTop:25, marginLeft:20,
                fontStyle: 'italic', fontWeight: 'bold'}}>Summary</Text>
            </View>
            <View style = {styles.picture}>
              <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                <Image 
                source={require('../assets/prediction.png')} 
                style={{ width: '100%', height: '100%', resizeMode: 'stretch',borderBottomRightRadius:20,
                borderBottomLeftRadius:20 }}/>
              </TouchableWithoutFeedback>            
            </View>
        </View>
        <Modal visible={visible}>
            <Pressable onPress={() => setVisible(false)}>
              <Image 
                    source={require('../assets/ProviderComp.jpg')} 
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                    />
            </Pressable>
          </Modal>
        <View style = {styles.activity}>
            <View style = {styles.header}>
                <Text style={styles.text}>Activity</Text>
            </View>
            <View style = {styles.picture}>
              <PieChart
                  widthAndHeight={widthAndHeight}
                  series={[100, 150, 300]}
                  sliceColor={sliceColor}
                  coverRadius={0.45}
                  coverFill={'#FFF'}
                  />
                <View>
                  <Text style={{fontSize: 18}}>Voltage: 4.32 V</Text>
                  <Text style={{fontSize: 18}}>Current: 0.456 A</Text>
                  <Text style={{fontSize: 18}}>Power Usage: 20 W</Text>
                </View>
            </View>
        </View>
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
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft:20,  
    paddingTop: 20,
  },
  activity: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
  },
  insight: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
    marginBottom: 10,
  },
  header: {
    flex:1,
    borderBottomWidth: 1.5,
    flexDirection: 'row'
  },
  picture: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  
});