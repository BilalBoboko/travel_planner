import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";
import {
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../themes";
import { sortCategoryData } from "../constants";

export default function SortCategories() {
    const [activeSort, setActiveSort] = useState("Popular");

    return (
        <View style={styles.container}>
            {sortCategoryData.map((sort, index) => {
                const isActive = sort === activeSort;

                return (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.button,
                            isActive && styles.activeButton,
                        ]}
                        onPress={() => setActiveSort(sort)}
                    >
                        <Text
                            style={[
                                styles.text,
                                { color: isActive ? theme.text : "rgba(0,0,0,0.6)" },
                            ]}
                        >
                            {sort}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: 16,
        backgroundColor: "#f5f5f5", // аналог bg-neutral-100
        borderRadius: 50,
        padding: 8,
        paddingHorizontal: 16,
    },
    button: {
        padding: 12,
        borderRadius: 50,
    },
    activeButton: {
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontWeight: "600",
        fontSize: wp(4),
    },
});
