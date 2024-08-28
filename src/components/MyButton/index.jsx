import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextButton from '../TextButton';

const MyButton = ({ screen, name }) => {
    const navigation = useNavigation();
  return (
  <TouchableOpacity onPress={() => navigation.navigate({screen})}>
    <TextButton title={name}/>
  </TouchableOpacity>
  );
};

export default MyButton;