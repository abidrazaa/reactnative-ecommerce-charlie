import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { colors } from "../../constants";
import logo from "../../assets/logo/logo_white.png";

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("login");
  }, 4000);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={{fontSize: 20,
    fontWeight: "600", color : "white"}}>CreditBook</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  splashText: {
    color: colors.light,
    fontSize: 50,
    fontWeight: "bold",
  },
  logo: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
});
