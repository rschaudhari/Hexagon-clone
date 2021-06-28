import React from 'react';

import CustomTabs from "../../components/CustomTabs/CustomTabs";
import AddIcon from '@material-ui/icons/Add';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import OpenOrders from './OpenOrders';
import OkayOrders from './OkayOrders';
import NotOkayOrders from './NotOkayOrders';


export default function OrderManagement() {

    return (
        
        <CustomTabs
            title="Orders:"
            headerColor="info"
            tabs={[
              {
                tabName: "Open",
                tabIcon: FormatListBulletedIcon,
                allowed: true,
                tabContent: (
                  <OpenOrders />
                )
              },
              {
                tabName: "OkayOrders",
                tabIcon: FormatListBulletedIcon,
                allowed: true,
                tabContent: (
                  <OkayOrders />
                )
              },
              {
                tabName: "NotOkayOrders",
                tabIcon: FormatListBulletedIcon,
                allowed: true,
                tabContent: (
                  <NotOkayOrders />
                )
              }
            ]}
          />
    );
}
