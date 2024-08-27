import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// Dummy data for posts, videos, and mentions
const posts = () => (
  <View style={styles.section}>
    <Text style={styles.sectionContent}>No posts yet</Text>
  </View>
);

const videos = () => (
  <View style={styles.section}>
    <Text style={styles.sectionContent}>No videos yet</Text>
  </View>
);

const mentions = () => (
  <View style={styles.section}>
    <Text style={styles.sectionContent}>No mentions yet</Text>
  </View>
);

const ProfileScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'posts', title: 'Posts' },
    { key: 'videos', title: 'Videos' },
    { key: 'mentions', title: 'Mentions' },
  ]);

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://pics.craiyon.com/2023-05-31/220e4c73f6674d46a84840ebde9f9bc8.webp' }} // Replace with your profile picture URL
          style={styles.profilePic}
        />
        <Text style={styles.username}>Username</Text>
        <Text style={styles.bio}>This is a short bio about the user.</Text>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>120</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>1.5K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>300</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        {/* Follow/Unfollow and Message Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <FontAwesome name="envelope" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Navigation */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          posts: posts,
          videos: videos,
          mentions: mentions,
        })}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            labelStyle={styles.label}
            activeColor="#4A255D"
            inactiveColor="#000"
          />
        )}
        style={styles.tabView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 30,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  followButton: {
    flex: 1,
    backgroundColor: '#4A255D',
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageButton: {
    flex: 1,
    backgroundColor: '#4A255D',
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#666',
  },
  tabView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: '#4A255D',
  },
  label: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
