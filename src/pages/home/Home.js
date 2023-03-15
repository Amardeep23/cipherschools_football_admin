import React from 'react'
import './Home.css'
import { Featuredinfo } from '../../Components/featuredInfo/Featuredinfo'
import { Chart } from '../../Components/charts/Chart'
import {data} from '../../data/Datachart'
import { WidgetSmall } from './../../Components/widgetsSmall/WidgetSmall';
import { WidgetLarge } from './../../Components/widgetLarge/WidgetLarge';

export const Home = () => {
  return (
    <div className='home'>
        <Featuredinfo></Featuredinfo>
        <Chart data={data} title="User Analytics" grid dataKey="Active User"></Chart>
        <div className="homeWidgets">
          <WidgetSmall></WidgetSmall>
          <WidgetLarge></WidgetLarge>
        </div>
    </div>
  )
}
