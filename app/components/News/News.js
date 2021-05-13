//Librarys
import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, Image, Text, View, StyleSheet} from "react-native";

//Styles
import mainStyle from "../Styles/mainStyleSheet.js";
import homeStyle from "../Styles/homeStyleSheet.js";
import colors from "../../constants/colors.js";

export default function News() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const renderItem = ({item, index}) => (
        <View key={index.id} style={[mainStyle.box, homeStyle.boxSize, {marginTop: 10}]}>
            <Text key={"land" + index.id} style={[homeStyle.tippDesTagesTitel, styles.newsTitel]}>
                {item.attributes.LAN_ew_GEN}
            </Text>
            <View key={index.id} style={{flexDirection: "row"}}>
                <Image
                    key={"image1" + index.id}
                    source={require("../../assets/InfoScreen/Virus.png")}
                    style={styles.virusIcon}
                ></Image>
                <View key={index.id} style={styles.newsBlock}>
                    <Text key={"d" + index.id} style={styles.newsText}>
                        7-Tagesinzidenz:{" "}
                        <Text key={"inz" + index.id} style={styles.zahlenText}>
                            {item.attributes.cases7_bl_per_100k_txt}
                        </Text>
                    </Text>
                    <Text key={"fallz" + index.id} style={styles.newsText}>
                        Fallzahlen:{" "}
                        <Text key={"fall" + index.id} style={styles.zahlenText}>
                            {formateNumber(item.attributes.Fallzahl)}
                        </Text>
                    </Text>
                    <Text key={"todes" + index.id} style={styles.newsText}>
                        Todeszahlen:{" "}
                        <Text key={"todeszahl" + index.id} style={styles.zahlenText}>
                            {formateNumber(item.attributes.Death)}
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
    useEffect(() => {
        fetch(
            "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Coronaf%C3%A4lle_in_den_Bundesl%C3%A4ndern/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID_1,LAN_ew_AGS,LAN_ew_GEN,LAN_ew_BEZ,LAN_ew_EWZ,OBJECTID,Fallzahl,Aktualisierung,AGS_TXT,GlobalID,faelle_100000_EW,Death,cases7_bl_per_100k,cases7_bl,death7_bl,cases7_bl_per_100k_txt,AdmUnitId&returnGeometry=false&outSR=0&f=json"
        )
            .then((response) => response.json())
            .then((json) => setData(json.features))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    function formateNumber(number) {
        let str = number.toString();
        if (str.length > 3) {
            str =
                str.substring(0, str.length - 3) + "." + str.substring(str.length - 3, str.length);
        }
        if (str.length > 7) {
            str =
                str.substring(0, str.length - 7) + "." + str.substring(str.length - 7, str.length);
        }
        return str;
    }
    return (
        <View style={{paddingTop: 10, height: 215, marginBottom: 0}}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={data}
                    keyExtractor={({index}) => {
                        return index;
                    }}
                    renderItem={renderItem}
                    // key={"test"}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    virusIcon: {
        width: 120,
        height: 120,
    },

    newsBlock: {
        marginTop: 20,
    },

    newsText: {
        fontSize: 16,
    },

    newsTitel: {
        top: 5,
        fontSize: 25,
    },

    zahlenText: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.blue,
    },
});
