import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import DeletePizza from "./DeletePizza";
import SavePizza from "./SavePizza";

const slider_width = Dimensions.get("window").width;
const item_width = slider_width * 0.9;

export default function CardPizza({ data, deleteItem, editItem, setStatus }) {
  const [modalActive, setModalActive] = useState(false);
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleUpdatePizza = (newPizza, id) => {
    update(id, newPizza, 'pizzas');
    handleCloseModal();
  };

  return (
    <>
      <Card style={styles.container}>
        <Card.Title title={data.flavor} titleStyle={styles.titleCard} />
        <Card.Cover source={{ uri: data.image }} style={styles.image} />
        <Card.Content>
          <Text style={styles.textPrice}>R$ {data.price}</Text>
          <Text style={styles.textCard}>Tamanho: {data.quantity}</Text>
        </Card.Content>
        <Card.Actions style={styles.cardAction}>
          <TouchableOpacity
            style={[styles.cardButton, { backgroundColor: "#FF4C46" }]}
            onPress={() => setModalActive(true)}
          >
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cardButton, { backgroundColor: "#2BA1FF" }]}
            onPress={() => setOpen(true)}
          >
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
      <DeletePizza
        open={modalActive}
        onClose={setModalActive}
        onDeletePizza={deleteItem}
        setStatus={setStatus}
        pizza={data}
      />
      <SavePizza
        open={open}
        onClose={handleCloseModal}
        onUpdatePizza={handleUpdatePizza}
        pizza={data}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 7,
    padding: 10,
    paddingBottom: 2,
    width: item_width,
    alignItems: "center",
  },
  titleCard: {
    fontSize: 20,
    color: "#080303",
    fontWeight: "bold",
  },
  image: {
    height: item_width * 0.9,
    width: item_width * 0.9,
  },
  textPrice: {
    fontSize: 20,
    color: "#080303",
    fontWeight: "bold",
    marginTop: 10,
  },
  textCard: {
    fontSize: 15,
    color: "#080303",
    marginRight: 10,
  },
  cardAction: {
    alignItems: "center",
    flexDirection: "row",
  },
  cardButton: {
    width: "47%",
    borderRadius: 50,
    paddingVertical: 7,
    marginTop: 2,
    marginHorizontal: "1%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
