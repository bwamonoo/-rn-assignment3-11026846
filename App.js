import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import TaskItem from './components/TaskItem';

const categories = [
  { category: 'Programing', tasksCount: 6, imageUri: 'programing' },
  { category: 'Study', tasksCount: 1, imageUri: 'study' },
  { category: 'Fitness', tasksCount: 12, imageUri: 'fitness' },
  { category: 'Games', tasksCount: 12, imageUri: 'games' },
  { category: 'Creative Arts', tasksCount: 10, imageUri: 'creative_arts' },
  { category: 'Photography', tasksCount: 8, imageUri: 'photography' },
  { category: 'Travel', tasksCount: 5, imageUri: 'travel' },
  { category: 'Music', tasksCount: 6, imageUri: 'music' },
  { category: 'Party', tasksCount: 9, imageUri: 'party' },
  { category: 'Netflix', tasksCount: 7, imageUri: 'netflix_and_chill' },
];

const tasks = [
  'Walk the Dog',
  'Call Dad',
  'Practice Piano',
  'Listen to Podcast',
  'Play Basketball',
  'Meet with Susan',
  'Team Meeting',
  'Grocery Shopping',
  'Sleep',
  'Visit John',
  'Plan Weekend Trip',
  'Fill the Barrel',
  'Learn Ga',
  'Read Bible',
  'Go to the Barbershop',
];

const App = () => {
  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={({ item }) => <TaskItem task={item} />}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <>
          <Header username="Wilberforce" tasksCount={16} />
          <View style={styles.searchContainer}>
            <View style={styles.inputWrapper}>
              <Image source={require("./images/search.png")}/>
              <TextInput style={styles.searchInput} placeholder="Search" />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Image style={styles.filterButtonImage} source={require("./images/Filter.png")} />
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            horizontal
            data={categories}
            renderItem={({ item }) => (
              <CategoryCard
                category={item.category}
                tasksCount={item.tasksCount}
                imageUri={item.imageUri}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            style={styles.categoriesContainer}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.sectionTitle}>Ongoing Task</Text>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 52,
    paddingBottom: 52,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    height: 52,
    border: 'none',
    marginLeft: -23
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
  },
  tasksContainer: {
    paddingHorizontal: 20
  },
  inputWrapper: {
    backgroundColor: "white",
    borderColor: '#ccc',
    borderRadius: 10,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding:10,
    gap:20,
    width:"78%",
    height: 50,
  }
});

export default App;
