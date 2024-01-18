import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CreateCard = (props) => { 
	
	return( 
		<TouchableOpacity>
			<View style = {styles.cardBox}>
				<View style = {styles.content}>
					<View style={styles.imageframe}>
						<Image source={props.image}style={styles.image} /> 
					</View>
					<Text style={styles.title}>{props.title}</Text>

					{ props.cardName == "AvailableDoc" && (
						<View>
							<Text style={styles.description}>{props.university}</Text>
							<Text style={styles.description}>REG NO-{props.regno}</Text>
							<Text style={styles.description}>{props.hospital}</Text>
						</View>
					)}

					
					{ props.cardName == "AppointmentStatus" && (
						<View>
							<Text style={styles.description}>Time:{props.time}</Text>
							<Text style={styles.description}>Date:{props.date}</Text>
							<Text style={styles.description}>Status:{props.status}</Text>
						</View>	
					)}
				
				</View>
			</View>
		</TouchableOpacity>
	) 
} 
const styles = StyleSheet.create ({
	cardBox: {
	  width:343,
	  height:112,
	  padding:20,
	  backgroundColor:"white",
	  borderRadius:20,
	  elevation: 1,
	  flexDirection:"row",
	  alignSelf:"center",
	  marginBottom:15
	  },
	content: {
	
	  flex:1,
	  color:'#40495B'
	 },
	title: {
	
		
		fontSize:16,
		fontWeight: "bold",
		},
	description: {
	  
	  fontSize:14,
	  fontWeight: "400",
	  color: "#5C677D"
		},
	imageframe:{
		height:70,
		width:70,
		borderColor:"white",
		borderWidth:4,
		borderRadius:50,
		marginVertical:5,
		overflow:"hidden",
		elevation:2
	  },

	image: {
		width:'100%',
		height:'100%',
		resizeMode:"cover"
	}
  
  })
  
export default CreateCard

