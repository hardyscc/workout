import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { RouterStoreContext } from "../stores/RouterStore";

interface Props {}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
});

export const WorkoutHistory: React.FC<Props> = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  return (
    <View style={styles.container}>
      <Text>Workout History page</Text>
      <Button
        title="current workout"
        onPress={() => (routerStore.screen = "CurrentWorkout")}
      />
    </View>
  );
});
