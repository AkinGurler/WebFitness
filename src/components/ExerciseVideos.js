import React, { useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { getSelectedExercisesVideos } from '../actions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ExerciseVideos = () => {


  const { id } = useParams();
  const exerciseDetail = useSelector((state) => state.selectedExercise)
  const name = exerciseDetail.name
  const exerciseVideos = useSelector((state) => state.selectedExerciseVideos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedExercisesVideos(name))
  }, [name])



  if (!exerciseVideos.length) return "laoding";
  return (
    <Box sx={{
      marginTop: { lg: '200px', xs: '20px' }
    }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch <span style={{ color: '#b8860b', textTransform: "capitalize" }}>{name}
        </span> exercise videos {/* textTransform: "capitalize" :capitalizes initial letters */}
      </Typography>
      <Stack justifyContent="flex-start" flexwrap="wrap" alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' }
        }}
      >
        {exerciseVideos?.slice(0, 5)?.map((item, index) => (

          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}

      </Stack>
    </Box>
  )
}

export default ExerciseVideos