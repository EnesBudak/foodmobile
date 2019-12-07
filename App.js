import React ,{useState} from 'react';
import { StyleSheet, Text, View,  FlatList,Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  // States
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode]  = useState(false);
  const addGoalHandler = goal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal }
    ]);
  };
 
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId );
    });
  };
 
  return (
  
       <View style={styles.screen}>
         <Button title="Add new Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}></FlatList>
    </View>

  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
 
});
