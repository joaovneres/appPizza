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
    <View style={style.container}>
      <Text style={style.textTitle}>Cardápio</Text>

      {loading ? (
        <ActivityIndicator color="#FF4C46" size={45} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={pizzas}
          renderItem={({ item }) => (
            <CardPizza
              key={item.id}
              data={item}
              deleteItem={handleDelete}
              editItem={handleEdit}
              setStatus={setLoading}
            />
          )}
        />
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: 'center',
    color: "#080303",
    marginBottom: 10,
    marginTop: 35,
  },
})