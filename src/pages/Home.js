import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import Carousel from 'react-native-snap-carousel';

const CarouselScreen = () => {
  const data = [
    { id: 1, image: 'https://www.circuitodenoticias.com.br/up/img/1605108003.jpeg' },
    { id: 2, image: 'https://pizzariabaggio.com.br//wp-content/uploads/2022/07/27-JUL-2022-Promoc%CC%A7a%CC%83o-Combo-Site-1-1024x444.jpg' },
    { id: 3, image: 'https://static.wixstatic.com/media/6e4feb_74c4ab0444b7413db81e878ecfd6a2f7~mv2.png/v1/fill/w_548,h_548,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/C%C3%B3pia%20de%20combo%20promocional.png' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={300}
      />
    </View>
  );
};

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <CarouselScreen />
      </View>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Pizzaria Delícias, a melhor pizza da região!
        </Text>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFBFA",
  },
  containerLogo: {
    flex: 1.5,
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
    marginLeft: "2%",
    marginRight: "2%",
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
  carouselContainer: {
    alignItems: 'center',
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  slide: {
    width: 300,
    height: 300,
    backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
