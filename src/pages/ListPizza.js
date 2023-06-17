import React, { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import CardPizza from "../components/Pizza/CardPizza";
import { list, remove, update } from "../services/connectionFirebase";
export default function ListPizza() {

  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  async function findPizzas() {
    await list('pizzas', setPizzas);
    if (pizzas.length > 0) {
      setLoading(false);
    }
  }

  useEffect(() => {
    findPizzas();
  }, [pizzas.length]);

  const handleDelete = (pizza) => {
    remove(pizza.id, 'pizzas');
    setPizzas([]);
  };

  const handleEdit = (newPizza, id) => {
    update(id, newPizza, 'pizzas');
    setPizzas([]);
  };

  return (
    <View >
      <Text style={style.textTitle}>Bebidas</Text>

      {loading ? (
        <ActivityIndicator color="#121212" size={45} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.key}
          data={pizzas}
          renderItem={({ item }) => (
            <CardPizza
              data={item}
              deleteItem={handleDelete}
              editItem={handleEdit}
            />
          )}
        />
      )}
    </View>
  );
}

const style = StyleSheet.create({

  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: 'center',
    color: "#33503d",
    marginBottom: 10,
    marginTop: 20,
  },
})