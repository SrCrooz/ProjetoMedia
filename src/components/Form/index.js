// Importação das dependências necessárias para o componente
import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard} from "react-native"
import ResultMedia from './ResultMedia/index.js';
import styles from "./style.js";

// Definição do componente "Form" como padrão para exportação
export default function Form(){

    // Criação de estados iniciais utilizando o useState
    const[nota1, setNota1]=useState(null) 
    const[nota2, setNota2]=useState(null) 
    const[nota3, setNota3]=useState(null) 
    const[nota4, setNota4]=useState(null) 
    const[messageMedia, setMessageMedia]=useState("Aguardando Valores...") // estado para armazenar a mensagem de resultado do cálculo
    const[media, setMedia]=useState(null) // estado para armazenar o valor do IMC calculado
    const[textButton, setTextButton]=useState("Calcular") // estado para armazenar o texto do botão

    const[errorMessage, setErrorMessage]= useState(null);

    function verificationMedia(){
        if(media == null){
            Vibration.vibrate();//vibra o cell quando da erro
            setErrorMessage("CAMPO OBRIGATÓRIO*")
        }
    }  

    
    function MediaCalculator(){
     return setMedia ((parseFloat (nota1)+ parseFloat (nota2) + parseFloat (nota3) + parseFloat (nota4)) /4) .toFixed(2)
    }

    // Função responsável por validar se os valores de peso e altura foram preenchidos antes de realizar o cálculo
    function validationMedia(){
        if(nota1 != null && nota2 != null && nota3 != null && nota4 != null){
            MediaCalculator()
            setNota1(null)
            setNota2(null)
            setNota3(null)
            setNota4(null)
            setMessageMedia("O resultado é:")
            setTextButton("Calcular novamente")

            //novo
            setErrorMessage(null)


            return
        }
        setMedia(null)
        setTextButton("Calcular")
        setMessageMedia("PREENCHA ALTURA E PESO PARA CALCULAR!")
        verificationMedia()

    }

    // Retorno do componente "Form" que inclui o formulário e o componente personalizado "ResultImc"
    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
        {/* faz com que, ao clicar em qqr lugar da tela o teclado feche */}


            <View style={styles.form}>
            <Text style={styles.formLabel}>Nota 1</Text>
            <TextInput style={styles.input} onChangeText={setNota1} value={nota1}placeholder="Ex: 00" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>


            <Text style={styles.formLabel}>Nota 2</Text>
            <TextInput style={styles.input} onChangeText={setNota2} value={nota2} placeholder="Ex: 00" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>

            <Text style={styles.formLabel}>Nota 3</Text>
            <TextInput style={styles.input} onChangeText={setNota3} value={nota3} placeholder="Ex: 00" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>

            <Text style={styles.formLabel}>Nota 4</Text>
            <TextInput style={styles.input} onChangeText={setNota4} value={nota4} placeholder="Ex: 00" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            

            <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationMedia()}}>
            <Text style={styles.textButtonCalculator}> {textButton}</Text>
            </TouchableOpacity>


            </View>
            <ResultMedia messageResultMedia={messageMedia} resultMedia={media}/>
         </Pressable>
    )
}
