import { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

export default function UserDetailsScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function submitDetails() {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      Alert.alert(
        'Missing Information',
        'Name, email, and phone number are required.'
      );
      return;
    }

    Alert.alert('Success', 'Your details were submitted successfully.');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.heading}>Enter your details</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Phone number</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      <Pressable style={styles.submitButton} onPress={submitDetails}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff7ed',
  },
  heading: {
    marginBottom: 24,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
  },
  input: {
    marginBottom: 18,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#9ca3af',
    borderRadius: 6,
  },
  submitButton: {
    alignItems: 'center',
    marginTop: 8,
    paddingVertical: 14,
    backgroundColor: '#f97316',
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
