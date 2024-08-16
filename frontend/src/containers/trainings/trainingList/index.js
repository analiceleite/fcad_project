import React, { useState } from 'react';
import { NavbarTraining, Underline, NavbarTrainingItem, ListTraining } from './styles';
import TrainingListItem from '../../../components/training/trainingListItem';

const TrainingList = () => {
  const [itemActive, setItemActive] = useState(0)

  console.log(itemActive)
  return (
    <>
      <NavbarTraining>
        <ul>
          <NavbarTrainingItem 
            onClick={() => {setItemActive(0)}}
          >
            Ativos
          </NavbarTrainingItem>
          <NavbarTrainingItem 
            onClick={() => {setItemActive(1)}}
          >
            Realizados
          </NavbarTrainingItem>
          <Underline active={itemActive}></Underline> 
        </ul>
      </NavbarTraining>
      <ListTraining>
        <TrainingListItem bgColor={'#72C8F3'} />
        <TrainingListItem bgColor={'#FFBA08'} />
        <TrainingListItem bgColor={'#32589B'} />
        <TrainingListItem bgColor={'#72C8F3'} />
        <TrainingListItem bgColor={'#FFBA08'} />
      </ListTraining>
    </>
  );
};

export default TrainingList;