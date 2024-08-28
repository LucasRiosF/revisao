import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

import styles from "./styles";
import MyButton from "../../components/MyButton";
import MyTitle from "../../components/MyTitle";

export default function Ghibli() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [personagem, setPersonagem] = useState("");

  const cadastrar = () => {
    console.log(`Nome do Filme: ${nomeFilme} - Personagem: ${personagem}`);
  };

  return (
    <View style={styles.container}>
      <MyTitle title={"Ghibli Screen"} />

      <MyButton screen={"Totoro"} name={"Go To Totoro"} />
      <MyButton screen={"Home"} name={"Go To Home"} />

      <View>
        <Text>Cadastro de Novo Filme</Text>

        <TextInput
          placeholder="Nome do Filme"
          value={nomeFilme}
          onChangeText={setNomeFilme}
        />

        <TextInput
          placeholder="Personagem principal"
          value={personagem}
          onChangeText={setPersonagem}
        />

        <TouchableOpacity onPress={cadastrar}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}