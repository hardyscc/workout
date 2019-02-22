import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { RouterStoreContext } from "../stores/RouterStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  return (
    <View>
      <Text>Workout History page</Text>
      <Button
        title="current workout"
        onPress={() => (routerStore.screen = "CurrentWorkout")}
      />
    </View>
  );
});
