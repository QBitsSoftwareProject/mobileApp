import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { EditDeletebutton } from "./editDeleteButton";
import { JournalList } from "./displayJournnals";
import { SwipeListView } from "react-native-swipe-list-view";

export const SwipableList = () => {
  const [showButton, setShowButton] = useState(false);

  const handleSwipe = () => {
    setShowButton(true);
  };

  return (
    <SwipeListView
      style={styles.container}
      onSwipeOpen={handleSwipe}
      onSwipeClose={() => setShowButton(false)}

      data={[{ id: "1", text: "Your journal data here" }]}

      renderItem={(data, rowMap) => (
        <View style={styles.journalContainer}>
          <JournalList />
        </View>
      )}
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.buttonContainer}>
          <EditDeletebutton />
        </View>
      )}
       leftOpenValue={0}
     rightOpenValue={-65}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  journalContainer: {
    flex: 1,
  },
  buttonContainer: {
    // width: 80, // Adjust width as needed

  },
});
