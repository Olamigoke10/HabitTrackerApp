import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text>Edit app/index.tsx to edit this screen.</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  navButton: {
    width: 100, 
    height: 20,
    backgroundColor: "coral",
    textAlign: "center",
    borderRadius: 8,
  }
})
