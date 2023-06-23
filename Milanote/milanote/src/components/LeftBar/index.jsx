import { Button } from "../Button";
import { Wrapper } from "./Styled/Wrapper";

import StickyNotes from './assets/13EBD60A.png'
import Link from './assets/link.png'

export const LeftBar = ({onMouseDown}) => {

  return (
    <Wrapper>
      <Button onMouseDown={onMouseDown} background={StickyNotes}>Note</Button>
      <Button background={Link}>Link</Button>
    </Wrapper>
  );
};
