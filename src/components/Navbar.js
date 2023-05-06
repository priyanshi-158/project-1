import * as React from "react";
import { Tabs, Tab } from "baseui/tabs-motion";
import { useStyletron} from 'baseui';
import Status from "../pages/Status";
import Payments from "../pages/Payments";
export default () => {
  const [activeKey, setActiveKey] = React.useState("0");
  const [css] = useStyletron();
  return (
    <div className={css({
        
    })}>
    <Tabs
      activeKey={activeKey}
      onChange={({ activeKey }) => {
        setActiveKey(activeKey);
      }}
      activateOnFocus
    >
      <Tab title="Status">
        <Status/>
      </Tab>
      <Tab title="Payment">
        <Payments/>
      </Tab>
      <Tab title="Overview">Content 3</Tab>
    </Tabs>
    </div>
  );
}