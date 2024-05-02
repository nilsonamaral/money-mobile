import { COLORS, FONT_SIZE } from "../../constants/themes.js"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20
    },
    containerField: {
        marginTop: 30,
        marginBottom: 40,
    },
    inputLabel: {
        fontSize: FONT_SIZE.md,
        color: COLORS.medium_gray,
    },
    inputValor: {
        fontSize: FONT_SIZE.xl,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 3,
        padding: 5,
        fontWeight: "bold",
    },
    inputText: {
        fontSize: FONT_SIZE.md,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 3,
        padding: 5,
    },
    containerBtn: {
        alignItems: "flex-end"
    },
    btn: {
        backgroundColor: COLORS.blue,
        padding: 10,
        borderRadius: 6,
        width: 150,
    },
    btnText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.md,
        textAlign: "center",
    },
    containerDelete: {
        alignItems: "center",
        marginTop: 100,
    },
    btnDelete: {
        width: 80,
        height: 80,
    },
    inputPicker: {
        fontSize: FONT_SIZE.md,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 3,
    }
}

