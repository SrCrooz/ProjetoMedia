// importa os componentes necessários do React e do React Native 
import { StyleSheet, Text, View } from 'react-native';

// importa os componentes personalizados "Title" e "Main" definidos em outros arquivos
import Title from './src/components/Title';
import Form from './src/components/Form';

// Define o componente "App"
export default function App() {
  
  // Retorna uma estrutura de elementos React Native 
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
