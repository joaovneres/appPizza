import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, SafeAreaView, TextInput } from "react-native";

const SavePizza = ({ open, onClose, onUpdatePizza, pizza }) => {
    const [flavor, setFlavor] = useState(pizza.flavor);
    const [image, setImage] = useState(pizza.image);
    const [category, setCategory] = useState(pizza.category);
    const [ingredients, setIngredients] = useState(pizza.ingredients);
    const [price, setPrice] = useState(pizza.price.toString());
    const inputRef = useRef(null);


    const handleUpdatePizza = () => {
        const newPizza = {
            flavor,
            image,
            category,
            ingredients,
            price
        };
        onUpdatePizza(newPizza);
        setFlavor('');
        setImage('');
        setCategory('');
        setIngredients('');
        setPrice('');
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={open}
            onClose={onClose}
            onRequestClose={() => onClose(false)}
        >
            <View style={style.outerView}>
                <SafeAreaView style={style.modalView}>
                    <Text style={style.textTitle}>
                        Atualizar pizza
                    </Text>
                    <TextInput
                        placeholder='Sabor'
                        style={style.input}
                        value={flavor}
                        onChangeText={(text) => setFlavor(text)}
                        ref={inputRef}
                    />
                    <TextInput
                        placeholder='Ingredientes'
                        style={[style.input,]}
                        value={ingredients}
                        onChangeText={(text) => setIngredients(text)}
                        ref={inputRef}
                    />
                    <View style={style.conjunInput}>
                        <TextInput
                            placeholder='Preço'
                            style={[style.input, { width: "47%" }]}
                            value={price}
                            onChangeText={(text) => setPrice(text)}
                            ref={inputRef}
                        />
                        <TextInput
                            placeholder='Categoria'
                            style={[style.input, { width: "47%" }]}
                            value={category}
                            onChangeText={(text) => setCategory(text)}
                            ref={inputRef}
                        />
                    </View>

                    <View style={style.conjunInput}>
                        <TextInput
                            placeholder='Imagem'
                            style={style.input}
                            value={image}
                            onChangeText={(text) => setImage(text)}
                            ref={inputRef}
                        />
                    </View>
                    <TouchableOpacity style={style.button} onPress={handleUpdatePizza}>
                        <Text style={style.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: 'center',
        color: "#080303",
        marginBottom: 10,
        marginTop: 20,
    },
    input: {
        marginTop: 7,
        marginBottom: 3,
        marginHorizontal: 5,
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 50,
        width: 335,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414',
        flexDirection: 'row',
        maxHeight: 300,
        maxWidth: 300,
    },
    conjunInput: {
        flexDirection: "row"
    },
    button: {
        backgroundColor: "#15BF4E",
        width: 200,
        borderRadius: 50,
        paddingVertical: 15,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    outerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
        backgroundColor: "#fff",
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: 350,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center'
    },
    modalText: {
        color: "#080303",
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 2
    },
    buttonTextModal: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "bold"
    },
    cardButton: {
        width: "47%",
        borderRadius: 50,
        paddingVertical: 7,
        marginTop: 2,
        marginHorizontal: "1%",
        alignItems: "center",
    },
})

export default SavePizza;