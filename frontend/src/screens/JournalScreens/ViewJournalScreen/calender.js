import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import axios from "axios";
import Swiper from "react-native-swiper";
import {
  getJournalsByDate,
  getJournalsByUserId,
} from "../../../services/journalService/journalService";

const { width } = Dimensions.get("window");

export const Calendar = ({
  onDateSelect,
  setJournalArray,

  isVisible,
}) => {
  const swiper = useRef();
  const [value, setValue] = useState(null);
  const [week, setWeek] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAllJournals, setShowAllJournals] = useState(false);

  const handleDateSelect = useCallback(
    (formattedDate) => {
      setValue(formattedDate);

      setSelectedDate(formattedDate);
      setShowAllJournals(false);
      if (onDateSelect) {
        onDateSelect(formattedDate);
      }
    },
    [onDateSelect]
  );

  const handleAllJournalsPress = useCallback(() => {
    setShowAllJournals(true);
    setSelectedDate(null);
  }, []);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        if (selectedDate && !showAllJournals) {
          const formattedDate = moment(selectedDate).format("DD, MMMM, YYYY");
          const journalsByDate = await getJournalsByDate(formattedDate);
          setJournalArray(journalsByDate.reverse());
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchJournals();
  }, [selectedDate, showAllJournals]);

  useEffect(() => {
    const fetchAllJournals = async () => {
      try {
        if (showAllJournals) {
          const journalsByUser = await getJournalsByUserId();
          setJournalArray(journalsByUser.reverse());
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllJournals();
  }, [showAllJournals, setJournalArray]);

  const weeks = useMemo(() => {
    const start = moment().add(week, "weeks").startOf("week");
    return [-1, 0, 1].map((adj) => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, "week").add(index, "day");
        return {
          weekday: date.format("ddd"),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  return (
    <View>
      <View style={styles.picker}>
        <View>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={(ind) => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, "week").toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}
          >
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 15 }]}
                key={index}
              >
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value && value.toDateString() === item.date.toDateString();
                  const isNotActive = showAllJournals;
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => handleDateSelect(item.date)}
                    >
                      <View
                        style={[
                          styles.item,
                          isActive && { borderColor: "#4A90BF" },
                          isNotActive && { borderColor: "white" },
                        ]}
                      >
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: "#101318" },
                            isNotActive && { color: "#5C677D" },
                          ]}
                        >
                          {item.date.getDate()}
                        </Text>
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: "#101318" },
                            isNotActive && { color: "#5C677D" },
                          ]}
                        >
                          {item.weekday}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>
      </View>

      <View style={styles.allAndDate}>
        <TouchableOpacity
          style={styles.allJournalsButton}
          onPress={handleAllJournalsPress}
        >
          <Text style={styles.allJournalsText}>All Journals</Text>
        </TouchableOpacity>
        {!showAllJournals && selectedDate && (
          <Text style={styles.selectedDate}>
            {moment(selectedDate).format("DD, MMMM, YYYY")}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    marginTop: 32,
  },
  item: {
    height: 80,
    width: 38,
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "white",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  itemRow: {
    width: width,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  itemWeekday: {
    fontSize: 14,
    fontWeight: "600",
    color: "#5C677D",
  },
  itemDate: {
    fontSize: 13,
    fontWeight: "600",
    color: "#5C677D",
    marginTop: 10,
    marginBottom: 11,
  },
  allAndDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 16,
  },
  allJournalsButton: {
    backgroundColor: "#599CCA",
    borderRadius: 75,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  allJournalsText: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  selectedDate: {
    fontSize: 14,
    fontWeight: "300",
  },
});
