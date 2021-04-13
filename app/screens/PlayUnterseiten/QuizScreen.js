//Librarys
import React, { useState } from "react";
import { Text, View, Image, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";

//Styles
import mainStyle from "../../components/Styles/mainStyleSheet.js";
import quizStyle from "../../components/Styles/QuizStyleSheet.js";
import Colors from "../../constants/colors";

export default function QuizHomeScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [erstehilfeIsSelected, erstehilfeSetSelection] = useState(false);
  const [brandIsSelected, brandSetSelection] = useState(false);
  const [virusIsSelected, virusSetSelection] = useState(false);
  const [verkehrsunfallIsSelected, verkehrsunfallSetSelection] = useState(
    false
  );
  const [ueberschwemmungIsSelected, ueberschwemmungSetSelection] = useState(
    false
  );
  const [terrorismusIsSelected, terrorismusSetSelection] = useState(false);

  return (
    <View style={mainStyle.container}>
      <Text style={quizStyle.ShadowText}>Quiz</Text>
      <View style={quizStyle.layout}>
        <View style={[mainStyle.box, quizStyle.boxSize]}>
          <View style={{ flex: 4 }}>
            <Text style={[mainStyle.titel, { flex: 0 }]}>Gefahren-Quiz</Text>
            <Text style={mainStyle.h1}>Teste dein Wissen über gefahren</Text>
          </View>
          <View style={{ flex: 4, flexDirection: "row" }}>
            <Image
              source={require("../../assets/QuizScreen/Feuer.png")}
              style={quizStyle.feuerImage}
            />
            <View>
              <Text style={quizStyle.hindText}>Erfahere mehr über</Text>
              <Text style={quizStyle.hindText}>Brände in der Bibliothek</Text>
            </View>
          </View>
          <View style={mainStyle.orangeBottomInBox}>
            <Text style={quizStyle.hiScoreText}>
              Dein erreicheter Hi-Score:
            </Text>
            <Text style={quizStyle.hiScore}>2100 Punkte</Text>
          </View>
          <View style={{ elevation: 20, zIndex: 40 }}>
            <Image
              source={require("../../assets/QuizScreen/QuizPerson.png")}
              style={quizStyle.QuizPersonImage}
            />
          </View>
        </View>

        <Modal visible={modalOpen} animationType="slide" transparent={true}>
          <View style={quizStyle.centeredView}>
            <View style={[mainStyle.box, quizStyle.modalView]}>
              <View style={{ flexDirection: "row" }}>
                <Text style={mainStyle.titel}>Einstellungen</Text>
                <MaterialIcons
                  name="close"
                  color={Colors.orange}
                  size={35}
                  onPress={() => setModalOpen(false)}
                />
              </View>
              <View style={quizStyle.kategorienContainer}>
                <Text style={quizStyle.kategorieText}>Quizkategorien</Text>
                <View style={{ flexDirection: "row" }}>
                  <CheckBox
                    value={erstehilfeIsSelected}
                    onValueChange={erstehilfeSetSelection}
                  />
                  <Text style={quizStyle.kategorien}>Erste Hilfe</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <CheckBox
                    value={brandIsSelected}
                    onValueChange={brandSetSelection}
                  />
                  <Text style={quizStyle.kategorien}>Brand</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <CheckBox
                    value={virusIsSelected}
                    onValueChange={virusSetSelection}
                  />
                  <Text style={quizStyle.kategorien}>Virus</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <CheckBox
                    value={verkehrsunfallIsSelected}
                    onValueChange={verkehrsunfallSetSelection}
                  />
                  <Text style={quizStyle.kategorien}>Verkehrunfall</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <CheckBox
                    value={ueberschwemmungIsSelected}
                    onValueChange={ueberschwemmungSetSelection}
                  />
                  <Text style={quizStyle.kategorien}>Überschwemmung</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <CheckBox
                    value={terrorismusIsSelected}
                    onValueChange={terrorismusSetSelection}
                  />
                  <Text style={quizStyle.kategorien}>Terrorismus</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={[mainStyle.box, quizStyle.startButton]}
            onPress={() => navigation.navigate("ErsteFrage")}
          >
            <Text style={quizStyle.startText}>Jetzt Starten</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[mainStyle.box, quizStyle.settingButton]}
            onPress={() => setModalOpen(true)}
          >
            <Image
              source={require("../../assets/QuizScreen/Einstellungen.png")}
              style={quizStyle.settingImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
