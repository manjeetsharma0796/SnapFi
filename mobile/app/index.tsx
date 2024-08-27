import { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';

// Import the splash image
import splashImage from '../assets/images/splash.png';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('login');
    }, 2000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={splashImage} style={styles.background} imageStyle={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.text}>Explore.</Text>
          <Text style={styles.text}>Discover.</Text>
          <Text style={styles.text}>Connect.</Text>
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
    opacity: 0.6,  // Adjust the opacity to your preference
  },
  overlay: {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    paddingBottom: 200,
  },
  text: {
    color: '#40025D',
    fontSize: 34,
    fontWeight: '900',
  },
});

export default Index;
