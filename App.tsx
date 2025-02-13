import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ShoppingListItem } from "./components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "white" }]} />
      <ShoppingListItem name="Milk" isCompleted />
      <ShoppingListItem name="Water" />
      <ShoppingListItem name="Steak" />
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
