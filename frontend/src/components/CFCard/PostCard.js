import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';

const PostCard = (props) => {

	return( 
		<TouchableOpacity>
				
				{ props.cardName == "regular" && (
					<View style = {[styles.cardBox, { height: 90 }]}>
						<View style = {styles.content1}>
							
							<View style={[styles.imageframe, {height:50}, {width:50}, {backgroundColor:'5DAEE5'}]}>
								<Image source={props.image} style={styles.image} /> 
							</View>
						
							<View>
								<Text style={styles.title}>{props.title}</Text>
								
								<View style={{width:'80%'}}>
									<Text style={[styles.sub,  {marginVertical:3.5}]}>{props.sub}</Text>
								</View>
							</View>

							<View>
								<Image source={props.arrow} style={styles.arrow} />
							</View>        
						
					</View>
				</View>
				)}
				
				{ props.cardName == "large" && (
					<React.Fragment>
						<View style = {[styles.cardBox, { height: 290 }]}>
							
							<View style = {styles.content1}>
								
								<View style={styles.imageframe}>
									<Image source={props.image} style={styles.image} /> 
								</View>
							
								<View>
									<Text style={styles.title}>{props.title}</Text>
									
									<View style={{width:'90%'}}>
										<Text style={[styles.sub, {marginVertical:10}]}>{props.sub}</Text>
									</View>
								</View>        
							
							</View>
						
						
							<View style={[styles.content2, {margin:10}, {alignItems:'center'}, {justifyContent:'center'}]}>
								
								<View>
									<Text style={[styles.des, {marginTop:25},{marginBottom:10},{marginHorizontal:10}]}>{props.description}</Text>
									<Image source={props.Postimage} style={styles.Postimage} />
								</View>

							</View> 

						</View>
					</React.Fragment>

				)}

{ props.cardName == "temp" && (
					<React.Fragment>
						<View style = {[styles.cardBox, { height: 290 }]}>
							
							<View style = {styles.content1}>
								
								<View style={styles.imageframe}>
									<Image source={props.image} style={styles.image} /> 
								</View>
							
								<View>
									<Text style={styles.title}>{props.title}</Text>
									
									<View style={styles.flex1}>
										<View  style={styles.content3}>
											<Text style={[styles.sub, {marginVertical:10}]}>{props.sub}</Text>
										</View>
										<View style={styles.content4}>
											<Image source={props.status} style={styles.status} />
										</View>
									</View>
									
								</View>

							</View>
						
						
							<View style={styles.content2}>
								<View style={styles.flex2}>
									<View style={styles.content5}>
										<Text style={styles.des}>{props.description}</Text>
									</View>
									<View style={styles.content6}>
										<Image source={props.uploadimage} style={styles.uploadimage} />
									</View>
								</View>
							</View> 

						</View>
					</React.Fragment>

				)}
                           

			
		</TouchableOpacity>
	) 
} 
const styles = StyleSheet.create ({
	cardBox: {
      width:347,
	  padding:20,
	  backgroundColor:"white",
	  borderRadius:20,
	  elevation: 1,
	  flexDirection:'column',
	  alignSelf:"center",
	  marginBottom:15,
	//   justifyContent:'center',
	//   alignItems:'center'
	},
	content1: {
	  flex:1,
	  flexDirection:'row',
	},
	imageframe:{
		height:60,
		width:60,
		borderColor:"white",
		borderWidth:4,
		borderRadius:50,
		marginRight:20,
		overflow:"hidden",
		elevation:2
	  },

	image: {
		width:'100%',
		height:'100%',
		resizeMode:"cover"
	},
	title: {
		fontSize:18,
		fontWeight: "500",
		color:'#40495B',
	},
	flex1:{
		flex:1,
		flexDirection:'row'
	},
	content3:{
		flex:1,
		flexDirection:'row'
	},
	sub: {
	  fontSize:12,
	  fontWeight: "500",
	  color:'#5C677D',
	},
	content4:{
		flex:1,
		flexDirection:'row'
	},
    arrow:{
		width:20,
		height:20,
		marginVertical:20,
	},
	status:{
		justifyContent:'flex-start',
		alignSelf:'center',
		
	},

    content2: {
        flex:2.5,
        flexDirection:'row',	
    },
	flex2:{
		flex:1,
		flexDirection:'column'
	},
	content5:{
		flex:1,
		flexDirection:'column'
	},
    des: {
        fontSize:13,
	    fontWeight: "400",
	    color:'#5C677D',
    },
	content6:{
		flex:1,
		flexDirection:'column'
	},
    Postimage: {
        width:344,
        height:176,
		borderBottomLeftRadius:20,
		borderBottomRightRadius:20
    },
	uploadimage: {
		alignSelf:'center'
}
  
  })

  
export default PostCard

