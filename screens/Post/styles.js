import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:20
    },
    image:{
        width:'100%',
        aspectRatio:3/2,
        borderRadius:20
    },
    bedroom:{
        marginTop:10,
        color:'#5b5b5b'
    },
    description:{
        fontSize:18,
        lineHeight:26
    },
    prices:{
        fontSize:18,
        marginTop:10
    },
    oldprice:{
        color:'#5b5b5b',
        textDecorationLine:'line-through' 
    },
    price:{
        fontWeight:'bold'
    },
    totalPrice:{
        color:'#5b5b5b',
        textDecorationLine:'underline'
    }
})

export default styles