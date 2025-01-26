import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ightgray',
    marginTop: 80
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 11,
    marginBottom: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  imagePlaceholder: {
    height: 130,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageText: {
    color: '#777',
    fontSize: 16
  },
  productDetails: {
    padding: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5
  },
  stockText: {
    fontSize: 14,
    color: '#777'
  },
  editText: {
    fontSize: 14,
    color: '#007BFF'
  }

});
