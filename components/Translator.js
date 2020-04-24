import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput,  Button, TouchableOpacity, Image, ScrollView  } from 'react-native';

import {Picker} from '@react-native-community/picker';





const key = 'trnsl.1.1.20200418T112832Z.32f4b0648b80cd9a.2d6a7b812f52746da2923d3adf1110473a8e702f';


var dil2 = 'en';


const Translator = () => {


 
  
  const [inputText, setText] = useState('');
  const [responseText, setResponse] = useState('');
  

  function postTranslateService(text) {
    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+key+'&lang='+ dil2 +'&text='+ text)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.text)
        setResponse(res.text)
      })
      .catch((error) => {
        console.log(error)
      });
  };

 
  var [selectedValue, setSelectedValue] = useState("");
 

  return (

    
    <ScrollView
    contentInsetAdjustmentBehavior="automatic">
          <View style = {styles.container}>
          
            <Text   style={{
              
              fontSize: 15,
              fontWeight: 'bold',
              color: '#727272'
            }}> Enter text to Translate </Text>

            <View style={styles.input}>
            <TextInput
              numberOfLines={5}
              multiline={true}
              placeholder="Enter Text"
              style={{ height: 55, width: 275, borderColor: 'gray',  }}
              onChangeText={text => setText(text)}
            />

<TouchableOpacity
            onPress={() => postTranslateService(inputText)}
            >
            <Image
              style={styles.voiceButton}

              source={{
                uri:
                  'https://img.icons8.com/ios/50/000000/microphone.png',
              }}
            />
          </TouchableOpacity>
</View>
<View style={styles.tpick}>
<Picker

        selectedValue={selectedValue}
        style={{ height: 135, width: 340 }}
        onValueChange={(itemValue) => setSelectedValue(dil2=itemValue)}
      >
        <Picker.Item label="Turkish" value="tr" />
      <Picker.Item label="English" value="en" />
            <Picker.Item label="German" value="de" />
            <Picker.Item label="French" value="fr" />
            <Picker.Item label="Spanish" value="es" />
            <Picker.Item label="Russian" value="ru" />
            <Picker.Item label="Bulgarian" value="bg" />
            <Picker.Item label="Polish" value="pl" />

      </Picker>
      </View> 
      

<View style={styles.tbutton}>
            <Button
              title="Translate"
              color="#ff8533"
              onPress={() => postTranslateService(inputText)}
               />
               </View>
               
               <Text   style={{
              top:-85,
              fontSize: 15,
              color: '#727272',
              fontWeight: 'bold',
              
            }}> Translated </Text>

               
<View style={styles.output}>
            <Text style = {styles.ceviri}>{' ' +responseText}</Text>
            </View>   
      </View>      
     
          </ScrollView>
          
  );
};



const styles = StyleSheet.create({
container: {
flex: 1,
top:40,
   },
   input: {
       flexDirection: 'row',
       justifyContent: 'flex-start',
       alignItems: 'center',
       borderWidth: .6,
       borderRadius: 5 ,
       margin: 5,

      },
   output: {
   
       alignItems: 'flex-start',
       borderWidth: .6,
       borderColor: 'gray',
       borderRadius: 5 ,
       margin: 5,
       height: 55,
       top:-85,
       
       

      },
  ceviri: {
    fontSize: 15,
        color: 'gray',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 16,
     },
 tbutton: {
  left:5,  
  width: 331,
  borderRadius: 5,
  top:-125,
  },
voiceButton: {

    width: 25,
    height: 25,
    padding: 10,
    margin: 15,

  },
  tpick: {
    
    right:5,
    top:1,
  },
});

export default Translator;
