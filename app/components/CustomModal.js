import React, {Component} from "react";
import {Text, StyleSheet, View, Image, Dimensions} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import Modal from "react-native-modalbox";
import Colors from "../constants/colors.js";
import {MaterialIcons} from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class CustomModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
        };
    }
    getStyle(img) {
        if (img != null) {
            return {
                width: windowWidth * 0.8,
                height: windowHeight * 0.3,
                justifyContent: "flex-start",
                marginLeft: 30,
                marginRight: 30,
            };
        }
    }
    setModalVisible() {
        this.setState({modalVisible: !this.state.modalVisible});
    }
    render() {
        const {modalVisible} = this.state;
        const {content} = this.props;
        const modalText = content.map((topic, index) => (
            <View key={index}>
                <Text key={"headline" + index} style={styles.headlineText}>
                    {topic.headline}
                </Text>
                <Text key={"text" + index} style={styles.p}>
                    {topic.text}
                </Text>
                <Image
                    key={"image" + index}
                    source={{uri: topic.image}}
                    style={this.getStyle(topic.image)}
                ></Image>
                {topic.subtitle ? (
                    <View key={index}>
                        {topic.subtitle.map((subtopic, index) => (
                            <View key={index}>
                                <Text key={"titel" + index} style={styles.titleText}>
                                    {subtopic.title}
                                </Text>

                                {subtopic.list ? (
                                    <View key={index}>
                                        {subtopic.list.map((list, index) => (
                                            <View style={{flexDirection: "row"}} key={index}>
                                                <Text
                                                    style={styles.listPoint}
                                                    key={"point" + index}
                                                >
                                                    &#8226;
                                                </Text>
                                                <Text key={"list" + index} style={styles.listText}>
                                                    {list}
                                                </Text>
                                            </View>
                                        ))}
                                    </View>
                                ) : null}
                            </View>
                        ))}
                    </View>
                ) : null}
                <View style={{height: 20}}></View>
            </View>
        ));
        return (
            <Modal
                style={styles.modal}
                animationType="slide"
                swipeArea={200}
                backdropPressToClose={true}
                swipeToClose={true}
                swipeThreshold={150}
                backdrop={true}
                backdropOpacity={0.3}
                backdropColor={Colors.orange}
                position="bottom"
                isOpen={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <MaterialIcons
                            name="close"
                            color={Colors.orange}
                            size={35}
                            style={styles.closeIcon}
                            onPress={() => this.setModalVisible()}
                        />
                        <ScrollView>{modalText}</ScrollView>
                    </View>
                </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    modalView: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        width: windowWidth,
        height: windowHeight * 0.76,
        alignItems: "center",
        padding: 10,
    },
    modal: {
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        width: windowWidth,
        height: windowHeight * 0.76,
        alignItems: "center",
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22,
    },

    closeIcon: {
        alignSelf: "flex-end",
        marginRight: 5,
    },

    headlineText: {
        margin: 10,
        marginTop: 0,
        marginRight: 30,
        justifyContent: "flex-start",
        color: Colors.orange,
        fontSize: 26,
        fontWeight: "bold",
        // textAlign: 'center',
    },
    p: {
        paddingLeft: 10,
        marginRight: 30,
        paddingBottom: 5,
        justifyContent: "flex-start",
        color: Colors.black,
        fontSize: 16,
    },
    titleText: {
        paddingLeft: 10,
        marginRight: 30,
        paddingBottom: 5,
        justifyContent: "flex-start",
        color: Colors.lightOrange,
        fontSize: 22,
    },
    listPoint: {
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "flex-start",
        color: Colors.lightOrange,
        fontSize: 30,
        marginTop: -10,
    },
    listText: {
        paddingLeft: 0,
        marginRight: 50,
        justifyContent: "flex-start",
        color: Colors.black,
        fontSize: 16,
    },

    image: {
        width: windowWidth * 0.75,
        height: windowHeight * 0.25,
        justifyContent: "flex-start",
        marginLeft: 30,
        marginRight: 30,
    },
});
