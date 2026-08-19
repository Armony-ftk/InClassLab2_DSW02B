import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export default function CartScreen({
  navigation,
  cartItems,
  removeFromCart,
}) {
  // Calculate total price
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  function renderCartItem({ item, index }) {
    return (
      <View style={styles.cartItem}>
        <View>
          <Text style={styles.foodName}>{item.name}</Text>
          <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
        </View>
        <Pressable
          style={styles.removeButton}
          onPress={() => removeFromCart(index)}
        >
          <Text style={styles.buttonText}>Remove</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderCartItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Your cart is empty.</Text>
        }
      />

      <View style={styles.summary}>
        <Text style={styles.total}>Total: R{totalCost.toFixed(2)}</Text>
        <Pressable
          style={styles.detailsButton}
          onPress={() => navigation.navigate('UserDetails')}
        >
          <Text style={styles.buttonText}>Enter User Details</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7ed',
  },
  list: {
    flexGrow: 1,
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  price: {
    marginTop: 4,
    fontSize: 16,
    color: '#4b5563',
  },
  removeButton: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    backgroundColor: '#dc2626',
    borderRadius: 6,
  },
  emptyMessage: {
    marginTop: 60,
    textAlign: 'center',
    fontSize: 18,
    color: '#4b5563',
  },
  summary: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  total: {
    marginBottom: 12,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  detailsButton: {
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: '#f97316',
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
