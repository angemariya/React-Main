import { useState } from "react";
import { Canvas } from "./Canvas";
import { LeftBar } from "./LeftBar";
import { Note } from "./Note";
import styled from "@emotion/styled";
import { useEffect } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export function App() {
  
  const [
    noteState,
    setNoteState
  ] = useState({ isVisible: false, top: 0, left: 0 });
  

const onMouseDown = (evt) => {
    const { pageX, pageY } = evt;
    console.log("mouse down: ", pageX, pageY);
    setNoteState({
      isVisible: true,
      top: pageY - 20,
      left: pageX - 20,
    });
  }
  const onMouseUp = (evt) => {
    console.log("mouse up");
    setNoteState({
      isVisible: false,
      top: 0,
      left: 0,
    });
  }
  
  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp)
    return () => {
      document.removeEventListener("mouseup", onMouseUp)}}
     , [onMouseUp])

  return (
    <div>
      <Wrapper>
        <Canvas>
          <LeftBar onMouseDown={onMouseDown} />
          {noteState.isVisible && <Note top={ noteState.top} left={noteState.left} />}
        </Canvas>
      </Wrapper>
    </div>
  );
}

export default App;
