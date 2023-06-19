import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
export default function DeletePizza({ open, onClose, onDeletePizza, setStatus, pizza }) {
  if (!pizza) {
    return null;
  }
  const handleDelete = () => {
    setStatus(true)
    onDeletePizza(pizza);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onClose={onClose}
      onRequestClose={() => onClose(false)}
    >
      <View style={styles.outerView}>
        <View style={styles.modalView}>
          <Text style={[styles.modalText, { fontSize: 20 }]}>
            Deseja remover a pizza:
          </Text>
          <Text style={styles.modalText}>Nome: {pizza.flavor}</Text>
          <Text style={styles.modalText}>Preço(R$): {pizza.price}</Text>
          <Text style={styles.modalText}>Ingredientes: {pizza.ingredients}</Text>
          <View style={[styles.cardAction, { marginTop: 10 }]}>
            <TouchableOpacity
              style={[styles.cardButton, { backgroundColor: "#E85333" }]}
              onPress={onClose}
            >
              <Text style={styles.buttonTextModal}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardButton, { backgroundColor: "#827E80" }]}
              onPress={handleDelete}
            >
              <Text style={styles.buttonTextModal}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    width: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
});
