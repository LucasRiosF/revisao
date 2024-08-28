import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text> Home Screen </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Totoro")}>
        <Text>Go To Totoro</Text>
      </TouchableOpacity>
    </View>
  );
}