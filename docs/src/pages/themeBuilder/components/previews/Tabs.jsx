import React, { useState } from "react";
import styled from "styled-components";
import { DxcTabs } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import twitterIcon from "../../images/TwitterIcon";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (i) => {
    setActiveTab(i);
  };
  const [disabledActiveTab, setDisabledActiveTab] = useState(0);
  const onDisabledTabClick = (i) => {
    setDisabledActiveTab(i);
  };
  const [notificationActiveTab, setNotificationActiveTab] = useState(0);
  const onNotificationActiveTab = (i) => {
    setNotificationActiveTab(i);
  };
  const [largeActiveTab, setLargeActiveTab] = useState(0);
  const onLargeActiveTab = (i) => {
    setLargeActiveTab(i);
  };

  return (
    <TabsContainer>
      <div>
        <Title>Default with content</Title>
        <DxcTabs
          activeTabIndex={activeTab}
          onTabClick={onTabClick}
          tabs={[{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }]}
          margin={{ top: "xsmall", bottom: "xsmall" }}
        ></DxcTabs>

        {activeTab === 0 && (
          <div
            style={{
              height: "150px",
              background: "#fabada",
              margin: "15px",
              padding: "10px",
            }}
          >
            Content 1
          </div>
        )}
        {activeTab === 1 && (
          <div
            style={{
              height: "150px",
              background: "#7ce3ff",
              margin: "15px",
              padding: "10px",
            }}
          >
            Content 2
          </div>
        )}
        {activeTab === 2 && (
          <div
            style={{
              height: "150px",
              background: "#beffa4",
              margin: "15px",
              padding: "10px",
            }}
          >
            Content 3
          </div>
        )}
      </div>
      <Mode text="Disabled">
        <DxcTabs
          activeTabIndex={disabledActiveTab}
          onTabClick={onDisabledTabClick}
          tabs={[
            {
              label: "Tab 1",
            },
            {
              label: "Tab 2",
              icon: twitterIcon,
              isDisabled: "true",
            },
            {
              label: "Tab 3",
            },
          ]}
          margin={{ top: "xsmall", bottom: "xsmall" }}
        ></DxcTabs>
      </Mode>
      <Mode text="With notifications">
        <DxcTabs
          activeTabIndex={notificationActiveTab}
          onTabClick={onNotificationActiveTab}
          tabs={[
            {
              label: "Tab 1",
              icon: twitterIcon,
              notificationNumber: 30,
            },
            {
              label: "Tab 2",
              icon: twitterIcon,
              notificationNumber: 152,
            },
            {
              label: "Tab 3",
              icon: twitterIcon,
              notificationNumber: true,
            },
            {
              label: "Tab 4",
              icon: twitterIcon,
              notificationNumber: false,
            },
            {
              label: "Tab 5",
              icon: twitterIcon,
              isDisabled: "true",
              notificationNumber: true,
            },
          ]}
          margin={{ top: "xsmall", bottom: "xsmall" }}
        ></DxcTabs>
      </Mode>
      <LargeTabsContainer>
        <Title>With scroll buttons</Title>
        <PreviewContainer>
          <DxcTabs
            activeTabIndex={largeActiveTab}
            onTabClick={onLargeActiveTab}
            tabs={[
              { label: "Tab 1" },
              { label: "Tab 2" },
              { label: "Tab 3" },
              { label: "Tab 4" },
              { label: "Tab 5" },
              { label: "Tab 6" },
              { label: "Tab 7" },
              { label: "Tab 8" },
              { label: "Tab 9" },
              { label: "Tab 10" },
              { label: "Tab 11" },
              { label: "Tab 12" },
              { label: "Tab 13" },
              { label: "Tab 14" },
              { label: "Tab 15" },
              { label: "Tab 16" },
              { label: "Tab 17" },
              { label: "Tab 18" },
              { label: "Tab 19" },
              { label: "Tab 20" },
              { label: "Tab 21" },
              { label: "Tab 22" },
              { label: "Tab 23" },
              { label: "Tab 24" },
              { label: "Tab 25" },
            ]}
            margin={{ top: "xsmall", bottom: "xsmall" }}
          ></DxcTabs>
        </PreviewContainer>
      </LargeTabsContainer>
    </TabsContainer>
  );
};

const TabsContainer = styled.div``;

const LargeTabsContainer = styled.div`
  max-width: 1000px;
  background-color: ${(props) =>
    props.mode === "dark" ? "#000000" : "#FFFFFF"};
`;

const PreviewContainer = styled.div`
  padding-left: 10px;
`;

const Title = styled.div`
  font: Bold 12px/17px Open Sans;
  letter-spacing: 1.88px;
  color: ${(props) => (props.mode === "dark" ? "#FFFFFF" : "#000000")};
  text-transform: uppercase;
  padding: 20px 0 10px 10px;
`;

export default Tabs;
