import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    
    tippDesTagesBox: {
        width: 330,
        height: 140,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        justifyContent: 'flex-start',
        alignContent: 'center',
        shadowRadius: 5,
        elevation: 10,
    },

    tippDesTagesTitel: {
        color: '#f79A42',
        fontSize: 30,
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: 'bold',
    },

    tippDesTagesText: {
        color: '#000',
        fontSize: 16,
        marginLeft: 15,
        marginRight: 100,
    },

    tippDesTagesImage: {
        width: 100,
        height: 90,
        position: 'absolute',
        top: 50,
        left: 220,
    },

    bottom: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffc185',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

})