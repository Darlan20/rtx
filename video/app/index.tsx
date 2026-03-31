import React,{useState}from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
const [peso, setPeso] = useState("");
const [altura, setAltura] = useState("");
const [situacao, setSituacao] = useState("");
const [resultado, setResultado] = useState("");
  return (

    <View style= {estilos.caixa}>
      <Text style={estilos.titulo}>Calculadora de IMC 2026</Text>
      <TextInput style={estilos.input}
      
        placeholder="Digite o valor do peso: "
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput style={estilos.input}
        placeholder="Digite o valor da altura: "
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC"/>
      <View style={estilos.resultado}>
      <Text style={estilos.textoResultado}>IMC:{resultado} </Text>
      <Text style={estilos.textoResultado}>Situação: {situacao} </Text>
      
      
      </View>
    </View>

  );
}

const estilos = StyleSheet.create({
caixa: {
  flex: 1,
  backgroundColor: "#222580ff",
  justifyContent: "center",
  alignItems: "center",
  padding: 20
},

titulo:{
  fontSize: 30,
  marginBottom: 60,
  fontWeight: 'bold'
},

input: {
  width: "100%",
  height: 50,
  backgroundColor: "#ffffffff",
  borderRadius: 60,
  paddingHorizontal: 20,
  marginBottom: 20
},

resultado: {
  marginTop: 20,
  alignItems: "flex-start",
  backgroundColor: "white",
  width: 300,
  height: 100,
  justifyContent: "center",
  borderRadius: 10,
  elevation: 5,
  padding: 5,
},

textoResultado: {
  fontSize:20,
  marginBottom:10,
  fontWeight: "bold",

}


})
