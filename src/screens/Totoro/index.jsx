import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Totoro() {
  const navigation = useNavigation();
  return (
    <View>
      <Text> My Neighbor Totoro </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Back To Home</Text>
      </TouchableOpacity>
    </View>
  );
}