import React from 'react';

import CustomTabs from "../../components/CustomTabs/CustomTabs";
import Users from "./Users";
import AddIcon from '@material-ui/icons/Add';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddUser from './AddUser';


export default function UserManagement() {

    return (
        
        <CustomTabs
            title="Users:"
            headerColor="info"
            tabs={[
              {
                tabName: "List",
                tabIcon: FormatListBulletedIcon,
                allowed: true,
                tabContent: (
                  <Users />
                )
              },
              {
                tabName: "Add",
                tabIcon: AddIcon,
                allowed: true,
                tabContent: (
                  <AddUser />
                )
              }
            ]}
          />
    );
}
