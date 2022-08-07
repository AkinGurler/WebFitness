const INITIAL_STATE = {
    selectedExercise: {},
    selectedExerciseVideos: [],
    sameEquipmentExercises: [],
    sameTargetExercises: [],
    exercises: [],
    selectedBodyPart: 'all',
    selectedEquipment: 'all',

    equipments: [],
    bodyParts: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALL_EQUIPMENTS':
            return {
                ...state, equipments: ['all', ...action.payload]
            }
        case 'GET_ALL_BODYPARTS':
            return {
                ...state, bodyParts: ['all', ...action.payload]
            }

        case 'GET_SEARCHED_EXERCISES':
            return {
                ...state, exercises: action.payload
            }
        case 'GET_SELECTED_BODYPART':
            return {
                ...state, selectedBodyPart: action.payload
            }
        case 'GET_SELECTED_EQUIPMENT':
            return {
                ...state, selectedEquipment: action.payload
            }
        case 'GET_EXERCISES':
            return {
                ...state, exercises: action.payload,

            }
        case 'EXERCISES_WITH_EQUIPMENT':
            return {
                ...state,
                exercises: state.exercises.filter(item => item.equipment === action.payload)
            }
        case 'SELECTED_EXERCISES_DETAILS':
            return {
                ...state,
                selectedExercise: action.payload
            }

        case 'SELECTED_EXERCISES_VIDEOS':
            return {
                ...state,
                selectedExerciseVideos: action.payload
            }
        case 'SAME_EQUIPMENT_EXERCISES':
            return {
                ...state,
                sameEquipmentExercises: action.payload
            }
        case 'SAME_TARGET_EXERCISES':
            return {
                ...state,
                sameTargetExercises: action.payload
            }

        default:
            return state
    }


}