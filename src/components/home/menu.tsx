import React from "react";
import {
  PlusCircleOutlined,
  SettingOutlined,
  LineChartOutlined,
  BarChartOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  EditOutlined,
  CalculatorOutlined,
  TableOutlined,
  DatabaseOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import './home.css'
const MainMenu = () => {
    const onClick:any= (e:any) => {
        console.log('click ', e);
    };
    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    ): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
    }
    const items: MenuProps['items'] = [
        getItem('Charts', 'chart', <PlusCircleOutlined />, [
          getItem('Line Charts', 'line', <LineChartOutlined />, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
          getItem('Column Charts', 'column', <BarChartOutlined />, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
          getItem('Area Charts', 'area',<AreaChartOutlined />, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
          getItem('Pie Charts', 'pie',<PieChartOutlined />, [getItem('Option 7', '7'), getItem('Option 8', '8')])
        ]),
        getItem('Data Visualization', 'data', <DatabaseOutlined />, [
            getItem('Table View', 'table', <TableOutlined />, [getItem('Table 1', '1'), getItem('Table 2', '2')]),
            getItem('Statistic View', 'statistic', <CalculatorOutlined />, [getItem('Table 1', '1'), getItem('Table 2', '2')]),
            getItem('Edit Table Data', 'edit',<EditOutlined />, [getItem('Table 1', '1'), getItem('Table 2', '2')]),
        ]),
      
        { type: 'divider' },
      
        getItem('Settings', 'sub4', <SettingOutlined />, [
          getItem('Background Color', '9'),
          getItem('Export Data', '10'),
          getItem('Import Data', '11'),
          getItem('Serice Center', '12'),
        ]),
      
        getItem('About Us', 'grp', null),
      ];
    
    return (
        <>
        <div>
            <Menu
            onClick={onClick}
            className='main-menu'
            mode="inline"
            items={items}/>
        </div>
        </>
    );
};
export default MainMenu;
