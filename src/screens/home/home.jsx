import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import icons from "../../constants/icons.js"
import Despesas from "../../components/despesa.jsx"
import {styles} from "./home.style.js"
import { useEffect, useState, useCallback } from "react"
import api from "../../services/api.js"
import { useFocusEffect } from "@react-navigation/native"

const Home = (props) => {

    const [total, setTotal] = useState(0)
    const [despesas, setDespesas] = useState([])

    
    const listarDespesas = async () => {

        try {
            
            // Buscar dados na APi
            const response = await api.get("/despesas")
            setDespesas(response.data)

            // Calcula a soma das despesas
            let soma = 0
            for (var i=0; i < response.data.length; i++)
            soma = soma + Number(response.data[i].valor)
    
            setTotal(soma)
        } catch (error) {
            
        }
    }

    useFocusEffect(useCallback(() => {
        listarDespesas()
    }, []))

    const OpenDespesa = (id) => {
        props.navigation.navigate("despesas", {
            id
        })
    }

    return <View style={styles.container} > 
        <Image source={icons.logo} style={styles.logo}/>

     <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.dashboard} >
            <View>
                <Text style={styles.dashboardValor}>R$ {total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</Text>
                <Text style={styles.dashboardTexto}>Total de gastos</Text>
            </View>
            <Image style={styles.dashboardImage} source={icons.money} />
        </View>

        <View>
            <Text style={styles.despesasTitulo}>Despesas</Text>

        {
            despesas.map((desp) => {
                return <Despesas    key={desp.id}
                                    id={desp.id}
                                    icon={desp.categoriaDetalhe.icon}
                                    categoria={desp.categoria}
                                    descricao={desp.descricao}
                                    valor={desp.valor}
                                    onClick={OpenDespesa}
                />
            })
        }

        </View>
     </ScrollView>

    <TouchableOpacity style={styles.btnAdd} onPress={() => OpenDespesa(0)} >
         <Image source={icons.add} style={styles.btnAddImage} />
    </TouchableOpacity>

    </View>
}

export default Home;