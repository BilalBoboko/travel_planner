import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../themes";
import { categoriesData } from '../constants';

export default function Categories() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Categories</Text>
                <TouchableOpacity>
                    <Text style={[styles.title, { color: theme.text }]}>See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={styles.scrollContainer}
                showsHorizontalScrollIndicator={false}
            >
                {categoriesData.map((cat, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.categoryContainer}>
                            <Image 
                                source={cat.image} 
                                style={styles.categoryImage} 
                            />
                            <Text style={styles.categoryTitle}>{cat.title}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        gap: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    title: {
        fontSize: wp(4),
        fontWeight: '600',
        color: '#4A4A4A', // equivalent to text-neutral-700
    },
    scrollContainer: {
        paddingHorizontal: 15,
    },
    categoryContainer: {
        alignItems: 'center',
        marginRight: 15,
    },
    categoryImage: {
        borderRadius: 15,
        width: wp(20),
        height: wp(19),
    },
    categoryTitle: {
        marginTop: 8,
        fontSize: wp(3.5),
        fontWeight: '500',
        color: '#4A4A4A', // equivalent to text-neutral-700
    },
});
