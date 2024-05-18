import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native"
import { styles } from "./cad-despesa.style";
import icons from "../../constants/icons.js"
import { Picker } from "@react-native-picker/picker"
import api from "../../services/api.js";


const CadDespesa = (props) => {

    const [valor, setValor] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")

    const handleSalvar = async () => {
        // salvar na API...
        try {
          if (props.route.params.id > 0) {
            await api.put("despesas/" + props.route.params.id, {
              descricao,
              categoria,
              valor
            })
          } else {
            await api.post("despesas", {
              descricao,
              categoria,
              valor
          })
        }
        props.navigation.navigate("home")
        } catch (error) {
          console.log(error)
          Alert.alert("Erro ao salvar dados")
        }
    }

    const handleExcluir = async () => {
        // excluir na API...
        try {
            await api.delete("despesas/" + props.route.params.id)
              props.navigation.navigate("home")
        } catch (error) {
          console.log(error)
          Alert.alert("Erro ao excluir dados")
        }
    }

    const DadosDespesas = async (id) => {
      try {
            
        // Buscar dados na APi
        const response = await api.get("/despesas/" + id)
        setDescricao(response.data.descricao)
        setCategoria(response.data.categoria)
        setValor(response.data.valor)

    } catch (error) {
        console.log(error)
        Alert.alert("Erro ao acessar dados da despesa")
    }
    }

    useEffect(() => {
      // Tratar o texto do Header
      props.navigation.setOptions({title: props.route.params.id > 0 ? "Editar despesas" : "Nova despesa"})

      // Buscar dados da despesa na API
      if (props.route.params.id > 0) {
          DadosDespesas(props.route.params.id)
      }
    }, [])

    return <View style={styles.container} >
              <View style={styles.containerField}>
                <Text style={styles.inputLabel}>Valor</Text>
                <TextInput placeholder="0,00" style={styles.inputValor} defaultValue={valor.toString()} keyboardType="decimal-pad"
                onChangeText={(texto) => setValor(texto)}></TextInput>
              </View>

              <View style={styles.containerField} > 
                <Text style={styles.inputLabel}>Descrição</Text>
                <TextInput placeholder="Ex: Aluguel" style={styles.inputText} defaultValue={descricao} onChangeText={(texto) => setDescricao(texto)}></TextInput>
              </View>

              <View style={styles.containerField} > 
                <Text style={styles.inputLabel}>Categoria</Text>

                    <View style={styles.inputPicker}>
                        <Picker selectedValue={categoria} onValueChange={(itemValue, itemIndex) => {
                            setCategoria(itemValue)
                        }} >
                            <Picker.Item label="Carro" value="Carro" />
                            <Picker.Item label="Casa" value="Casa" />
                            <Picker.Item label="Lazer" value="Lazer" />
                            <Picker.Item label="Mercado" value="Mercado" itemStyle={{padding:0}} />
                            <Picker.Item label="Educação" value="Educação" />
                            <Picker.Item label="Viagem" value="Viagem" />

                        </Picker>
                    </View>
              </View>

              <View style={styles.containerBtn} > 
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText} onPress={handleSalvar}>Salvar</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerDelete} > 
                <TouchableOpacity onPress={handleExcluir}>
                        <Image source={icons.remove} style={styles.btnDelete}/>
                </TouchableOpacity>
              </View>
     </View>
}

export default CadDespesa;