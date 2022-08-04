import {
  DxcBulletedList,
  DxcInset,
  DxcRow,
  DxcStack,
  DxcHeading,
} from "@dxc-technology/halstack-react";

const code = `() => {
    return (
      <DxcInset space="2rem">
        <DxcBulletedList type="disc">
          <DxcBulletedList.Item>Code</DxcBulletedList.Item>
          <DxcBulletedList.Item>Usage</DxcBulletedList.Item>
          <DxcBulletedList.Item>Specifications</DxcBulletedList.Item>
        </DxcBulletedList>
      </DxcInset>
    );
  }`;

const scope = {
  DxcBulletedList,
  DxcInset,
  DxcRow,
  DxcStack,
  DxcHeading,
};
export default { code, scope };
