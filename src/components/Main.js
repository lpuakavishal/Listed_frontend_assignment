import React from "react";
import PieComponents from "./PieComponents"
import { BsCalendarEvent } from "react-icons/bs";
import { BsTags } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import "./Main.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Week 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Week 5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },

];

export const Main = () => {
  return (
    <div className="pt-[0.75rem] px-[3rem] ">
      <div className="grid grid-cols-4 gap-[50px] mt-[25px] pb-[15px]">
        <div>
          <div className="h-[120px] rounded-[20px] bg-[#DDEFE0] sample">
            <h2 className="text-[#000000] text-sm leading-[17px] pt-[45px] px-[25px] font1">
              Total Revenues
            </h2>
            <span className="text-[24px] leading-[24px] text-[#000000] mt-[5px] px-[25px] font2">
              $2,129,430
            </span>
            <div className="b_icon">
              <BsCalendarEvent />
            </div>
          </div>
        </div>
        <div>
          <div className="h-[120px] rounded-[20px] bg-[#F4ECDD]">
            <h2 className="text-[#000000] text-sm leading-[17px] pt-[45px] px-[25px] font1 ">
              Total Transactions
            </h2>
            <h1 className="text-[24px] leading-[24px] text-[#000000] mt-[5px] px-[25px] font2">
              1,520
            </h1>
            <div className="b_icon">
              <BsTags />
            </div>
          </div>
        </div>
        <div>
          <div className="h-[120px] rounded-[20px] bg-[#EFDADA]">
            <h2 className="text-[#000000] text-sm leading-[17px] pt-[45px] px-[25px] font1  ">
              Total Likes
            </h2>
            <h1 className="text-[24px] leading-[24px] text-[#000000] mt-[5px] px-[25px] font2">
              9,721
            </h1>
            <div className="b_icon">
              <BiLike />
            </div>
          </div>
        </div>
        <div>
          <div className="h-[120px] rounded-[20px] bg-[#DEE0EF]">
            
            <h2 className="text-[#000000] text-sm leading-[17px] pt-[45px] px-[25px] font1 ">
              Total Users
            </h2>
            <h1 className="text-[24px] leading-[24px] text-[#000000] mt-[5px] px-[25px] font2">
              892
            </h1>
            <div className="b_icon">
              <FiUsers />
            </div>
            
          </div>
        </div>
      </div>
      <div>
        
        <div className="bg-[#FFFFFF] l_chart">
          <div className="px-[30px] pt-[5px]">
           <h2 className="ch_acti">Activities</h2>
           <p className="ch_actii">May - June 2021</p>
          </div>
          <ResponsiveContainer width="100%" height="100%">
        
            <LineChart
              width={1100}
              height={300}
              data={data}
              margin={{
                top:20,
                right: 30,
                left: 20,
                bottom:50,
              }}
            >
              <CartesianGrid strokeDasharray="0 0" />
              <XAxis dataKey="name"  />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#9BDD7C"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line type="monotone" dataKey="uv" stroke="#E9A0A0" strokeWidth={2} />
            </LineChart>
           
            </ResponsiveContainer>
        </div>
        
      </div>
      <div className="grid grid-cols-2 gap-[4vw] mt-[1rem]">
        <div className="">
          <div className="today_sechedule">
            <div className="flex item-center justify-between px-[5px] pie_content">
              <span className="to_po">Top products</span>
              <span className="too_po">May - June 2021</span>
            </div>
            
            <div className="pie_con">
              <div className="pie_chart">
              
                <PieComponents/>
            
              </div>
              <div>
                <div className="btt1">
                  <div className="bt1"></div>
                  <div>
                    <p className="pa_up">Basic Tees</p>
                    <p className="ch_down">30%</p>
                  </div>
                </div>
                <div className="btt1">
                  <div className="bt1"></div>
                  <div>
                    <p className="pa_up">Custom Short Pants</p>
                    <p className="ch_down">30%</p>
                  </div>
                </div>
                <div className="btt1">
                  <div className="bt1"></div>
                  <div>
                    <p className="pa_up">Super Hoodies</p>
                    <p className="ch_down">40%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="today_sechedule">
           <div className="sec_content">
              <div className="sec_content1">
                <span className="sec_con1">Today’s schedule</span>
                <span className="sec_con2">See all</span>
              </div>
              <div className="to_di1">
                <div className="to_di2"></div>
                <div className="px-[0.8vw]">
                  <p className="para">Meeting with suppliers from Kuta Bali</p>
                  <p className="paraa">14.00-15.00</p>
                </div>
                <div></div>
              </div>
              <div className="to_dii1">
                <div className="to_dii2"></div>
                <div className="px-[0.8vw]">
                  <p className="para">Meeting with suppliers from ring rose</p>
                  <p className="paraa">14.00-15.00</p>
                </div>
                <div></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
