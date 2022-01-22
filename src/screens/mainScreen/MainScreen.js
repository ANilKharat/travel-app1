import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles";

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Trek &amp; Travel</Text>
        <MaterialIcons name="arrow-forward-ios" size={50} color="#fff" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Lets Go...</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainScreen;
