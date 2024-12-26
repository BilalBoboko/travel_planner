import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { destinationData } from "../constants";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Destinations() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {destinationData.map((item, index) => {
                return (
                    <DestinationCard 
                        item={item} 
                        key={index} 
                        navigation={navigation} 
                    />
                );
            })}
        </View>
    );
}

const DestinationCard = ({ item, navigation }) => {
    const [isFavorite, setFavorite] = useState(false);

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Destination', { ...item, isFavorite })}
            style={[styles.card, { width: wp(44), height: wp(65) }]}
        >
            <Image
                source={item.image}
                style={[styles.image, { width: wp(44), height: wp(65), borderRadius: 35 }]}
            />

            <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={[
                    styles.gradient,
                    {
                        width: wp(44),
                        height: hp(15),
                        borderBottomLeftRadius: 35,
                        borderBottomRightRadius: 35,
                    },
                ]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />

            <TouchableOpacity
                onPress={() => setFavorite(!isFavorite)}
                style={[styles.heartButton, { backgroundColor: "rgba(255, 255, 255, 0.4)" }]}
            >
                <HeartIcon size={wp(5)} color={isFavorite ? 'red' : "white"} />
            </TouchableOpacity>

            <Text style={[styles.title, { fontSize: wp(4) }]}>{item.title}</Text>
            <Text style={[styles.description, { fontSize: wp(2.2) }]}>{item.shortDescription}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 40,
    },
    card: {
        justifyContent: 'flex-end',
        position: 'relative',
        padding: 16,
        marginBottom: 20,
    },
    image: {
        position: 'absolute',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
    },
    heartButton: {
        position: 'absolute',
        top: 8,
        right: 12,
        padding: 8,
        borderRadius: 50,
    },
    title: {
        color: 'white',
        fontWeight: '600',
    },
    description: {
        color: 'white',
    },
});
