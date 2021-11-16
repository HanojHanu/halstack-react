import { DxcNewInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const actionImg = {
    onClick: () => {
      console.log("Searching...");
    },
    icon: "https://cdn.iconscout.com/icon/free/png-256/search-1767866-1502119.png",
  };

  const actionSvg = {
    onClick: () => {
      console.log("Copied.");
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
    ),
  };

  return (
    <div style={{ display: "flex" }}>
      <DxcNewInputText
        action={actionSvg}
        label="Using a SVG"
        clearable
        margin="medium"
      />
      <DxcNewInputText
        action={actionImg}
        label="Using a URL"
        clearable
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };
