import { Button } from "@wordpress/components";
import styled from "styled-components";

const Root = styled.div({
  position: "relative",
  height: "100%",
});

const CopyButton = styled(Button)({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1,
});

const TextArea = styled.textarea({
  height: "100%", width: "100%"
});

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function Editor(props: EditorProps) {
  const { value, onChange } = props;
  return (
    <Root>
      <TextArea value={value} onChange={e => onChange(e.target.value)} />
      <CopyButton
        onClick={() => alert("Copied!")}
      >
        Copy
      </CopyButton>
    </Root>
  );
}
