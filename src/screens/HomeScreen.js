import React from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from "../components/categories";
import SortCategories from "../components/sortCategories";
import Destinations from "../components/destinations";

const ios = Platform.OS == "ios";
const topMargin = ios ? 3 : 10;

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.scrollView, { paddingTop: topMargin }]}
            >
                {/* avatar */}
                <View style={styles.header}>
                    <Text style={styles.title}>Let's Discover</Text>
                    <TouchableOpacity>
                        <Image
                            source={require("../../assets/images/avatar.png")}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                </View>

                {/* searchbar */}
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchBar}>
                        <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
                        <TextInput
                            placeholder="Search destination"
                            placeholderTextColor={'gray'}
                            style={styles.searchInput}
                        />
                    </View>
                </View>

                {/* categories */}
                <View style={styles.section}>
                    <Categories />
                </View>

                {/* sort categories */}
                <View style={styles.section}>
                    <SortCategories />
                </View>

                {/* destinations */}
                <View>
                    <Destinations />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 28, // Equivalent to wp(7)
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
    avatar: {
        width: 48, // Equivalent to wp(12)
        height: 48, // Equivalent to wp(12)
    },
    searchBarContainer: {
        marginBottom: 16,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 50,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        marginLeft: 8,
        color: 'gray',
    },
    section: {
        marginBottom: 16,
    },
});
