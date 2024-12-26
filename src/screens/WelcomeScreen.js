import React from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Background Image */}
            <Image
                source={require("../../assets/images/welcome.png")}
                style={styles.backgroundImage}
            />

            {/* Content */}
            <View style={styles.content}>
                <LinearGradient
                    colors={["transparent", "rgba(3,105,161,0.8)"]}
                    style={styles.gradient}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />
                <View style={styles.textContainer}>
                    <Text style={[styles.title, { fontSize: wp(10) }]}>
                        Traveling made easy
                    </Text>
                    <Text style={[styles.subtitle, { fontSize: wp(4) }]}>
                        Experience the world's best adventure around the world
                        with us
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={[styles.buttonText, { fontSize: wp(5.5) }]}>
                        Let's Go
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#000", // Защита от пустого фона при ошибке загрузки изображения
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        resizeMode: "cover", // Гарантия правильного отображения изображения
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        gap: 20, // Более современная альтернатива spaceBetween
    },
    gradient: {
        width: "100%",
        height: "60%", // Прямая пропорция вместо функций
        position: "absolute",
        bottom: 0,
    },
    textContainer: {
        marginBottom: 20,
    },
    title: {
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center", // Удобнее для заголовка
    },
    subtitle: {
        color: "#d1d5db", // Цвет с нейтральным оттенком
        fontWeight: "500",
        marginTop: 10,
        textAlign: "center", // Соответствие заголовку
        lineHeight: 24, // Добавлено для улучшенной читаемости текста
    },
    button: {
        backgroundColor: "#f97316", // Яркий акцент
        alignSelf: "center",
        paddingVertical: 14, // Чуть больше для удобства
        paddingHorizontal: 50, // Сбалансированное поле
        borderRadius: 30, // Более современный радиус
        shadowColor: "#000", // Добавлен небольшой эффект тени
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5, // Для устройств Android
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase", // Указывает на интерактивный элемент
        letterSpacing: 1.2, // Увеличенное расстояние между символами для читаемости
    },
});
