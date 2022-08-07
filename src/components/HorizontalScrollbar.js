import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard'
import Equipment from './Equipment';

const LeftArrow = () => {





  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" style={{
        width: '30px',
        height: '30px'
      }} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" style={{
        width: '30px',
        height: '30px'
      }} />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, isBodyParts, isEquipments }) => {
  /*   const bodyParts=useSelector((state)=>state.bodyParts) */


  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {data.map(item => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ?
            < BodyPart item={item}
            />
            :
            isEquipments ?
              <Equipment item={item}
              />
              :
              <ExerciseCard exercise={item} />
          }
        </Box>

      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar