import CommonWrap from "../component/CommonWrap";
import { useMemo, useState } from "react";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Subcription from "./Subcription";
import Revenue from "./Revenue";
import TabContext from "@mui/lab/TabContext";
import type { SyntheticEvent } from "react";
import TabsContent from "../component/TabsContent";
import Paper from "@mui/material/Paper";
import { TabPanel } from "@mui/lab";

const getTabs = () => [
  {
    id: 1,
    label: "Subcription",
    value: "Subcription",
    component: <Subcription />,
  },
  {
    id: 2,
    label: "Revenue",
    value: "Revenue",
    component: <Revenue />,
  },
];

const Dashboard = () => {
  const [tab, setTab] = useState<string>("Subcription");
  const tabs = useMemo(() => getTabs(), []);

  const handleOnTabChange = (_event: SyntheticEvent, tab: string) => {
    setTab(tab);
  };

  return (
    <CommonWrap title="Dashboard">
      <TabContext value={tab}>
        <Tabs
          value={tab}
          onChange={handleOnTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 42,
            [`& .${tabsClasses.indicator}`]: {
              display: "none",
            },
          }}
        >
          {tabs.map(({ value, label }) => {
            return (
              <Tab
                key={value}
                value={value}
                label={label}
                iconPosition="start"
                disableRipple
                sx={{
                  minHeight: 42,
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                  [`&.${tabClasses.selected}`]: {
                    color: "common.white",
                    bgcolor: "green",
                  },
                }}
              />
            );
          })}
        </Tabs>
        <TabsContent component={Paper} divider={false}>
          {tabs.map(({ value, label, component }) => {
            const TabContent = () => (
              <TabPanel value={value} sx={{ p: 0, height: 1 }}>
                {component || label}
              </TabPanel>
            );
            return <TabContent key={value} />;
          })}
        </TabsContent>
      </TabContext>
    </CommonWrap>
  );
};

export default Dashboard;
