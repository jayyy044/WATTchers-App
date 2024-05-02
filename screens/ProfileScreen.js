import { View, Text, StyleSheet, ScrollView,Image,TouchableOpacity,
    TouchableWithoutFeedback,Keyboard, TextInput, 
    Pressable} from "react-native";
import {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function ProfileScreen(){
  const[name, setName]= useState('John Doe');
  const[email, setEmail]= useState('JohnDoe@gmail.com');
  const[phone, setPhone]= useState('xxxxxxxxx');
  const[newName, setNewName]= useState('');
  const[newPhone, setNewPhone]= useState(''); 
  const[newEmail, setNewEmail]= useState(''); 

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style = {{flex:1}}>
            <View style={styles.information}>
                <View style = {styles.pic_device}>
                    <View style = {styles.profile}>
                        <Image source = {require('../assets/Profile_Defualt.png')} style= {{width: 100, height: 100,}}/>
                    </View>
                    <View style = {styles.Devices}>
                        <Text style= {styles.text}>Devices</Text>
                        <View style = {styles.device_setup}>
                            <Image source={require('../assets/Device.png')} style= {{width: 40, height: 40,}}/>
                            <Text style = {styles.device_text}>User's WATTcher's</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.account_info}>
                    <View style = {styles.username}>
                        <AntDesign name="user" size={26} color="#e8de23" />
                        <Text style = {styles.user_text}>User:</Text>
                        <Text style = {styles.ex_user_text}>{name}</Text>
                    </View>
                    <View style = {styles.username}>
                        <Feather name="mail" size={24} color="#e8de23" />
                        <Text style = {styles.user_text}>Email:</Text>
                        <Text style = {styles.ex_user_text}>{email}</Text>
                    </View>
                    <View style = {styles.username}>
                        <AntDesign name="phone" size={24} color="#e8de23" />
                        <Text style = {styles.user_text}>Phone:</Text>
                        <Text style = {styles.ex_user_text}>{phone}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.editprofile}>
                
                <Text style={styles.edittitle}>Edit Profile</Text>
                <TextInput style = {styles.Text_in} placeholder="Enter a new username Ex. John1234" onChangeText={(newname) => setNewName(newname)} value={newName}/>
                <TextInput style = {styles.Text_in} placeholder="Enter a new email Ex. john1234@gmail.com" onChangeText={(newemail) => setNewEmail(newemail)} value={newEmail}/>
                <TextInput style = {styles.Text_in} placeholder="Enter a new phone number Ex. XXX XXX XXXX" onChangeText={(newphone) => setNewPhone(newphone)} keyboardType='numeric' value={newPhone}/>
                    <Pressable style={({pressed}) => [{
                         borderColor: pressed ? '#e8de23' : 'black',
                        },
                        styles.touchable,]} onPress={() => {
                            if (newName.length > 0){
                                setName(newName);
                                setNewName('');
                            }
                            if (newEmail.length > 0){
                                setEmail(newEmail)
                                setNewEmail('');
                            }
                            if (newPhone.length > 0){
                                setPhone(newPhone)
                                setNewPhone('');
                            }
                        }}>
                        {({ pressed }) => (
                            <Text style={[{
                                       color: pressed ? '#e8de23': 'black',},
                                        styles.submit_text,]}>
                                        Update Profile
                            </Text>
                            )}
                    </Pressable>      
            </View>
            <Pressable style={({pressed}) => 
            [{borderColor: pressed ? '#e8de23' : 'black', },styles.extrasettings,]}>
                <Feather name="help-circle" size={24} color='black' /> 
                <Text style={styles. text_extrasettings}>
                        Help and support
                </Text>
            </Pressable>
        </ScrollView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    information:{
        borderWidth:1.2,
        marginHorizontal: 6,
        paddingTop: 15,
        paddingRight:10,
        paddingLeft:10,
        paddingBottom: 10,
        borderRadius: 20,
        marginTop: 10,
    },
    pic_device:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profile:{
        borderWidth:2,
        borderRadius: 170,
    },
    Devices:{
        borderWidth:2,
        borderRadius:20,
        width:239,
        paddingLeft: 10,
        paddingTop: 10,
    },
    device_setup:{
        flex:1,
        flexDirection: 'row',
    },
    device_text:{
        fontSize:15,
        fontWeight: '700',
        marginVertical:7,
        marginHorizontal:8,
    },
    account_info:{
        marginTop: 20,
        marginHorizontal:7,
        paddingTop: 25,
        paddingLeft:15,
        paddingRight:15,
        borderWidth:1.5,
        borderRadius:20,
        paddingBottom:5,

    },
    username:{
        flex:1,
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius:20,
        paddingTop:11,
        paddingBottom: 11,
        paddingLeft:7,
        marginBottom:15,

    },
    user_text:{
        fontSize: 17,
        marginLeft:5,
        fontWeight:'600'
    },
    ex_user_text:{
        fontSize: 16,
        marginLeft:5,
        marginTop: 1,
        fontStyle: 'italic',
    },
    editprofile:{
        marginTop: 15,
        borderWidth:1.2,
        marginHorizontal: 6,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 20,
    },
    edittitle:{
        paddingLeft: 15,
        fontSize:20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    Text_in:{
        paddingLeft: 20,
        fontSize:17,
        borderBottomWidth:2,
        paddingTop: 13,
        marginHorizontal:20,
    },
    touchable:{
        flex: 1,
        borderWidth: 2,
        justifyContent: 'center', 
        alignItems: 'center',
        marginHorizontal:35,
        marginTop:25, 
        borderRadius:25,
        paddingTop:10,
        paddingBottom:10,
    }, 
    submit_text:{
        fontSize: 17,
        fontWeight: "bold",
    },
    extrasettings:{
        flex:1,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderRadius:20,
        paddingTop:11,
        paddingBottom: 11,
        paddingLeft:7,
        marginTop:10,
        marginHorizontal: 7,
        
    },
    text_extrasettings:{
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 5,

    },


    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});