import React, { useState, useCallback } from "react";
import {
  DxcApplicationLayout,
  DxcButton,
  DxcInset,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import defaultTheme from "./themes/DefaultTheme.json";
import advancedTheme from "./themes/AdvancedTheme.json";
import ComponentPreview from "./components/ComponentPreview";
import { downloadFile, makeReadableSidenav } from "./utils";
import ThemeInputsConfig from "./components/ThemeInputsConfig";
import ImportDialog from "./ImportDialog";
import { useParams } from "react-router";
import defaultSchema from "./themes/schemas/Default.schema.json";
import advancedSchema from "./themes/schemas/Advanced.schema.json";
import icons from "./images/GlobalActionsIcons";

const ThemeBuilder = () => {
  const { type } = useParams();

  const [customTheme, setCustomTheme] = useState(
    type === "advancedTheme" ? advancedTheme : defaultTheme
  );
  const customThemeSchema =
    type === "advancedTheme" ? advancedSchema : defaultSchema;

  const [currentComponent, setCurrentComponent] = useState("accordion");
  const [isDialogVisible, setDialogVisible] = useState(false);

  const setComponentProperty = useCallback(
    (propertyName, propertyValue) => {
      setCustomTheme((prevTheme) => ({
        ...prevTheme,
        [currentComponent]: {
          ...prevTheme[currentComponent],
          [propertyName]: propertyValue,
        },
      }));
    },
    [currentComponent]
  );

  return (
    <DxcApplicationLayout
      visibilityToggleLabel="Menu"
      sidenav={
        <DxcApplicationLayout.SideNav
          title={
            <DxcApplicationLayout.SideNav.Title>
              Global theme actions
            </DxcApplicationLayout.SideNav.Title>
          }
        >
          <DxcApplicationLayout.SideNav.Section>
            <DxcInset space="1rem">
              <DxcFlex direction="column">
                <DxcButton
                  mode="text"
                  label="Reset"
                  onClick={() => {
                    setCustomTheme(
                      type === "advancedTheme" ? advancedTheme : defaultTheme
                    );
                  }}
                  icon={icons.reset}
                  size="fillParent"
                />
                <DxcButton
                  mode="secondary"
                  label="Import"
                  onClick={() => {
                    setDialogVisible(true);
                  }}
                  margin={{ top: "xxsmall", bottom: "xxsmall" }}
                  icon={icons.import}
                  size="fillParent"
                />
                <DxcButton
                  mode="primary"
                  label="Export"
                  onClick={() => {
                    downloadFile(customTheme);
                  }}
                  icon={icons.export}
                  size="fillParent"
                />
              </DxcFlex>
            </DxcInset>
          </DxcApplicationLayout.SideNav.Section>
          <DxcApplicationLayout.SideNav.Section>
            <DxcApplicationLayout.SideNav.Group title="Components">
              {Object.keys(
                type === "advancedTheme" ? advancedTheme : defaultTheme
              )
                .filter(
                  (component) =>
                    component !== "footer" &&
                    component !== "header" &&
                    component !== "sidenav"
                )
                .map((component, index) => {
                  return (
                    <DxcApplicationLayout.SideNav.Link
                      key={`componentLink-${index}`}
                      selected={currentComponent === component}
                      onClick={() => {
                        setCurrentComponent(component);
                      }}
                    >
                      {makeReadableSidenav(component)}
                    </DxcApplicationLayout.SideNav.Link>
                  );
                })}
            </DxcApplicationLayout.SideNav.Group>
          </DxcApplicationLayout.SideNav.Section>
        </DxcApplicationLayout.SideNav>
      }
    >
      <DxcApplicationLayout.Main>
        <DxcFlex>
          <ComponentPreview
            customTheme={customTheme}
            componentId={currentComponent}
          />
          <ThemeInputsConfig
            componentInputs={customTheme[currentComponent]}
            componentInputsTypes={customThemeSchema[currentComponent]}
            onChangeCustomTheme={setComponentProperty}
          />
        </DxcFlex>
        {isDialogVisible && (
          <ImportDialog
            customThemeSchema={customThemeSchema}
            setCustomTheme={setCustomTheme}
            setDialogVisible={setDialogVisible}
          />
        )}
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
};

export default ThemeBuilder;
