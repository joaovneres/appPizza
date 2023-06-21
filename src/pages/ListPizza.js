import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import CardPizza from "../components/Pizza/CardPizza";
import { list, remove, update } from "../services/connectionFirebase";
import { useIsFocused } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

export default function ListPizza() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  async function findPizzas() {
    await list("pizzas", setPizzas);
    if (pizzas.length > 0) {
      setLoading(false);
    }
  }

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setPizzas([]);
    }
  }, [isFocused]);

  useEffect(() => {
    findPizzas();
  }, [pizzas.length]);

  const handleDelete = (pizza) => {
    if (remove(pizza.id, "pizzas")) {
      alert("Deletada com sucesso.");
    } else {
      alert("Erro ao deletar.");
    }
    setPizzas([]);
  };

  const handleEdit = (newPizza, id) => {
    if (update(id, newPizza, "pizzas")) {
      alert("Atualizada com sucesso.");
    } else {
      alert("Erro ao atualizar.");
    }
    setPizzas([]);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <View style={style.container}>
      <Text style={style.textTitle}>Cardápio</Text>

      <View style={style.pickerContainer}>
        <Picker
          selectedValue={filter}
          onValueChange={(itemValue) => handleFilterChange(itemValue)}
          style={style.picker}
        >
          <Picker.Item label="Todas" value="all" />
          <Picker.Item label="Doces" value="doce" />
          <Picker.Item label="Salgadas" value="salgada" />
        </Picker>
      </View>
      {loading ? (
        <ActivityIndicator color="#FF4C46" size={45} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={
            filter === "all"
              ? pizzas
              : pizzas.filter((pizza) => pizza.category === filter)
          }
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
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    color: "#080303",
    marginBottom: 5,
    marginTop: 35,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#141414",
    borderRadius: 100,
    overflow: "hidden",
    marginTop: 7,
    marginBottom: 7,
    marginHorizontal: 5,
    justifyContent: "center",
    width: "50%",
  },
  picker: {
    height: 30,
    width: 335,
    backgroundColor: "#fff",
    padding: 10,
    width: "100%",
  },
});
