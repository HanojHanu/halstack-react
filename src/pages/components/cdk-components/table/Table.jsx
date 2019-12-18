import React from "react";
import { DxcTabsForSections } from "@diaas/dxc-react-cdk";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";

import defaultTable from "./examples/defaultTable";

function Tabs() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Tabs</DocTitle>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Simple Table"
                  example={defaultTable}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Tabs;
