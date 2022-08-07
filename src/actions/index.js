import { LineAxisOutlined } from "@mui/icons-material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

import { typographyClasses } from "@mui/material";



export const getAllEquipments =() =>async (dispatch) =>{
  try {
    const equipments = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises/equipmentList', exerciseOptions)
    dispatch({type:'GET_ALL_EQUIPMENTS',payload:equipments })   
  } catch (error) {
    console.error();
  }
}

export const getAllbodyParts =() =>async (dispatch) =>{
  try {
    const bodyPart = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
    dispatch({type:'GET_ALL_BODYPARTS',payload:bodyPart })   
  } catch (error) {
    console.error();
  }
}

export const getSearchExercieses =(search)=> async (dispatch)=>{
  try {
    
    const exercisesData= await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      )
        dispatch({type:'GET_SEARCHED_EXERCISES',payload:searchedExercises})
      
  } catch (error) {
    console.log(error) 
  }
}

export const setSelectedBodyPart=(item) => dispatch =>{
  try {
    dispatch ({type:'GET_SELECTED_BODYPART', payload:item})
  } catch (error) {
  }
}

export const setSelectedEquipment=(item) => dispatch =>{
  try {
    dispatch ({type:'GET_SELECTED_EQUIPMENT', payload:item})
  } catch (error) {
  }
}

export const getExercisesWithBodyPart=(bodyPart)=> async (dispatch) =>{
  try {
    let exercisesData=[]
  if(bodyPart==='all'){
    exercisesData=await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
  }else{
    exercisesData=await fetchData(
     ` https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
       exerciseOptions);
    }
    dispatch({type:'GET_EXERCISES',payload:exercisesData})

  } catch (error) {
    console.error();
  }
  } 

  export const getExercisesWithEquipment=equipment=>dispatch=>{
    try {
      dispatch({type:'EXERCISES_WITH_EQUIPMENT',payload:equipment})
    } catch (error) {
      console.log(error)
    }
  }


  const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
  const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

export const getSelectedExercisesDetails=id=>async(dispatch)=>{
  try {
    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      
      dispatch({type:'SELECTED_EXERCISES_DETAILS',payload:exerciseDetailData})
  } catch (error) {
    console.log(error)
  }
}

export const getSelectedExercisesVideos=exerciseName=>async(dispatch)=>{
  try {
    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseName} exercise`, youtubeOptions);
      console.log("exerciseVideosData action",exerciseVideosData)
      const payload =exerciseVideosData.contents
      console.log("exerciseVideosData action",payload)
      dispatch({type:'SELECTED_EXERCISES_VIDEOS',payload:payload})
  } catch (error) {
    console.log(error)
  }
}

export const sameTargetExercises=target=>async(dispatch)=>{
  try {
    const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${target}`, exerciseOptions);
      
      dispatch({type:'SAME_EQUIPMENT_EXERCISES',payload:targetMuscleExercisesData})
  } catch (error) {
    console.log(error)
  }
}

export const sameEquipmentExercises=equipment=>async(dispatch)=>{
  try {
    const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${equipment}`, exerciseOptions);
      
      dispatch({type:'SAME_TARGET_EXERCISES',payload:equimentExercisesData})
  } catch (error) {
    console.log(error)
  }
}





  



