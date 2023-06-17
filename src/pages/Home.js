import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Home() {
  const navigation = useNavigation();

  const images = [
    'https://www.estrelapizza.com.br/wp-content/uploads/2017/08/banner-1-1.jpg',
    'https://img.freepik.com/psd-gratuitas/menu-de-comida-e-modelo-de-banner-da-web-de-pizza-deliciosa_106176-419.jpg',
    'https://veracepizza.com.br/rp/wp-content/uploads/2022/02/4221027_VERACE_BANNERS_PROMO-VERACE_MF_2.03-1-1-1200x923.png',
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { marginTop: 20, color: "#080303" }]}>
        Promoções da semana!
      </Text>
      <View style={styles.containerLogo}>
        <FlatList
          data={images}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Image source={{ uri: item }} style={styles.image} />
            </View>
          )}
        />
      </View>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Pizzaria Delícias, a melhor pizza da região!
        </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Pizzas') }}>
          <Text style={[styles.title, { marginTop: 8, fontSize: 20 }]}>
            Veja nosso cardápio
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerLogo: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FF4C46",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "20%",
    marginBottom: 10,
    color: "#FAFBFA",
    textAlign: "center",
  },
  text: {
    color: "#a1a1a1",
  },
  slide: {
    width: 370,
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
