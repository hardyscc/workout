import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { RouterStoreContext } from "../stores/RouterStore";

interface Props {}

export const CurrentWorkout: React.FC<Props> = () => {
  const routerStore = useContext(RouterStoreContext);

  return (
    <View>
      <Text>Current Workout page</Text>
      <Button
        title="back"
        onPress={() => (routerStore.screen = "WorkoutHistory")}
      />
    </View>
  );
};
