import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  AppStack,
  // AuthStack
} from "./src/navigation";

const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
