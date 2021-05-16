//Librarys
import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/colors.js';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    box: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignContent: 'center',
        shadowRadius: 5,
        elevation: 5,
        textAlign: 'left',
    },

    iconBox: {
        backgroundColor: Colors.white,
        borderRadius: 30,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignContent: 'center',
        //shadowColor: '#000',
        //shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
    },

  //Text
  titel: {
    color: Colors.black,
    flex: 1,
    fontSize: 25,
    marginTop: 5,
    marginLeft: 15,
  },

    titleIcon: {
        color: Colors.blue,
        flex: 1,
        fontSize: 16,
        marginBottom: 15,
    },

    icons: {
        width: 160,
        height: 160,
        flex: 5,
    },

  orangeSchrift: {
    color: Colors.lightOrange,
    fontSize: 55,
    fontWeight: "bold",
    marginLeft: 15,
    position: "absolute",
    textAlignVertical: "bottom",
    height: windowHeight * 0.105,
  },

    h1: {
        color: Colors.black,
        flex: 2.5,
        fontSize: 15,
        marginLeft: 15,
    },

    orangeBottomInBox: {
        width: '100%',
        height: windowHeight * 0.105,
        backgroundColor: Colors.lightOrange,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    hiScore: {
        color: Colors.white,
        marginTop: 25,
        fontSize: 20,
        textAlignVertical: 'center',
        marginLeft: 15,
    },
});
