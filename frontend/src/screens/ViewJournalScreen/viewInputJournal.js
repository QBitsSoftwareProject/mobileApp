// import React, { useEffect, useState, useRef } from "react";
// import { StyleSheet, View, Text, Animated } from "react-native";
// import { SwipeListView } from "react-native-swipe-list-view";
// import axios from "axios";
// import { EditDeletebutton } from "./editDeleteButton";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import { getJournalsByUserId } from "../../services/journalService/journalService";

// export const SwipableList = (props) => {
//   const [journalDisplay, setJournalDisplay] = useState([]);
//   const [finalArray, setFinalArray] = useState([]);
//   const swipeListViewRef = useRef(null);

//   useEffect(() => {
//     const fetchJournals = async () => {
//       try {
//         const journalData = await getJournalsByUserId();
//         setJournalDisplay(journalData.reverse());
//       } catch (err) {
//         console.log("err" + err.message);
//       }
//     };

//     fetchJournals();
//   }, [journalDisplay]);

//   useEffect(() => {
//     if (props.arrayController === 1) {
//       setFinalArray(props.journalArray);
//     } else {
//       setFinalArray(journalDisplay);
//     }
//   }, [props.arrayController, journalDisplay, props.journalArray]);

//   // useEffect(() => {
//   //   // Use a slight delay to ensure the list has rendered before attempting to scroll
//   //   const scrollTimeout = setTimeout(() => {
//   //     if (swipeListViewRef.current && swipeListViewRef.current._listView) {
//   //       swipeListViewRef.current._listView.scrollToEnd({ animated: false });
//   //     }
//   //   }, 500); // 500ms delay

//   //   // Clear timeout if the component unmounts or finalArray changes
//   //   return () => clearTimeout(scrollTimeout);
//   // }, [finalArray]);

//   const handleFlotingPointButton = () => {
//     navigation.navigate("AddNewJournal", {});
//   };

//   const handleEditPress = (item, itemTittle, itemText, itemEmoji, itemTime) => {
//     props.editFunction(item, itemTittle, itemText, itemEmoji, itemTime);
//     console.log(item);
//     console.log(itemTittle);
//     console.log(itemEmoji);
//     console.log(itemText);
//     console.log(itemTime);
//   };

//   const renderJournalItem = ({ item, index }) => {
//     let mood = "";

//     switch (item.emoji) {
//       case 10:
//         mood = "😊";
//         break;
//       case 20:
//         mood = "😭";
//         break;
//       case 30:
//         mood = "😡";
//         break;
//       case 40:
//         mood = "😍";
//         break;
//       case 50:
//         mood = "😨";
//         break;
//       case 60:
//         mood = "😐";
//         break;
//       case 70:
//         mood = "🥱";
//         break;
//       case 80:
//         mood = "😟";
//         break;
//       default:
//         mood = "";
//     }

//     return (
//       <View style={styles.container}>
//         <View style={styles.journalItem}>
//           <View style={styles.emgTittle}>
//             <Text style={styles.journalTittle}>{item.tittle}</Text>
//             <Text style={styles.emg}>{mood}</Text>
//           </View>

//           <Text style={styles.journalText}>{item.journalEntry}</Text>

//           <Text style={styles.time}>{item.time}</Text>
//         </View>
//       </View>
//     );
//   };

//   const renderHiddenItem = ({ item, index }) => {
//     let mood = "";

//     switch (item.emoji) {
//       case 10:
//         mood = "😊";
//         break;
//       case 20:
//         mood = "😭";
//         break;
//       case 30:
//         mood = "😡";
//         break;
//       case 40:
//         mood = "😍";
//         break;
//       case 50:
//         mood = "😨";
//         break;
//       case 60:
//         mood = "😐";
//         break;
//       case 70:
//         mood = "🥱";
//         break;
//       case 80:
//         mood = "😟";
//         break;
//       default:
//         mood = "";
//     }

//     // Create a new object with the updated mood
//     const updatedItem = {
//       ...item,
//       mood,
//     };

//     return (
//       <View style={styles.buttonContainer}>
//         <EditDeletebutton
//           item={updatedItem._id}
//           itemText={updatedItem.journalEntry}
//           itemTittle={updatedItem.tittle}
//           itemTime={updatedItem.time}
//           itemEmoji={updatedItem.mood} // Use updated mood here
//           editFunction={(item, itemTittle, itemText, itemEmoji, itemTime) =>
//             handleEditPress(item, itemTittle, itemText, itemEmoji, itemTime)
//           }
//         />
//       </View>
//     );
//   };

//   return (
//     <SwipeListView
//       style={{ height: 420 }}
//       ref={swipeListViewRef}
//       data={finalArray}
//       keyExtractor={(item) => item._id}
//       renderItem={renderJournalItem}
//       renderHiddenItem={renderHiddenItem}
//       leftOpenValue={0}
//       rightOpenValue={-65}
//       disableRightSwipe={true}
//       onScroll={(event) => {
//         const offsetY = event.nativeEvent.contentOffset.y;
//         props.setIsCalendarVisible(offsetY <= 0);
//       }}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//   },
//   buttonContainer: {},

//   journalItem: {
//     backgroundColor: "#FFFFFF",
//     width: 350,
//     height: 127,

//     elevation: 1,
//     alignSelf: "flex-end",
//     borderRadius: 20,
//     marginBottom: 15,
//     flexDirection: "column",
//   },
//   emgTittle: {
//     flexDirection: "row",
//   },
//   journalText: {
//     fontSize: 14,
//     fontWeight: "400",
//     paddingTop: 5,
//     padding: 15,
//     fontSize: 14,
//     // backgroundColor:'yellow',
//     marginTop: 5,
//     flex: 2,
//   },
//   journalTittle: {
//     fontSize: 18,
//     fontWeight: "500",
//     color: "#40495B",

//     paddingTop: 15,
//     paddingBottom: 5,
//     paddingLeft: 15,
//     paddingRight: 15,
//     fontSize: 16,
//     flex: 6,
//   },
//   emg: {
//     paddingTop: 10,
//     fontSize: 20,
//     textAlign: "center",
//     paddingRight: 10,
//     flex: 1,
//   },

//   time: {
//     flex: 1,
//     alignItems: "flex-end",
//     alignSelf: "flex-end",
//     marginRight: 15,
//     fontSize: 10,
//     fontWeight: "400",
//     color: "#5C677D",
//   },
// });

import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import axios from "axios";
import { EditDeletebutton } from "./editDeleteButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getJournalsByUserId } from "../../services/journalService/journalService";

export const SwipableList = (props) => {
  const [journalDisplay, setJournalDisplay] = useState([]);
  const [finalArray, setFinalArray] = useState([]);
  const swipeListViewRef = useRef(null);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const journalData = await getJournalsByUserId();
        setJournalDisplay(journalData.reverse());
      } catch (err) {
        console.log("err" + err.message);
      }
    };

    fetchJournals();
  }, [journalDisplay]);

  useEffect(() => {
    if (props.arrayController === 1) {
      setFinalArray(props.journalArray);
    } else {
      setFinalArray(journalDisplay);
    }
  }, [props.arrayController, journalDisplay, props.journalArray]);

  // useEffect(() => {
  //   // Use a slight delay to ensure the list has rendered before attempting to scroll
  //   const scrollTimeout = setTimeout(() => {
  //     if (swipeListViewRef.current && swipeListViewRef.current._listView) {
  //       swipeListViewRef.current._listView.scrollToEnd({ animated: false });
  //     }
  //   }, 500); // 500ms delay

  //   // Clear timeout if the component unmounts or finalArray changes
  //   return () => clearTimeout(scrollTimeout);
  // }, [finalArray]);

  const handleFlotingPointButton = () => {
    navigation.navigate("AddNewJournal", {});
  };

  const handleEditPress = (item, itemTittle, itemText, itemEmoji, itemTime) => {
    props.editFunction(item, itemTittle, itemText, itemEmoji, itemTime);
    console.log(item);
    console.log(itemTittle);
    console.log(itemEmoji);
    console.log(itemText);
    console.log(itemTime);
  };

  const renderJournalItem = ({ item, index }) => {
    let mood = "";

    switch (item.emoji) {
      case 10:
        mood = "😊";
        break;
      case 20:
        mood = "😭";
        break;
      case 30:
        mood = "😡";
        break;
      case 40:
        mood = "😍";
        break;
      case 50:
        mood = "😨";
        break;
      case 60:
        mood = "😐";
        break;
      case 70:
        mood = "🥱";
        break;
      case 80:
        mood = "😟";
        break;
      default:
        mood = "";
    }

    return (
      <View style={styles.container}>
        <View style={styles.journalItem}>
          <View style={styles.emgTittle}>
            <Text style={styles.journalTittle}>{item.tittle}</Text>
            <Text style={styles.emg}>{mood}</Text>
          </View>

          <Text style={styles.journalText}>{item.journalEntry}</Text>

          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    );
  };

  const renderHiddenItem = ({ item, index }) => {
    let mood = "";

    switch (item.emoji) {
      case 10:
        mood = "😊";
        break;
      case 20:
        mood = "😭";
        break;
      case 30:
        mood = "😡";
        break;
      case 40:
        mood = "😍";
        break;
      case 50:
        mood = "😨";
        break;
      case 60:
        mood = "😐";
        break;
      case 70:
        mood = "🥱";
        break;
      case 80:
        mood = "😟";
        break;
      default:
        mood = "";
    }

    // Create a new object with the updated mood
    const updatedItem = {
      ...item,
      mood,
    };

    return (
      <View style={styles.buttonContainer}>
        <EditDeletebutton
          item={updatedItem._id}
          itemText={updatedItem.journalEntry}
          itemTittle={updatedItem.tittle}
          itemTime={updatedItem.time}
          itemEmoji={updatedItem.mood} // Use updated mood here
          editFunction={(item, itemTittle, itemText, itemEmoji, itemTime) =>
            handleEditPress(item, itemTittle, itemText, itemEmoji, itemTime)
          }
        />
      </View>
    );
  };

  return (
    <SwipeListView
      style={{ height: 420 }}
      ref={swipeListViewRef}
      data={finalArray}
      keyExtractor={(item) => item._id}
      renderItem={renderJournalItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={0}
      rightOpenValue={-65}
      friction={7} // Adjust friction for smoother swipe
      tension={30} // Adjust tension for smoother swipe
      useNativeDriver={true} // Use native driver for animations
      disableRightSwipe={true}
      onScroll={(event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        props.setIsCalendarVisible(offsetY <= 0);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  buttonContainer: {},

  journalItem: {
    backgroundColor: "#FFFFFF",
    width: 350,
    height: 127,

    elevation: 1,
    alignSelf: "flex-end",
    borderRadius: 20,
    marginBottom: 15,
    flexDirection: "column",
  },
  emgTittle: {
    flexDirection: "row",
  },
  journalText: {
    fontSize: 14,
    fontWeight: "400",
    paddingTop: 5,
    padding: 15,
    fontSize: 14,
    // backgroundColor:'yellow',
    marginTop: 5,
    flex: 2,
  },
  journalTittle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",

    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    flex: 6,
  },
  emg: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: "center",
    paddingRight: 10,
    flex: 1,
  },

  time: {
    flex: 1,
    alignItems: "flex-end",
    alignSelf: "flex-end",
    marginRight: 15,
    fontSize: 10,
    fontWeight: "400",
    color: "#5C677D",
  },
});
