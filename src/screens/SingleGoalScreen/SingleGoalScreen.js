import React, { useState } from 'react';
import { Text, 
         View,
         TouchableOpacity,
         } from 'react-native';
import styles from './style';
import Toast from 'react-native-toast-message';
import { completedDaysThunk } from '../../../redux/reducers/goals';
import { connect } from 'react-redux';

function SingleGoalScreen(props) {
    const goal = props.goal
    const [isCompleted, setIsCompleted] = useState(false)
    
    const incrementDay = async (goalId, day) => {
        setIsCompleted(!isCompleted)
        console.log('DAY:', day)
        await props.updateSingleGoalFreq(goalId)
    }
    
    Toast.show({
        text1: 'Congratulations!',
        text2: 'You completed your goal! 👋',
        position: 'bottom | top',
   })

  const arrayDays = []

  for (let i = 1; i <= goal.frequency; i++) {
      arrayDays.push(i)               
  }

  return (
    <View>
      <View style={styles.headcontainer}>
        <Text style={styles.headline}> {goal.title} </Text>
      </View>
      <View style={styles.container}>
        {arrayDays.map((day) => (
          <TouchableOpacity key={day} onPress={() => incrementDay(goal.id, day)}>
            <View style={styles.day}> 
              <View style = {[styles.circle, goal.completedDays >= day ? styles.completeCircle : styles.incompleteCircle]}></View>
                <Text style = {[styles.text, goal.completedDays >= day ? styles.strikeText : styles.unstrikeText]}>
                  Day {day}
                </Text>
              </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const mapState = (state, props) => {
  return ({
    goal:  state.goals.find(goal => goal.id === props.route.params.goal.id)
  })
};

const mapDispatch = dispatch => ({
	updateSingleGoalFreq: (goalId) => dispatch(completedDaysThunk(goalId))
});

export default connect(mapState, mapDispatch)(SingleGoalScreen);
