import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
      width:'100%',
      height:500,
      resizeMode:'cover',
      justifyContent:'center',
    },
    title:{
        fontSize:80,
        fontWeight:'bold',
        color: 'white',
        width:'70%',
        marginLeft:25
    },
    button:{
        backgroundColor:'#ffff',
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginLeft:25,
        marginTop:20
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton:{
        backgroundColor:'#ffff',
        width: Dimensions.get('screen').width,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        flexDirection:'row',
        elevation:2,
        top:0,
    },
    searchButtonText:{
        fontSize:16,
        fontWeight:'bold'
    }
  });

  export default styles