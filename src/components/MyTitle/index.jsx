import { Text } from 'react-native';
import styles from "./styles";

const MyTitle = ({title}) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

export default MyTitle;