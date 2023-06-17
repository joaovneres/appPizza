import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
export default function DeletePizza({ open, onClose, onDeletePizza, pizza }) {
  if (!pizza) {
    return null;
  }
  const handleDelete = () => {
    onDeletePizza(pizza);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onClose={onClose}
      onRequestClose={() => setModalActive(false)}
    >
      <View style={styles.outerView}>
        <View style={styles.modalView}>
          <Text style={[styles.modalText, { fontSize: 18 }]}>
            Deseja remover a bebida:
          </Text>
          <Text style={styles.modalText}>Nome: {pizza.name}</Text>
          <Text style={styles.modalText}>Preço(R$): {pizza.price}</Text>
          <Text style={styles.modalText}>Tamanho: {pizza.description}</Text>
          <View style={[styles.cardAction, { marginTop: 10 }]}>
            <TouchableOpacity
              style={[styles.cardButton, { backgroundColor: "#9C4744" }]}
              onPress={onClose}
            >
              <Text style={styles.buttonTextModal}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardButton, { backgroundColor: "#33503d" }]}
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
  modalView: {
    backgroundColor: "#FAFBFA",
    borderRadius: 30,
    padding: 30,
    width: 250,
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
    color: "#33503d",
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 2,
  },
  buttonTextModal: {
    color: "#FFF",
    fontSize: 15,
  },
});
