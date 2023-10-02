import React, { useState, useContext, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import { getMargin } from "../common/utils";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../useTheme";
import useTranslatedLabels from "../useTranslatedLabels";
import BackgroundColorContext, { BackgroundColors } from "../BackgroundColorContext";
import CheckboxPropsType, { RefType } from "./types";

const checkedIcon = (
  <svg fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
  </svg>
);

const DxcCheckbox = React.forwardRef<RefType, CheckboxPropsType>(
  (
    {
      checked,
      defaultChecked = false,
      value,
      label = "",
      labelPosition = "before",
      name = "",
      disabled = false,
      optional = false,
      readOnly = false,
      onChange,
      margin,
      size = "fitContent",
      tabIndex = 0,
    },
    ref
  ): JSX.Element => {
    const [labelId] = useState(`label-checkbox-${uuidv4()}`);
    const [innerChecked, setInnerChecked] = useState(defaultChecked);

    const checkboxRef = useRef(null);

    const colorsTheme = useTheme();
    const backgroundType = useContext(BackgroundColorContext);
    const translatedLabels = useTranslatedLabels();

    const handleCheckboxChange = () => {
      if (!disabled && !readOnly) {
        document.activeElement !== checkboxRef?.current && checkboxRef?.current?.focus();
        const newChecked = checked ?? innerChecked;
        checked ?? setInnerChecked((innerChecked) => !innerChecked);
        onChange?.(!newChecked);
      }
    };

    const handleKeyboard = (event) => {
      switch (event.key) {
        case " ":
          event.preventDefault();
          handleCheckboxChange();
      }
    };

    return (
      <ThemeProvider theme={colorsTheme.checkbox}>
        <MainContainer
          disabled={disabled}
          readOnly={readOnly}
          onClick={handleCheckboxChange}
          margin={margin}
          size={size}
          checked={checked ?? innerChecked}
          backgroundType={backgroundType}
          ref={ref}
        >
          {label && (
            <LabelContainer
              id={labelId}
              disabled={disabled}
              backgroundType={backgroundType}
              labelPosition={labelPosition}
            >
              {label}
              {optional && ` ${translatedLabels.formFields.optionalLabel}`}
            </LabelContainer>
          )}
          <ValueInput
            type="checkbox"
            checked={checked ?? innerChecked}
            name={name}
            aria-hidden="true"
            value={value}
            disabled={disabled}
            readOnly
          />
          <CheckboxContainer>
            <Checkbox
              onKeyDown={handleKeyboard}
              role="checkbox"
              tabIndex={disabled ? -1 : tabIndex}
              aria-checked={checked ?? innerChecked}
              aria-disabled={disabled}
              aria-readonly={readOnly}
              aria-required={!disabled && !optional}
              aria-labelledby={labelId}
              backgroundType={backgroundType}
              checked={checked ?? innerChecked}
              disabled={disabled}
              readOnly={readOnly}
              ref={checkboxRef}
            >
              {(checked ?? innerChecked) && checkedIcon}
            </Checkbox>
          </CheckboxContainer>
        </MainContainer>
      </ThemeProvider>
    );
  }
);

const sizes = {
  small: "120px",
  medium: "240px",
  large: "480px",
  fillParent: "100%",
  fitContent: "fit-content",
};

const calculateWidth = (margin: CheckboxPropsType["margin"], size: CheckboxPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : sizes[size];

const getDisabledColor = (props, element: string) => {
  switch (element) {
    case "check":
      return props.backgroundType === "dark" ? props.theme.disabledCheckColorOnDark : props.theme.disabledCheckColor;
    case "background":
      return props.backgroundType === "dark"
        ? props.theme.disabledBackgroundColorCheckedOnDark
        : props.theme.disabledBackgroundColorChecked;
    case "border":
      return props.backgroundType === "dark" ? props.theme.disabledBorderColorOnDark : props.theme.disabledBorderColor;
    case "label":
      return props.backgroundType === "dark" ? props.theme.disabledFontColorOnDark : props.theme.disabledFontColor;
  }
};

const getReadOnlyColor = (props, element: string) => {
  switch (element) {
    case "check":
      return props.theme.readOnlyCheckColor;
    case "background":
      return props.theme.readOnlyBackgroundColorChecked;
    case "hoverBackground":
      return props.theme.hoverReadOnlyBackgroundColorChecked;
    case "border":
      return props.theme.readOnlyBorderColor;
    case "hoverBorder":
      return props.theme.hoverReadOnlyBorderColor;
  }
};

const getEnabledColor = (props, element: string) => {
  switch (element) {
    case "check":
      return props.backgroundType === "dark" ? props.theme.checkColorOnDark : props.theme.checkColor;
    case "background":
      return props.backgroundType === "dark"
        ? props.theme.backgroundColorCheckedOnDark
        : props.theme.backgroundColorChecked;
    case "hoverBackground":
      return props.backgroundType === "dark"
        ? props.theme.hoverBackgroundColorCheckedOnDark
        : props.theme.hoverBackgroundColorChecked;
    case "border":
      return props.backgroundType === "dark" ? props.theme.borderColorOnDark : props.theme.borderColor;
    case "hoverBorder":
      return props.backgroundType === "dark" ? props.theme.hoverBorderColorOnDark : props.theme.hoverBorderColor;
    case "label":
      return props.backgroundType === "dark" ? props.theme.fontColorOnDark : props.theme.fontColor;
  }
};

const LabelContainer = styled.span<{
  disabled: CheckboxPropsType["disabled"];
  backgroundType: BackgroundColors;
  labelPosition: CheckboxPropsType["labelPosition"];
}>`
  order: ${(props) => (props.labelPosition === "before" ? 0 : 1)};
  color: ${(props) => (props.disabled ? getDisabledColor(props, "label") : getEnabledColor(props, "label"))};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
`;

const ValueInput = styled.input`
  display: none;
`;

const CheckboxContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
`;

const Checkbox = styled.span<{
  checked: CheckboxPropsType["checked"];
  disabled: CheckboxPropsType["disabled"];
  readOnly: CheckboxPropsType["readOnly"];
  backgroundType: BackgroundColors;
}>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  border: 2px solid
    ${(props) =>
      props.disabled
        ? getDisabledColor(props, "border")
        : props.readOnly
        ? getReadOnlyColor(props, "border")
        : getEnabledColor(props, "border")};
  border-radius: 2px;
  background-color: ${(props) =>
    props.checked
      ? props.disabled
        ? getDisabledColor(props, "check")
        : props.readOnly
        ? getReadOnlyColor(props, "check")
        : getEnabledColor(props, "check")
      : "transparent"};
  color: ${(props) =>
    props.disabled
      ? getDisabledColor(props, "background")
      : props.readOnly
      ? getReadOnlyColor(props, "background")
      : getEnabledColor(props, "background")};

  &:focus {
    outline: 2px solid
      ${(props) => (props.backgroundType === "dark" ? props.theme.focusColorOnDark : props.theme.focusColor)};
    outline-offset: 2px;
  }
  svg {
    position: absolute;
    width: 22px;
    height: 22px;
  }
  ${(props) => props.disabled && "pointer-events: none;"}
`;

const MainContainer = styled.div<{
  margin: CheckboxPropsType["margin"];
  size: CheckboxPropsType["size"];
  disabled: CheckboxPropsType["disabled"];
  readOnly: CheckboxPropsType["readOnly"];
  checked: CheckboxPropsType["checked"];
  backgroundType: BackgroundColors;
}>`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.checkLabelSpacing};
  width: ${(props) => calculateWidth(props.margin, props.size)};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  cursor: ${(props) => (props.disabled ? "not-allowed" : props.readOnly ? "default" : "pointer")};

  &:hover ${Checkbox} {
    border: 2px solid
      ${(props) => {
        if (!props.disabled)
          return props.readOnly ? getReadOnlyColor(props, "hoverBorder") : getEnabledColor(props, "hoverBorder");
      }};
    color: ${(props) => {
      if (!props.disabled)
        return props.readOnly ? getReadOnlyColor(props, "hoverBackground") : getEnabledColor(props, "hoverBackground");
    }};
  }
`;

export default DxcCheckbox;
