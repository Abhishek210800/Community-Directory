import React, { useEffect, useState } from "react";
import "./css/style.css";
import Nav from "./Nav";
import Main from "./Main";
import Midmain from "./Midmain";
import Footer from "./Footer";
import Axios from "axios";


const Home = () => {
  var config = {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Methods": "GET",
    },
  };
  const [data, setData] = useState([
    {
      status: 1,
      mes: "Get all Categories.",
      category_id: 7,
      catName: "Computer & IT",
      descriptions: "Computer & IT",
      cstatus: "A",
      created_at: "2024-11-22 15:32:18",
    },
    {
      status: 1,
      mes: "Get all Categories.",
      category_id: 3,
      catName: "Entertainment",
      descriptions: "Entertainment",
      cstatus: "A",
      created_at: "2024-11-22 15:30:08",
    },
    {
      status: 1,
      mes: "Get all Categories.",
      category_id: 8,
      catName: "Finance",
      descriptions: "Finance",
      cstatus: "A",
      created_at: "2024-11-22 15:32:43",
    },
    {
      status: 1,
      mes: "Get all Categories.",
      category_id: 2,
      catName: "Healthcare",
      descriptions: "Healthcare",
      cstatus: "A",
      created_at: "2024-11-22 15:29:37",
    },
    {
      status: 1,
      mes: "Get all Categories.",
      category_id: 9,
      catName: "Manufacturing",
      descriptions: "Manufacturing",
      cstatus: "A",
      created_at: "2024-11-22 15:33:02",
    },
    {
      status: 1,
      mes: "Get all Categories.",
      category_id: 4,
      catName: "Marketing",
      descriptions: "Marketing",
      cstatus: "A",
      created_at: "2024-11-22 15:31:00",
    },
    {
      status: 1,
      mes: "Get all Categories.",
      category_id: 10,
      catName: "Others",
      descriptions: "Others",
      cstatus: "A",
      created_at: "2024-11-22 15:33:23",
    },
    {
      status: 1,
      mes: "Get all Categories.",
      category_id: 6,
      catName: "Real Estate",
      descriptions: "Real Estate",
      cstatus: "A",
      created_at: "2024-11-22 15:31:52",
    },
    {
      status: 1,
      mes: "Get all Categories.",
      category_id: 1,
      catName: "Technology",
      descriptions: "Technology",
      cstatus: "A",
      created_at: "2024-11-22 15:27:37",
    },
    
    
   
    {
      status: 1,
      mes: "Get all Categories.",
      category_id: 5,
      catName: "Travel & Hospitality",
      descriptions: "Travel & Hospitality",
      cstatus: "A",
      created_at: "2024-11-22 15:31:24",
    },
    
    
    
   
    
  ]);

  const getUrl = async () => {
    try {
      const res = await Axios.get("https://app.aktivedirectory.com/api/directorydetails/panalink",config);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUrl();
  },);

  return (
    <div>
      <Nav />
      <Main />
      <Midmain data={data} />
      <Footer />
    </div>
  );
};
export default Home;
