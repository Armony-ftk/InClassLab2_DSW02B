import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import CartScreen from './screens/CartScreen';
import MenuScreen from './screens/MenuScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  function addToCart(food) {
    setCartItems((currentCart) => [...currentCart, food]);
  }

  // Remove one item from cart
  function removeFromCart(itemIndex) {
    setCartItems((currentCart) =>
      currentCart.filter((item, index) => index !== itemIndex)
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#f97316' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Menu" options={{ title: 'Food Menu' }}>
          {(props) => <MenuScreen {...props} addToCart={addToCart} />}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {(props) => (
            <CartScreen
              {...props}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="UserDetails"
          component={UserDetailsScreen}
          options={{ title: 'User Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
