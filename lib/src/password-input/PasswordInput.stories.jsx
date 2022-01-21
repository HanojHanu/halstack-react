import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import DxcPasswordInput from "./PasswordInput";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DarkContainer from "../../.storybook/components/DarkSection";

export default {
  title: "Password input ",
  component: DxcPasswordInput,
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcPasswordInput />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcPasswordInput label="Password input" clearable />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Clearable" theme="light" level={4} />
      <DxcPasswordInput label="Password input" clearable value="password" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Non clearable" theme="light" level={4} />
      <DxcPasswordInput label="Non clearable password input" value="password" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Helper text" theme="light" level={4} />
      <DxcPasswordInput label="Help password input" helperText="Help message" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid" theme="light" level={4} />
      <DxcPasswordInput label="Error password input" error="Error message." />
    </ExampleContainer>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <Title title="Dark" theme="dark" level={2} />
        <ExampleContainer>
          <Title title="With label, helper text and value" theme="dark" level={4} />
          <DxcPasswordInput label="Password input" helperText="Help message" value="Password" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="With label, helper text, value and error" theme="dark" level={4} />
          <DxcPasswordInput label="Password input" helperText="Help message" error="Error message." value="Password" />
        </ExampleContainer>
      </DarkContainer>
    </BackgroundColorProvider>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcPasswordInput label="Xxsmmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcPasswordInput label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcPasswordInput label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcPasswordInput label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcPasswordInput label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcPasswordInput label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcPasswordInput label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcPasswordInput label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size" theme="light" level={4} />
      <DxcPasswordInput label="Medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcPasswordInput label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent size" theme="light" level={4} />
      <DxcPasswordInput label="FillParent" size="fillParent" />
    </ExampleContainer>
  </>
);

const Password = () => (
  <ExampleContainer>
    <Title>Show password</Title>
    <DxcPasswordInput label="Password input" value="Password" />
  </ExampleContainer>
);
const PasswordDark = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer>
        <Title>Show password</Title>
        <DxcPasswordInput label="Password input" value="Password" />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

export const ShowPassword = Password.bind({});
ShowPassword.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const passwordBtn = canvas.getByRole("button");
  await userEvent.click(passwordBtn);
};

export const ShowPasswordDark = PasswordDark.bind({});
ShowPasswordDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const passwordBtn = canvas.getByRole("button");
  await userEvent.click(passwordBtn);
};
