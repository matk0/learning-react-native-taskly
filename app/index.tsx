import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container} testID="app-root">
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "white" }]} />
      <ShoppingListItem name="The Elysian Grand" />
      <ShoppingListItem name="Celestia Royal" />
      <ShoppingListItem name="Véronique Manor" />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
