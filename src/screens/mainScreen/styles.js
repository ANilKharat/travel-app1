import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#8df3fc",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    justifyContent: "space-between",
    marginBottom: "10%",
  },
});
