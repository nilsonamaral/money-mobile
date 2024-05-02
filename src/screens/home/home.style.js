import { COLORS, FONT_SIZE } from "../../constants/themes.js"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        padding: 20
    },
    logo: {
        width: 130,
        height: 30,
        marginTop: 15,
        marginBottom: 10
    },
    dashboard: {
        width: "100%",
        backgroundColor: COLORS.blue,
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dashboardValor: {
        color: COLORS.white,
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold",
    },
    dashboardTexto: {
        color: COLORS.white,
        fontSize: FONT_SIZE.sm,
    },
    dashboardImage: {
        width: 35,
        height: 65,
    },
    despesasTitulo: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        fontWeight: "bold",
        marginTop: 15,
    },
    btnAdd: {
        position: "absolute",
        bottom: 12
    },
    btnAddImage: {
        width: 60,
        height: 60
    }
}