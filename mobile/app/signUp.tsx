import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import splashImage from '../assets/images/splash.png';

export default function SignScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate login and navigate to tabs
    router.push('/(tabs)');
  };

  const goToLogin = () => {
    router.push('/login'); // Navigate to the login screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={splashImage} style={styles.background} imageStyle={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>SignUp</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#4A255D"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#4A255D"
            secureTextEntry
          />
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToLogin}
            style={styles.footer}
          >
            <Text style={styles.footerText}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    opacity: 0.4, // Adjusted opacity for the background image
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    width: "100%",
    paddingTop: 90,
  },
  title: {
    color: '#40025D',
    fontSize: 25,
    marginBottom: 40,
    fontWeight: '900',
  },
  loginButton: {
    width: "100%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#4A255D",
    borderRadius: 50,
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjusted opacity for the input fields
    marginBottom: 20,
    borderRadius: 5,
    color: "#4A255D",
    paddingHorizontal: 15,
    fontWeight: 'bold'
  },
  footer: {
    marginTop: 10,
  },
  footerText: {
    fontWeight: "700",
    color: '#4A255D',
  }
});
