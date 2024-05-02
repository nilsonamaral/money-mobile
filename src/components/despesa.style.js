import { COLORS, FONT_SIZE } from "../constants/themes.js"

export const styles = {
    despesa: {
        width: "100%",
        backgroundColor: COLORS.gray,
        marginTop: 10,
        padding: 12,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    despesaIcon: {
        width: 35,
        height: 35,
    },
    containerIcon: {
        flex: 3,
    },
    containerCategoria: {
        flex:10
    },
    containerValor: {
        flex:4,
    },
    despesaCategoria: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.medium_gray,
        fontWeight: "bold"
    },
    despesaDescricao:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.medium_gray,
    },
    despesaValor: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        fontWeight: "bold",
        textAlign: "right"
    }
}