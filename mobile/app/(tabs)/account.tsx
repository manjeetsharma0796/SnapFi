import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const serverLink = "http://192.168.0.111:9000";

export default function AccountScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [response, setResponse] = useState(''); // Ensure response state is declared
  const user = {
    walletAddress: '0x2134Edd2F7dFc24Dd616cedC12a14D6FF77144e3',
    chainLogo: 'https://example.com/chain-logo.png',
    inAppPoints: 500,
    totalEarned: 1000,
  };

  // Fetch data from the server when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${serverLink}/`);
        const text = await response.text();
        setResponse(text); // Update the response state
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleWithdraw = () => {
    setModalVisible(true);
  };

  const handleConfirmWithdraw = async () => {
    setModalVisible(false);
    try {
      // Make the POST request to /withdraw
      const response = await fetch(`${serverLink}/withdraw`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amt: withdrawAmount,
          receiverAddress: user.walletAddress,
        }),
      });
      console.log("Made request");
      const data = await response.text(); // Using text() because the response is plain text
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Wallet Address:</Text>
        <Text style={styles.value}>{user.walletAddress}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Chain:</Text>
        <FontAwesome name="chain" size={24} color="black" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>In-App Points:</Text>
        <Text style={styles.value}>{user.inAppPoints}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Total Earned:</Text>
        <Text style={styles.value}>{user.totalEarned}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleWithdraw}>
        <Text style={styles.buttonText}>Withdraw Points</Text>
      </TouchableOpacity>
      <Text style={{color:"#000"}}>{response}</Text> {/* Display the response from the server */}

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Withdraw Points</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              keyboardType="numeric"
              value={withdrawAmount}
              onChangeText={setWithdrawAmount}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={handleConfirmWithdraw}>
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.modalCancelButton]} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4A255D',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#4A255D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  modalCancelButton: {
    backgroundColor: '#6c757d',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
