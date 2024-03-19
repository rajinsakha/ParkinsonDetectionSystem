import axios from "axios";
import { ParkinsonInput } from "./interface";

export const submitParkinsonInput = async (formData:ParkinsonInput) =>{
    let headers = { headers: {
      "Content-Type": "application/json",
    },
  };
     const response = await axios.post("https://parkinson-detection-backend.onrender.com/parkinsons_detection/",formData,headers)
     return response;
  }