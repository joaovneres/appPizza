import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import DeletePizza from "./DeletePizza";

export default function CardPizza({ data, deleteItem, editItem }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Card style={styles.container}>
        <Card.Title title={data.name} titleStyle={styles.titleCard} />
        <Card.Cover source={{ uri: data.image }} style={styles.image} />
        <Card.Content>
          <Text style={styles.textPrice}>R$ {data.price}</Text>
          <Text style={styles.textCard}>Tamanho: {data.quantity}</Text>
        </Card.Content>
        <Card.Actions style={styles.cardAction}>
          <TouchableOpacity
            style={[styles.cardButton, { backgroundColor: "#9C4744" }]}
            onPress={() => setModalActive(true)}
          >
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cardButton, { backgroundColor: "#365C8E" }]}
            onPress={() => editItem(data)}
          >
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
      <DeletePizza
        open={modalActive}
        onClose={setModalActive}
        onDeletePizza={deleteItem}
        pizza={data}
      />
    </>
  );
}
