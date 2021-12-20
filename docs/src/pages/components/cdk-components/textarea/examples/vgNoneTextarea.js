import { DxcTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcTextarea
      label="Vertical grow"
      helperText="'none'"
      verticalGrow="none"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcTextarea,
  useState,
};

export default { code, scope };