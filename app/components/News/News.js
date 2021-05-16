//Librarys
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, StyleSheet, Dimensions} from 'react-native';

//Styles
import Newscard from './Newscard.js';
const windowHeight = Dimensions.get('window').height;

export default function News() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const renderItem = ({item, index}) => <Newscard key={index} item={item} />;
    useEffect(() => {
        fetch(
            'https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Coronaf%C3%A4lle_in_den_Bundesl%C3%A4ndern/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID_1,LAN_ew_AGS,LAN_ew_GEN,LAN_ew_BEZ,LAN_ew_EWZ,OBJECTID,Fallzahl,Aktualisierung,AGS_TXT,GlobalID,faelle_100000_EW,Death,cases7_bl_per_100k,cases7_bl,death7_bl,cases7_bl_per_100k_txt,AdmUnitId&returnGeometry=false&outSR=0&f=json'
        )
            .then((response) => response.json())
            .then((json) => setData(json.features))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{paddingTop: 15, height: windowHeight * 0.3, marginBottom: 0}}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={data}
                    keyExtractor={(item) => item.GlobalID}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
}
