import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.headerRow}>
      <TextInput
        style={styles.headerSearch}
        value={search}
        onChangeText={(val) => setSearch(val)}
        placeholder="Algum modelo em especial? Procure aqui!"
      />
      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() => onSearch(search)}
        >
        <Text>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerSearch: {
    backgroundColor: "white",
    paddingLeft: 8,
    height: 48,
    borderRadius: 14,
    flexGrow: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerIcon: {
    width: 48,
    height: 48,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
  },
});
