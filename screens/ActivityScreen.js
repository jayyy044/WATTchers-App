import { View, Text, StyleSheet,ScrollView } from "react-native";
import PieChart from 'react-native-pie-chart';
import { useEffect, useState } from "react";
import {Dimensions} from 'react-native';

const widthAndHeight = 170;
//The amount of numbers need to match the number of color specified 
const sliceColor = ['#fbd203', '#90EE90'];

export default function ActivityScreen(){
    const [voltage, setVoltage] = useState(4.4); //  4.4-4.5
    const [current, setCurrent] = useState(0.410); // 410 - 430
    const [power, setPower] = useState(4.4*0.410); // (parseFloat(p + (voltage*current).toFixed(3))).toFixed(2)
    
    useEffect(() => {
        setTimeout(() => {
            
            setVoltage((Math.random() * (4.5 - 4.4)+ 4.4).toFixed(3))
            
            setCurrent((Math.random() * (0.430 - 0.410)+ 0.410).toFixed(3))
            if (voltage != 0 && current != 0){
                setPower((p) => Math.round((p+(voltage*current))*10)/10)
            }
            
        }, 3000)
        
    }, [voltage])
    // setInterval(() => {
    //     setVoltage((Math.random() * (5 - 4)+ 4).toFixed(2))
    // }, 2000);
  return (
    <ScrollView style={{ flex: 1 }}>

        <View style={styles.container}>
            <View style={styles.header}>
                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={[power, 150]}
                    sliceColor={sliceColor}
                    coverRadius={0.45}
                    coverFill={'#FFF'}
                />
            </View>
            <View style={styles.titleContainer}>
                <View style = {styles.textbox}>
                     <Text style={{fontWeight:'bold', fontSize: Dimensions.get('window').width/20}}>Power (W)</Text>
                </View>
                <View style = {styles.valuebox}>
                    <Text style={styles.text}>Hourly : {power} W {"\n"}Usage</Text>
                    <Text style={styles.text}>Daily : {power} W{"\n"}Usage</Text>
                </View>
            </View>
        </View>

        <View style={styles.container}>
            <View style={styles.header}>
                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={[current, 1]}
                    sliceColor={sliceColor}
                    coverRadius={0.45}
                    coverFill={'#FFF'}
                />
            </View>
            <View style={styles.titleContainer}>
                <View style = {styles.textbox}>
                     <Text style={{fontWeight:'bold', fontSize: Dimensions.get('window').width/20}}>Current (mA)</Text>
                </View>
                <View style = {styles.valuebox}>
                    <Text style={styles.text}>Value: {current} mA</Text>
                </View>
            </View>
        </View>

        <View style={styles.container}>
                <View style={styles.header}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={[voltage, 10]}
                        sliceColor={sliceColor}
                        coverRadius={0.45}
                        coverFill={'#FFF'}
                    />
                </View>
            <View style={styles.titleContainer}>
                <View style = {styles.textbox}>
                     <Text style={{fontWeight:'bold', fontSize: Dimensions.get('window').width/20}}>Voltage (V)</Text>
                </View>
                <View style = {styles.valuebox}>
                    <Text style={styles.text}>Value: {voltage} V</Text>
                </View>
            </View>
        </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        borderWidth:3,
        marginHorizontal:10,
        marginVertical:12,
        borderRadius:15,
    },
    header: {
        padding: 20,
    },
    title:{
        fontWeight:'bold',
    },
    textbox:{
        borderBottomWidth:2,
        paddingRight:25,
        paddingTop:10,
        paddingBottom:15,
        borderLeftWidth:2,
        paddingLeft:20,
        borderRadius:6,
    },
    valuebox:{
        marginTop:20,
    },
    text:{
        fontWeight:'bold', 
        fontSize: Dimensions.get('window').width/25,
    },
    

});
