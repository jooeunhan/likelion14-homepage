import React, { useState } from "react";
import TopSection from "./TopSection";
import Members from "./Members";

export default function MembersPage() {
  const [activeGeneration, setActiveGeneration] = useState("14기");

  return (
    <>
      <TopSection 
        activeGeneration={activeGeneration} 
        setActiveGeneration={setActiveGeneration} 
      />
      
      <Members activeGeneration={activeGeneration} />
    </>
  );
}