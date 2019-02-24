import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutCard } from "../ui/WorkoutCard";

interface Props {}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
});

export const CurrentWorkout: React.FC<Props> = () => {
  const rootStore = useContext(RootStoreContext);

  return (
    <View style={styles.container}>
      <Text>Current Workout page</Text>
      <WorkoutCard
        sets={["5", "5", "5", "", "x"]}
        excercise="Squat"
        repsAndWeight="5x5 260"
      />
      <Button
        title="workout history"
        onPress={() => (rootStore.routerStore.screen = "WorkoutHistory")}
      />
    </View>
  );
};
