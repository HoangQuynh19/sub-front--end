import React, { useCallback, useState } from 'react';
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import  NarBar from '../../shared/components/navigation/NavBar';
import Routing from './Routing';

AOS.init({once: true});

export default function BadgeOverlap() {
  return (
    <div>
      <NarBar />
      <Routing/>
    </div>
   
  );
}
