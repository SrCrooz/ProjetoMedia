import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Estilo para o contexto do formulário
  formContext: {
    width: "70%",
    height: "70%",
    bottom: 0,
    backgroundColor: "#1C1C1C",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderRadius: 50,
    padding: 10,
    marginTop: -100,
  },
  // Estilo para o formulário em si
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 50,
  },
  // Estilo para as labels do formulário
  formLabel: {
    color: "#fff",
    fontSize: 18,
    paddingLeft: 20,
    fontFamily: "Harlow Solid",
  },
  // Estilo para os inputs do formulário
  input: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#7FFFD4",
    height: 40,
    margin: 10,
    paddingLeft: 10,
  },
  // Estilo para o botão do formulário
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#00FA9A",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  // Estilo para o texto dentro do botão do formulário
  textButtonCalculator: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  errorMessage:{
    fontSize:12,
    color: "red",
    fontWeight:"bold",
    paddingLeft:20,
  }
});

export default styles;
