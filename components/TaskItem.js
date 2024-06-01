import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
		height: 110,
		width: 330,
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
		borderColor: '#E8D1BA',
    shadowColor: '#000',
		borderWidth: 3,
    shadowOpacity: 0.1,
		justifyContent: 'center',
		marginLeft: 17
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default TaskItem;
