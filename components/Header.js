import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ username, tasksCount }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.greeting}>Hello, {username}</Text>
        <Text style={styles.tasksCount}>{tasksCount} tasks today</Text>
      </View>
      <Image
        source={require("../images/user-icon.png")} 
        style={styles.userIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasksCount: {
    fontSize: 16,
    color: 'gray',
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Header;
