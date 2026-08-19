import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Food items
const foodItems = [
  {
    id: '1',
    name: 'Cheese Burger',
    price: 65.0,
    image: require('../assets/food/burger.jpg'),
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    price: 90.0,
    image: require('../assets/food/pizza.jpg'),
  },
  {
    id: '3',
    name: 'Chicken Salad',
    price: 55.0,
    image: require('../assets/food/salad.jpg'),
  },
  {
    id: '4',
    name: 'Creamy Pasta',
    price: 75.0,
    image: require('../assets/food/pasta.jpg'),
  },
];

export default function MenuScreen({ navigation, addToCart }) {
  function renderFoodItem({ item }) {
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.foodName}>{item.name}</Text>
          <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
          <Pressable
            style={styles.addButton}
            onPress={() => addToCart(item)}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <FlatList
      data={foodItems}
      keyExtractor={(item) => item.id}
      renderItem={renderFoodItem}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <Text style={styles.heading}>Choose your meal</Text>
      }
      ListFooterComponent={
        <Pressable
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.buttonText}>View Cart</Text>
        </Pressable>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    backgroundColor: '#fff7ed',
  },
  heading: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
  },
  details: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  price: {
    marginTop: 6,
    marginBottom: 12,
    fontSize: 17,
    color: '#374151',
  },
  addButton: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f97316',
    borderRadius: 6,
  },
  cartButton: {
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 20,
    paddingVertical: 14,
    backgroundColor: '#1f2937',
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
