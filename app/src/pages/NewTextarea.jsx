import React, { useRef, useState } from "react";
import { DxcNewTextarea, DxcButton } from "@dxc-technology/halstack-react";

function App() {
  const ref = useRef(null);
  const [value, setValue] = useState("");
  const onChange = (value) => {
    setValue(value);
  };

  const [customValue, setCustomValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onChangeCustom = (value) => {
    setCustomValue(value);
  };
  const onBlurCustom = ({ value, error }) => {
    setCustomValue(value);
    console.log(error);
    error ? setErrorMessage("Custom error") : setErrorMessage(null);
  };

  const [disabledInput, setDisabledInput] = useState(false);

  return (
    <>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Sizes</h4>
        <DxcNewTextarea
          label="Small"
          margin={{ left: "medium", right: "medium" }}
          size="small"
        />
        <DxcNewTextarea
          label="Medium"
          margin={{ left: "medium", right: "medium" }}
        />
        <DxcNewTextarea
          label="Large"
          margin={{ left: "medium", right: "medium" }}
          size="large"
        />
        <DxcNewTextarea
          label="Fill parent"
          margin={{ left: "medium", right: "medium" }}
          size="fillParent"
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Default"
          helperText="Sample text"
          placeholder="Enter your text here..."
          optional
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Disabled"
          helperText="Sample text"
          placeholder="Enter your text here..."
          disabled
          verticalGrow="manual"
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Controlled"
          helperText="Sample text"
          placeholder="Enter your text here..."
          value={value}
          onChange={onChange}
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Pattern"
          helperText="The value should have at least one letter, one number and one special
          character"
          placeholder="Enter your text here..."
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Length"
          helperText="The value should be 5 < value < 10"
          placeholder="Enter your text here..."
          length={{ min: 5, max: 10 }}
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Custom length error"
          helperText="The value should be 5 < value < 10"
          placeholder="Enter your text here..."
          value={customValue}
          error={errorMessage}
          onChange={onChangeCustom}
          onBlur={onBlurCustom}
          length={{ min: 5, max: 10 }}
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Vertical grow 'none'"
          placeholder="Enter your text here..."
          verticalGrow="none"
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Vertical grow 'manual'"
          placeholder="Enter your text here..."
          verticalGrow="manual"
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Vertical grow 'auto' with long initial value"
          helperText="Initially should also be changed"
          placeholder="Enter your text here..."
          value="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="With rows"
          placeholder="Enter your text here..."
          rows={10}
          verticalGrow="manual"
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Error"
          placeholder="Enter your text here..."
          error="Custom and very long error."
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewTextarea
          label="Ref"
          placeholder="Enter your text here..."
          margin={{ left: "medium", right: "medium" }}
          ref={ref}
          disabled={disabledInput}
        />
        <DxcButton
          onClick={() => {
            setDisabledInput((disabled) => !disabled);
          }}
          label="Change disable"
          margin={{ left: "medium" }}
        ></DxcButton>
      </p>
    </>
  );
}

export default App;
