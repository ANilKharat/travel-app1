import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Avatar, travelRoundImage } from "../../../assets/images";

import IonicIcons from "react-native-vector-icons/Ionicons";

export default CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        {/* <ImageBackground source={travelRoundImage} style={{ padding: 20 }}> */}
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={Avatar}
            style={{ borderRadius: 50, height: 50, width: 50 }}
          />
          <Text style={{ color: "#fff", marginTop: 10 }}>Anil Kharat</Text>
        </View>
        {/* </ImageBackground> */}
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IonicIcons name="share-social-outline" size={22} />
            <Text style={{ fontSize: 18, marginLeft: 15, fontWeight: "bold" }}>
              Share with friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IonicIcons name="exit-outline" size={22} />
            <Text style={{ fontSize: 18, marginLeft: 15, fontWeight: "bold" }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
