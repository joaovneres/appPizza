import React, { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import CardPizza from "../components/Pizza/CardPizza";
export default function ListPizza() {
  return (
    <View style={style.list}>
      <Text style={style.textTitle}>Bebidas</Text>

      {loading ? (
        <ActivityIndicator color="#121212" size={45} />
      ) : (
        <FlatList
          horizontal
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          data={drinks}
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
