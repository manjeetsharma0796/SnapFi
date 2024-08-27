import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

interface Group {
  name: string;
  memberCount: string;
  newPosts: number;
}

// Simulated initial data
  const allGrps: Group[] = [{ name: "Fun Ai Founders", memberCount: "3.1K", newPosts: 8 },{ name: "Anime Club", memberCount: "7.1K", newPosts: 20 },{ name: "World News", memberCount: "13.1K", newPosts: 35 },{ name: "Tech Enthusiasts", memberCount: "9.5K", newPosts: 15 },{ name: "Book Lovers", memberCount: "5.3K", newPosts: 10 },{ name: "Travel Buddies", memberCount: "2.8K", newPosts: 5 },{ name: "Foodies United", memberCount: "6.1K", newPosts: 12 },{ name: "Movie Buffs", memberCount: "4.3K", newPosts: 7 },{ name: "Music Fans", memberCount: "8.4K", newPosts: 20 },{ name: "Fitness Enthusiasts", memberCount: "3.9K", newPosts: 15 },{ name: "Gaming Community", memberCount: "11.2K", newPosts: 30 },{ name: "DIY Crafts", memberCount: "5.7K", newPosts: 8 },{ name: "Pet Lovers", memberCount: "7.9K", newPosts: 18 },{ name: "Photography", memberCount: "10.1K", newPosts: 22 },{ name: "Startup Entrepreneurs", memberCount: "2.3K", newPosts: 10 },{ name: "Mental Health", memberCount: "4.9K", newPosts: 13 },{ name: "Gardening", memberCount: "6.8K", newPosts: 9 },{ name: "Language Learners", memberCount: "5.6K", newPosts: 6 },{ name: "Tech Innovations", memberCount: "9.7K", newPosts: 17 },{ name: "Book Recommendations", memberCount: "3.4K", newPosts: 12 },{ name: "History Enthusiasts", memberCount: "2.7K", newPosts: 8 },];


const Groups = () => {
  const [groups, setGroups] = useState<Group[]>(allGrps.slice(0, 10));
  const [loading, setLoading] = useState(false);

  // Function to load more items
  const loadMoreItems = useCallback(() => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setGroups((prevGroups) => {
        const newGroups = allGrps.slice(prevGroups.length, prevGroups.length + 10);
        return [...prevGroups, ...newGroups];
      });
      setLoading(false);
    }, 1000); // Simulate network delay
  }, [loading]);

  const renderGroup = ({ item }: { item: Group }) => (
    <TouchableOpacity style={styles.groupItem} onPress={() => console.log(item.name)}>
      <View>
        <Text style={styles.groupName}>{item.name}</Text>
        <Text style={styles.groupInfo}>{`${item.memberCount} members · ${item.newPosts} new posts`}</Text>
      </View>
    </TouchableOpacity>
  );

  const headerComponent = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>My Groups</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#4A255D', '#3A1D4C', '#2A163B']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>Groups</Text>
      </View>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#4A255D" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search for groups"
          placeholderTextColor="#4A255D"
        />
      </View>
      <View style={styles.overlay}>
        <FlatList
          data={groups}
          keyExtractor={(item) => item.name}
          renderItem={renderGroup}
          ListHeaderComponent={headerComponent}
          stickyHeaderIndices={[0]} // This makes the header sticky
          onEndReached={loadMoreItems}
          onEndReachedThreshold={0.1} // Trigger when 10% from the end
          ListFooterComponent={() => loading ? <Text style={styles.loading}>Loading...</Text> : null}
        />
      </View>
    </LinearGradient>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#DBA8F0",
    borderRadius: 5,
    color: "#4A255D",
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  headerContainer: {
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 50,
    alignSelf: "flex-start",
  },
  overlay: {
    backgroundColor: "#000",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    paddingTop: 20,
    paddingBottom: 0,
    marginTop: 'auto',
    flex: 1,
  },
  section: {
    backgroundColor: "#000",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    paddingTop: 20,
    paddingBottom: 0,
    marginTop: 'auto',
    flex: 1, // Ensure it has a background color to cover the gradient behind it
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    marginLeft:50,
    alignSelf:"flex-start"
  },
  groupItem: {
    marginBottom: 10,
    marginLeft: 20,
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 5,
  },
  groupName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  groupInfo: {
    fontSize: 14,
    color: "#FFA6FA",
  },
  loading: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 20,
  },
});
