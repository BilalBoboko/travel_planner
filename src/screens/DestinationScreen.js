import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon, ClockIcon, HeartIcon, MapPinIcon, SunIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { theme } from "../themes";

export default function DestinationScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();
    const [isFavorite, setFavorite] = useState(props.route.params.isFavorite);

    return (
        <View style={styles.container}>
            <Image
                source={item.image}
                style={styles.image}
            />
            <StatusBar style="light" />

            <SafeAreaView style={styles.safeArea}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <ChevronLeftIcon size={wp(7)} strokeWidth={4} color={"white"} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setFavorite(!isFavorite)}
                    style={styles.favoriteButton}
                >
                    <HeartIcon
                        size={wp(7)}
                        strokeWidth={4}
                        color={isFavorite ? "red" : "white"}
                    />
                </TouchableOpacity>
            </SafeAreaView>

            {/* title description and booking button */}
            <View style={styles.detailsContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollView}
                >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item?.title}</Text>
                        <Text style={styles.price}>${item?.price}</Text>
                    </View>

                    <Text style={styles.description}>{item?.longDescription}</Text>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoBlock}>
                            <ClockIcon size={wp(7)} color={"skyblue"} />
                            <View style={styles.infoText}>
                                <Text style={styles.infoValue}>{item.duration}</Text>
                                <Text style={styles.infoLabel}>Duration</Text>
                            </View>
                        </View>

                        <View style={styles.infoBlock}>
                            <MapPinIcon size={wp(7)} color={"#f87171"} />
                            <View style={styles.infoText}>
                                <Text style={styles.infoValue}>{item.distance}</Text>
                                <Text style={styles.infoLabel}>Distance</Text>
                            </View>
                        </View>

                        <View style={styles.infoBlock}>
                            <SunIcon size={wp(7)} color={"orange"} />
                            <View style={styles.infoText}>
                                <Text style={styles.infoValue}>{item.weather}</Text>
                                <Text style={styles.infoLabel}>
                                    {item.weather.split(' ')[0] > 25 ? 'Sunny' : 'Cold'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: wp(100),
        height: hp(55),
    },
    safeArea: {
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
    },
    backButton: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: 10,
        marginLeft: 20,
        borderRadius: 50,
    },
    favoriteButton: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: 10,
        marginRight: 20,
        borderRadius: 50,
    },
    detailsContainer: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'white',
        marginTop: -14,
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    scrollView: {
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: wp(7),
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
    price: {
        fontSize: wp(7),
        fontWeight: '600',
        color: theme.text,
    },
    description: {
        fontSize: wp(3.7),
        color: '#4A4A4A',
        marginBottom: 10,
        lineHeight: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    infoValue: {
        fontSize: wp(4.5),
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
    infoLabel: {
        fontSize: wp(4),
        color: '#A5A5A5',
    },
    bookButton: {
        backgroundColor: theme.bg(0.8),
        height: wp(15),
        width: wp(50),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        alignSelf: 'center',
    },
    bookButtonText: {
        fontSize: wp(5.5),
        fontWeight: 'bold',
        color: 'white',
    },
});
