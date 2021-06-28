import React from 'react';

import CustomTabs from "../../components/CustomTabs/CustomTabs";
import AddIcon from '@material-ui/icons/Add';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddOrder from './AddOrder';
import MyOrderList from './MyOrderList';


export default function MyOrderManagement() {

    return (
        
        <CustomTabs
            title="Orders:"
            headerColor="info"
            tabs={[
              {
                tabName: "Add",
                tabIcon: AddIcon,
                allowed: true,
                tabContent: (
                  <AddOrder />
                )
              },
              {
                tabName: "List",
                tabIcon: FormatListBulletedIcon,
                allowed: true,
                tabContent: (
                  <MyOrderList/>
                )
              },
             
            ]}
          />
    );
}
