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
      <TouchableOpacity style={styles.modalBackground} activeOpacity={1} onPress={onClose}>
        <View style={styles.outerView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, { fontSize: 20, textAlign: "center", fontWeight: "bold", marginBottom: 15 }]}>
              Deseja remover a pizza?
            </Text>
            <Text style={styles.modalText}><Text style={[styles.modalText, { fontWeight: "bold", }]}>Nome:</Text> {pizza.flavor}</Text>
            <Text style={styles.modalText}><Text style={[styles.modalText, { fontWeight: "bold", }]}>Preço(R$):</Text> {pizza.price}</Text>
            <Text style={styles.modalText}><Text style={[styles.modalText, { fontWeight: "bold", }]}>Ingredientes:</Text> {pizza.ingredients}</Text>
            <View style={styles.cardAction}>
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
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
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
    marginTop: 20
  },
  cardButton: {
    width: "47%",
    borderRadius: 50,
    paddingVertical: 7,
    marginTop: 2,
    marginHorizontal: "1%",
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  }
});
