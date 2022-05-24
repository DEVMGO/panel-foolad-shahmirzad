import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { BsCartFill, BsFillBarChartFill, BsEnvelopeFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import "./home.css";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => (Math.random() * 1000000) % 20),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => (Math.random() * 1000000) % 20),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
  },
};

const Home = () => {
  const datas = {
    labels: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "پنجشنبه", "جمعه"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="home">
      <div className="header row w-100">
        <div className="box col-sm-3">
          <div className="data-box">
            <span>145</span>
            <h5>تعداد سفارشات</h5>
            <p>لورم ایپسوم متن ساختگی با تولید</p>
            <BsCartFill />
          </div>
        </div>
        <div className="box col-sm-3">
          <div className="data-box">
            <span>200</span>
            <h5>تعداد کاربران</h5>
            <p>لورم ایپسوم متن ساختگی با تولید</p>
            <FaUser />
          </div>
        </div>
        <div className="box col-sm-3">
          <div className="data-box">
            <span>550</span>
            <h5>تعداد بازدید</h5>
            <p>لورم ایپسوم متن ساختگی با تولید</p>
            <BsFillBarChartFill />
          </div>
        </div>
        <div className="box col-sm-3">
          <div className="data-box">
            <span>100</span>
            <h5>پیام های ارسالی</h5>
            <p>لورم ایپسوم متن ساختگی با تولید</p>
            <BsEnvelopeFill />
          </div>
        </div>
      </div>

      <div className="charts row">
        <div className="orders col-md-6">
          <div className="box-chart">
            <h5 className="title">وضعیت سفارش</h5>
            <div className="chart">
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
        <div className="orders col-md-6">
          <div className="box-chart">
            <h5 className="title">سفارشات اخیر</h5>
            <div className="chart">
              <Doughnut data={datas} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
