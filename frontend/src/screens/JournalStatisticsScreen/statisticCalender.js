import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import axios from 'axios';

export const JournalCalendar = ({setJournalArray}) => {  
  const [markedDates, setMarkedDates] = useState({});
  const [journalEntries, setJournalEntries] = useState([
    { date: '2024-01-01', category: 'positive', text: 'Had a great day!' },
    { date: '2024-01-02', category: 'negative', text: 'Feeling a bit down.' },
    // Add more entries
  ]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [journalDisplay, setJournalDisplay] = useState([]);

  useEffect(() => {
    const updatedMarkedDates = {};

    journalEntries.forEach((entry) => {
      let backgroundColor;

      if (entry.category === 'positive') {
        backgroundColor = '#5296C5'; 
      } else if (entry.category === 'negative') {
        backgroundColor = '#4ABFB4'; // Red for negative
      } else if (entry.category === 'skipped') {
        backgroundColor = '#9E9E9E'; 
      }

      updatedMarkedDates[entry.date] = {
        customStyles: { container: { backgroundColor } },
      };
    });

    setMarkedDates(updatedMarkedDates);
  }, [journalEntries]);

  // Handle date selection
  const handleDateSelect = (date) => {
    // Retrieve and display journal entries for the selected date
    const selectedEntries = journalEntries.filter((entry) => entry.date === date.dateString);
    console.log('Selected Date Entries:', selectedEntries);
  };

  const renderCustomHeader = (date) => {
    const headerDate = new Date(date);
    const month = headerDate.toLocaleString('default', { month: 'long' });
    const year = headerDate.getFullYear();

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{`${month} ${year}`}</Text>
      </View>
    );
  };

  const getTodayDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    return `${day}, ${month}, ${year}`;
    // return selectedDate;
    
  };
  // console.log(getTodayDate());
  


  useEffect(() => {
    if (selectedDate) {
      const getJournalsByDate = async () => {
        try {
          const userid = '214102J';
          const formattedDate = moment(selectedDate).format('DD, MMMM, YYYY');
          

          const journalArray = await axios.get(`http://192.168.43.51:3000/journal/getJournal-bydate/${userid}/${formattedDate}`);
          
          
          setJournalDisplay(journalArray.data);
          setJournalArray(journalArray.data);

          
          
          // console.log(formattedDate); // Print the selected date to the console
          

        } catch (error) {
          console.log(error);
        }
      };

      getJournalsByDate();
    }
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <Text style={styles.todayText}>Today's Date: {getTodayDate()}</Text>
      <Calendar
        style={{ backgroundColor: '#F2F3F5' }}
        theme={{
          calendarBackground: '#F2F3F5',
          textDayFontSize: 10,
          textDayFontWeight: '300',
          textMonthFontSize: 16,
          textDayHeaderFontSize: 15,
          textDayHeaderFontWeight: '500',
        }}
        onDayPress={handleDateSelect}
        markingType={'custom'}
        markedDates={markedDates}
        renderHeader={renderCustomHeader}
    //   markedDates={{
        
    // '2024-01-16': {
    //   customStyles: {
    //     container: {
    //       width:43,
    //       height:39,
    //       backgroundColor: '#5296C5',
    //       borderRadius:100
    //     },
    //     text: {
    //       color: '#101318',
    //       fontWeight: '300',
    //       paddingTop:9

          
    //     }
    //   }
    // },
    // '2024-01-18': {
    //     customStyles: {
    //         container: {
    //           width:43,
    //           height:39,
    //           backgroundColor: '#4ABFB4',
    //           borderRadius:100
    //         },
    //         text: {
    //           color: '#101318',
    //           fontWeight: '300',
    //           paddingTop:9
    
              
    //         }
    //       }
    // },  
    // '2024-01-29': {
    //     customStyles: {
    //         container: {
    //           width:43,
    //           height:39,
    //           backgroundColor: '#E7E7E7',
    //           borderRadius:100
    //         },
    //         text: {
    //           color: '#101318',
    //           fontWeight: '300',
    //           fontSize:10,
    //           paddingTop:9
    
              
    //         }
    //       }
    //   }, 
    //   '2024-01-05': {
    //     customStyles: {
    //       container: {
    //         width:43,
    //         height:39,
    //         backgroundColor: '#5296C5',
    //         borderRadius:100
    //       },
    //       text: {
    //         color: '#101318',
    //         fontWeight: '300',
    //         fontSize:10,
    //         paddingTop:9
  
            
    //       }
    //     }
    //   },
    //   '2024-01-28': {
    //       customStyles: {
    //           container: {
    //             width:43,
    //             height:39,
    //             backgroundColor: '#4ABFB4',
    //             borderRadius:100
    //           },
    //           text: {
    //             color: '#101318',
    //             fontWeight: '300',
    //             fontSize:10,
    //             paddingTop:9
      
                
    //           }
    //         }
    //   },  
    //   '2024-02-03': {
    //       customStyles: {
    //           container: {
    //             width:43,
    //             height:39,
    //             backgroundColor: '#E7E7E7',
    //             borderRadius:100
    //           },
    //           text: {
    //             color: '#101318',
    //             fontWeight: '300',
    //             fontSize:10,
    //             paddingTop:9
      
                
    //           }
    //         }
    //     }, 

    //     '2024-01-09': {
    //         customStyles: {
    //           container: {
    //             width:43,
    //             height:39,
    //             backgroundColor: '#5296C5',
    //             borderRadius:100
    //           },
    //           text: {
    //             color: '#101318',
    //             fontWeight: '300',
    //             fontSize:10,
    //             paddingTop:9
      
                
    //           }
    //         }
    //       },
    //       '2024-01-11': {
    //           customStyles: {
    //               container: {
    //                 width:43,
    //                 height:39,
    //                 backgroundColor: '#4ABFB4',
    //                 borderRadius:100
    //               },
    //               text: {
    //                 color: '#101318',
    //                 fontWeight: '300',
    //                 fontSize:10,
    //                 paddingTop:9
          
                    
    //               }
    //             }
    //       },  
    //       '2024-01-12': {
    //           customStyles: {
    //               container: {
    //                 width:43,
    //                 height:39,
    //                 backgroundColor: '#E7E7E7',
    //                 borderRadius:100
    //               },
    //               text: {
    //                 color: '#101318',
    //                 fontWeight: '300',
    //                 fontSize:10,
    //                 paddingTop:9
          
                    
    //               }
    //             }
    //         }, 
    //         '2024-01-15': {
    //           customStyles: {
    //             container: {
    //               width:43,
    //               height:39,
    //               backgroundColor: '#5296C5',
    //               borderRadius:100
    //             },
    //             text: {
    //               color: '#101318',
    //               fontWeight: '300',
    //               fontSize:10,
    //               paddingTop:9
        
                  
    //             }
    //           }
    //         },
    //         '2024-01-17': {
    //             customStyles: {
    //                 container: {
    //                   width:43,
    //                   height:39,
    //                   backgroundColor: '#4ABFB4',
    //                   borderRadius:100
    //                 },
    //                 text: {
    //                   color: '#101318',
    //                   fontWeight: '300',
    //                   fontSize:10,
    //                   paddingTop:9
            
                      
    //                 }
    //               }
    //         },  
    //         '2024-01-20': {
    //             customStyles: {
    //                 container: {
    //                   width:43,
    //                   height:39,
    //                   backgroundColor: '#E7E7E7',
    //                   borderRadius:100
    //                 },
    //                 text: {
    //                   color: '#101318',
    //                   fontWeight: '300',
    //                   fontSize:10,
    //                   paddingTop:9
            
                      
    //                 }
    //               }
    //           }, 

    //           '2024-01-23': {
    //             customStyles: {
    //               container: {
    //                 width:43,
    //                 height:39,
    //                 backgroundColor: '#5296C5',
    //                 borderRadius:100
    //               },
    //               text: {
    //                 color: '#101318',
    //                 fontWeight: '300',
    //                 fontSize:10,
    //                 paddingTop:9
          
                    
    //               }
    //             }
    //           },
    //           '2024-01-25': {
    //               customStyles: {
    //                   container: {
    //                     width:43,
    //                     height:39,
    //                     backgroundColor: '#4ABFB4',
    //                     borderRadius:100
    //                   },
    //                   text: {
    //                     color: '#101318',
    //                     fontWeight: '300',
    //                     fontSize:10,
    //                     paddingTop:9
              
                        
    //                   }
    //                 }
    //           },  
    //           '2024-01-26': {
    //               customStyles: {
    //                   container: {
    //                     width:43,
    //                     height:39,
    //                     backgroundColor: '#E7E7E7',
    //                     borderRadius:100
    //                   },
    //                   text: {
    //                     color: '#101318',
    //                     fontWeight: '300',
    //                     fontSize:10,
    //                     paddingTop:9
              
                        
    //                   }
    //                 }
    //             }, 
    //             '2024-01-27': {
    //               customStyles: {
    //                 container: {
    //                   width:43,
    //                   height:39,
    //                   backgroundColor: '#5296C5',
    //                   borderRadius:100
    //                 },
    //                 text: {
    //                   color: '#101318',
    //                   fontWeight: '300',
    //                   fontSize:10,
    //                   paddingTop:9
            
                      
    //                 }
    //               }
    //             },
    //             '2024-01-31': {
    //                 customStyles: {
    //                     container: {
    //                       width:43,
    //                       height:39,
    //                       backgroundColor: '#4ABFB4',
    //                       borderRadius:100
    //                     },
    //                     text: {
    //                       color: '#101318',
    //                       fontWeight: '300',
    //                       fontSize:10,
    //                       paddingTop:9
                
                          
    //                     }
    //                   }
    //             },  
    //             '2024-02-01': {
    //                 customStyles: {
    //                     container: {
    //                       width:43,
    //                       height:39,
    //                       backgroundColor: '#E7E7E7',
    //                       borderRadius:100
    //                     },
    //                     text: {
    //                       color: '#101318',
    //                       fontWeight: '300',
    //                       fontSize:10,
    //                       paddingTop:9
                
                          
    //                     }
    //                   }
    //               }, 
          
    //               '2024-02-02': {
    //                   customStyles: {
    //                     container: {
    //                       width:43,
    //                       height:39,
    //                       backgroundColor: '#5296C5',
    //                       borderRadius:100
    //                     },
    //                     text: {
    //                       color: '#101318',
    //                       fontWeight: '300',
    //                       fontSize:10,
    //                       paddingTop:9
                
                          
    //                     }
    //                   }
    //                 },
    //                         '2023-12-31': {
    //                             customStyles: {
    //                                 container: {
    //                                 width:43,
    //                                 height:39,
    //                                 backgroundColor: '#4ABFB4',
    //                                 borderRadius:100
    //                                 },
    //                                 text: {
    //                                 color: '#101318',
    //                                 fontWeight: '300',
    //                                 fontSize:10,
    //                                 paddingTop:9
                            
                                    
    //                                 }
    //                             }
    //                         },  
    //                         '2024-02-14': {
    //                             customStyles: {
    //                                 container: {
    //                                 width:43,
    //                                 height:39,
    //                                 backgroundColor: '#E7E7E7',
    //                                 borderRadius:100
    //                                 },
    //                                 text: {
    //                                 color: '#101318',
    //                                 fontWeight: '300',
    //                                 fontSize:10,
    //                                 paddingTop:9
                            
                                    
    //                                 }
    //                             }
    //                         }, 
    //                         '2024-02-21': {
    //                             customStyles: {
    //                             container: {
    //                                 width:43,
    //                                 height:39,
    //                                 backgroundColor: '#5296C5',
    //                                 borderRadius:100
    //                             },
    //                             text: {
    //                                 color: '#101318',
    //                                 fontWeight: '300',
    //                                 fontSize:10,
    //                                 paddingTop:9
                        
                                    
    //                             }
    //                             }
    //                         },
    //                         '2024-02-07': {
    //                             customStyles: {
    //                                 container: {
    //                                     width:43,
    //                                     height:39,
    //                                     backgroundColor: '#4ABFB4',
    //                                     borderRadius:100
    //                                 },
    //                                 text: {
    //                                     color: '#101318',
    //                                     fontWeight: '300',
    //                                     fontSize:10,
    //                                     paddingTop:9
                            
                                        
    //                                 }
    //                                 }
    //                         },  
    //                         '2024-02-10': {
    //                             customStyles: {
    //                                 container: {
    //                                     width:43,
    //                                     height:39,
    //                                     backgroundColor: '#E7E7E7',
    //                                     borderRadius:100
    //                                 },
    //                                 text: {
    //                                     color: '#101318',
    //                                     fontWeight: '300',
    //                                     fontSize:10,
    //                                     paddingTop:9
                            
                                        
    //                                 }
    //                                 }
    //                             }, 

    //                             '2024-02-16': {
    //                                 customStyles: {
    //                                 container: {
    //                                     width:43,
    //                                     height:39,
    //                                     backgroundColor: '#5296C5',
    //                                     borderRadius:100
    //                                 },
    //                                 text: {
    //                                     color: '#101318',
    //                                     fontWeight: '300',
    //                                     fontSize:10,
    //                                     paddingTop:9
                            
                                        
    //                                 }
    //                                 }
    //                             },
    //                             '2024-02-18': {
    //                                 customStyles: {
    //                                     container: {
    //                                         width:43,
    //                                         height:39,
    //                                         backgroundColor: '#4ABFB4',
    //                                         borderRadius:100
    //                                     },
    //                                     text: {
    //                                         color: '#101318',
    //                                         fontWeight: '300',
    //                                         fontSize:10,
    //                                         paddingTop:9
                                
                                            
    //                                     }
    //                                     }
    //                             },  
    //                             '2024-02-29': {
    //                                 customStyles: {
    //                                     container: {
    //                                         width:43,
    //                                         height:39,
    //                                         backgroundColor: '#E7E7E7',
    //                                         borderRadius:100
    //                                     },
    //                                     text: {
    //                                         color: '#101318',
    //                                         fontWeight: '300',
    //                                         fontSize:10,
    //                                         paddingTop:9
                                
                                            
    //                                     }
    //                                     }
    //                                 }, 
    //                                 '2024-02-05': {
    //                                 customStyles: {
    //                                     container: {
    //                                     width:43,
    //                                     height:39,
    //                                     backgroundColor: '#5296C5',
    //                                     borderRadius:100
    //                                     },
    //                                     text: {
    //                                     color: '#101318',
    //                                     fontWeight: '300',
    //                                     fontSize:10,
    //                                     paddingTop:9
                                
                                        
    //                                     }
    //                                 }
    //                                 },
    //                                 '2024-02-28': {
    //                                     customStyles: {
    //                                         container: {
    //                                         width:43,
    //                                         height:39,
    //                                         backgroundColor: '#4ABFB4',
    //                                         borderRadius:100
    //                                         },
    //                                         text: {
    //                                         color: '#101318',
    //                                         fontWeight: '300',
    //                                         fontSize:10,
    //                                         paddingTop:9
                                    
                                            
    //                                         }
    //                                     }
    //                                 },  
    //                                 '2024-02-20': {
    //                                     customStyles: {
    //                                         container: {
    //                                         width:43,
    //                                         height:39,
    //                                         backgroundColor: '#E7E7E7',
    //                                         borderRadius:100
    //                                         },
    //                                         text: {
    //                                         color: '#101318',
    //                                         fontWeight: '300',
    //                                         fontSize:10,
    //                                         paddingTop:9
                                    
                                            
    //                                         }
    //                                     }
    //                                 }, 
                            
    //                                 '2024-02-29': {
    //                                     customStyles: {
    //                                         container: {
    //                                         width:43,
    //                                         height:39,
    //                                         backgroundColor: '#5296C5',
    //                                         borderRadius:100
    //                                         },
    //                                         text: {
    //                                         color: '#101318',
    //                                         fontWeight: '300',
    //                                         fontSize:10,
    //                                         paddingTop:9
                                    
                                            
    //                                         }
    //                                     }
    //                                     },
    //                                     '2024-02-19': {
    //                                         customStyles: {
    //                                             container: {
    //                                             width:43,
    //                                             height:39,
    //                                             backgroundColor: '#4ABFB4',
    //                                             borderRadius:100
    //                                             },
    //                                             text: {
    //                                             color: '#101318',
    //                                             fontWeight: '300',
    //                                             fontSize:10,
    //                                             paddingTop:9
                                        
                                                
    //                                             }
    //                                         }
    //                                     },  
    //                                     '2024-02-24': {
    //                                         customStyles: {
    //                                             container: {
    //                                             width:43,
    //                                             height:39,
    //                                             backgroundColor: '#E7E7E7',
    //                                             borderRadius:100
    //                                             },
    //                                             text: {
    //                                             color: '#101318',
    //                                             fontWeight: '300',
    //                                             fontSize:10,
    //                                             paddingTop:9
                                        
                                                
    //                                             }
    //                                         }
    //                                     }, 
    //                                     '2024-01-30': {
    //                                         customStyles: {
    //                                         container: {
    //                                             width:43,
    //                                             height:39,
    //                                             backgroundColor: '#5296C5',
    //                                             borderRadius:100
    //                                         },
    //                                         text: {
    //                                             color: '#101318',
    //                                             fontWeight: '300',
    //                                             fontSize:10,
    //                                             paddingTop:9
                                    
                                                
    //                                         }
    //                                         }
    //                                     },
    //                                     '2024-01-24': {
    //                                         customStyles: {
    //                                             container: {
    //                                                 width:43,
    //                                                 height:39,
    //                                                 backgroundColor: '#4ABFB4',
    //                                                 borderRadius:100
    //                                             },
    //                                             text: {
    //                                                 color: '#101318',
    //                                                 fontWeight: '300',
    //                                                 fontSize:10,
    //                                                 paddingTop:9
                                        
                                                    
    //                                             }
    //                                             }
    //                                     },  
    //                                     '2024-01-22': {
    //                                         customStyles: {
    //                                             container: {
    //                                                 width:43,
    //                                                 height:39,
    //                                                 backgroundColor: '#E7E7E7',
    //                                                 borderRadius:100
    //                                             },
    //                                             text: {
    //                                                 color: '#101318',
    //                                                 fontWeight: '300',
    //                                                 fontSize:10,
    //                                                 paddingTop:9
                                        
                                                    
    //                                             }
    //                                             }
    //                                         }, 
                            
    //                                         '2024-01-21': {
    //                                         customStyles: {
    //                                             container: {
    //                                             width:43,
    //                                             height:39,
    //                                             backgroundColor: '#5296C5',
    //                                             borderRadius:100
    //                                             },
    //                                             text: {
    //                                             color: '#101318',
    //                                             fontWeight: '300',
    //                                             fontSize:10,
    //                                             paddingTop:9
                                        
                                                
    //                                             }
    //                                         }
    //                                         },
    //                                         '2024-01-19': {
    //                                             customStyles: {
    //                                                 container: {
    //                                                 width:43,
    //                                                 height:39,
    //                                                 backgroundColor: '#4ABFB4',
    //                                                 borderRadius:100
    //                                                 },
    //                                                 text: {
    //                                                 color: '#101318',
    //                                                 fontWeight: '300',
    //                                                 fontSize:10,
    //                                                 paddingTop:9
                                            
                                                    
    //                                                 }
    //                                             }
    //                                         },  
    //                                         '2024-01-14': {
    //                                             customStyles: {
    //                                                 container: {
    //                                                 width:43,
    //                                                 height:39,
    //                                                 backgroundColor: '#E7E7E7',
    //                                                 borderRadius:100
    //                                                 },
    //                                                 text: {
    //                                                 color: '#101318',
    //                                                 fontWeight: '300',
    //                                                 fontSize:10,
    //                                                 paddingTop:9
                                            
                                                    
    //                                                 }
    //                                             }
    //                                         }, 
    //                                         '2024-01-13': {
    //                                             customStyles: {
    //                                             container: {
    //                                                 width:43,
    //                                                 height:39,
    //                                                 backgroundColor: '#5296C5',
    //                                                 borderRadius:100
    //                                             },
    //                                             text: {
    //                                                 color: '#101318',
    //                                                 fontWeight: '300',
    //                                                 fontSize:10,
    //                                                 paddingTop:9
                                        
                                                    
    //                                             }
    //                                             }
    //                                         },
    //                                         '2024-01-10': {
    //                                             customStyles: {
    //                                                 container: {
    //                                                     width:43,
    //                                                     height:39,
    //                                                     backgroundColor: '#4ABFB4',
    //                                                     borderRadius:100
    //                                                 },
    //                                                 text: {
    //                                                     color: '#101318',
    //                                                     fontWeight: '300',
    //                                                     fontSize:10,
    //                                                     paddingTop:9
                                            
                                                        
    //                                                 }
    //                                                 }
    //                                         },  
    //                                         '2024-01-08': {
    //                                             customStyles: {
    //                                                 container: {
    //                                                     width:43,
    //                                                     height:39,
    //                                                     backgroundColor: '#E7E7E7',
    //                                                     borderRadius:100
    //                                                 },
    //                                                 text: {
    //                                                     color: '#101318',
    //                                                     fontWeight: '300',
    //                                                     fontSize:10,
    //                                                     paddingTop:9
                                            
                                                        
    //                                                 }
    //                                                 }
    //                                             }, 
                                        
    //                                             '2024-01-07': {
    //                                                 customStyles: {
    //                                                 container: {
    //                                                     width:43,
    //                                                     height:39,
    //                                                     backgroundColor: '#5296C5',
    //                                                     borderRadius:100
    //                                                 },
    //                                                 text: {
    //                                                     color: '#101318',
    //                                                     fontWeight: '300',
    //                                                     fontSize:10,
    //                                                     paddingTop:9
                                            
                                                        
    //                                                 }
    //                                                 }
    //                                             },
    //                                             '2024-01-06': {
    //                                                 customStyles: {
    //                                                     container: {
    //                                                         width:43,
    //                                                         height:39,
    //                                                         backgroundColor: '#4ABFB4',
    //                                                         borderRadius:100
    //                                                     },
    //                                                     text: {
    //                                                         color: '#101318',
    //                                                         fontWeight: '300',
    //                                                         fontSize:10,
    //                                                         paddingTop:9
                                                
                                                            
    //                                                     }
    //                                                     }
    //                                             },  
    //                                             '2024-01-04': {
    //                                                 customStyles: {
    //                                                     container: {
    //                                                         width:43,
    //                                                         height:39,
    //                                                         backgroundColor: '#E7E7E7',
    //                                                         borderRadius:100
    //                                                     },
    //                                                     text: {
    //                                                         color: '#101318',
    //                                                         fontWeight: '300',
    //                                                         fontSize:10,
    //                                                         paddingTop:9
                                                
                                                            
    //                                                     }
    //                                                     }
    //                                                 }, 
    //                                                 '2024-01-03': {
    //                                                 customStyles: {
    //                                                     container: {
    //                                                     width:43,
    //                                                     height:39,
    //                                                     backgroundColor: '#5296C5',
    //                                                     borderRadius:100
    //                                                     },
    //                                                     text: {
    //                                                     color: '#101318',
    //                                                     fontWeight: '300',
    //                                                     fontSize:10,
    //                                                     paddingTop:9
                                                
                                                        
    //                                                     }
    //                                                 }
    //                                                 },
    //                                                 '2024-01-02': {
    //                                                     customStyles: {
    //                                                         container: {
    //                                                         width:43,
    //                                                         height:39,
    //                                                         backgroundColor: '#4ABFB4',
    //                                                         borderRadius:100
    //                                                         },
    //                                                         text: {
    //                                                         color: '#101318',
    //                                                         fontWeight: '300',
    //                                                         fontSize:10,
    //                                                         paddingTop:9
                                                    
                                                            
    //                                                         }
    //                                                     }
    //                                                 },  
    //                                                 '2024-01-01': {
    //                                                     customStyles: {
    //                                                         container: {
    //                                                         width:43,
    //                                                         height:39,
    //                                                         backgroundColor: '#E7E7E7',
    //                                                         borderRadius:100
    //                                                         },
    //                                                         text: {
    //                                                         color: '#101318',
    //                                                         fontWeight: '300',
    //                                                         fontSize:10,
    //                                                         paddingTop:9
                                                    
                                                            
    //                                                         }
    //                                                     }
    //                                                 },                                              
                            
      
  
      
      />
      
    {/* onDayPress={handleDateSelect} markedDates={markedDates}  */}

    <StatusBar style ='auto'></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
    
  },
});


