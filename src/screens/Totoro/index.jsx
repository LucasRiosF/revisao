import { View } from "react-native";

import styles from "./styles";
import MyButton from "../../components/MyButton";
import MyTitle from "../../components/MyTitle";

export default function Totoro() {
  return (
    <View style={styles.container}>
      <MyTitle title={"My Neighbor Totoro"} />

      <MyButton screen={"Home"} name={"Back to Home"} />
    </View>
  );
}