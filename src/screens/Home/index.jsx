import { View } from "react-native";

import styles from "./styles";
import MyButton from "../../components/MyButton";
import MyTitle from "../../components/MyTitle";


export default function Home() {
  return (
    <View style={styles.container}>
      <MyTitle title={"Home Screen"} />

      <MyButton screen={"Totoro"} name={"Go To Totoro"} />
    </View>
  );
}