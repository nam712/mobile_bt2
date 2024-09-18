import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    console.log('Số điện thoại:', phoneNumber);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.separator} />
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        placeholderTextColor="#a9a9a9" 
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={[styles.button,{ marginTop: 40 }]}   onPress={handleContinue} disabled={phoneNumber.length === 0}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:50,
    flex: 1,
    justifyContent: 'auto',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    marginTop: 16,
  },
  description: {
    textAlign: 'left',
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,  
    borderBottomColor: '#ccc',
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 20,
  },
  
  button: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.5,
  },
  buttonText: {
    fontSize: 18,
    opacity:0.5,
  },
});

export default App;
