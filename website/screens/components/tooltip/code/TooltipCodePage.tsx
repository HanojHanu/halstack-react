import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import StatusBadge from "@/common/StatusBadge";
import TableCode from "@/common/TableCode";
type Props = {
  /**
   * Preferred position for displaying the tooltip. It may adjust automatically based on available space.
   */
  position?: "bottom" | "top" | "left" | "right";
  /**
   * Text to be displayed inside the tooltip.
   */
  label: string;
  /**
   * Content in which the Tooltip will be displayed.
   */
  children: React.ReactNode;
};
const sections = [
  {
    title: "Props",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>position</td>
            <td>
              <TableCode>'bottom' | 'top' | 'left' | 'right'</TableCode>
            </td>
            <td>
              Preferred position for displaying the tooltip. It may adjust
              automatically based on available space.
            </td>
            <td>'bottom'</td>
          </tr>
          <tr>
            <td>label</td>
            <td>
              <TableCode>string</TableCode>
            </td>
            <td>Text to be displayed inside the tooltip.</td>
            <td>-</td>
          </tr>
          <tr>
            <td>children</td>
            <td>
              <TableCode>React.ReactNode</TableCode>
            </td>
            <td>Content in which the Tooltip will be displayed.</td>
            <td>-</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic Usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
    ],
  },
];

const TooltipCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/tooltip/code/TooltipCodePage.tsx" />
    </DxcFlex>
  );
};

export default TooltipCodePage;
