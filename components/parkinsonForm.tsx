"use client";


import { parkinsonFormSchema } from "@/lib/formSchema";
import { useFormik } from "formik";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ParkinsonInput } from "@/lib/interface";
import { submitParkinsonInput } from "@/lib/api";
import ResultModal from "./resultModal";
import { useState } from "react";

const ParkinsonForm = () => {

const [status, setStatus] = useState<boolean>(false)

const [result, setResult] = useState<string>("")


  const initialValues = {
    "MDVP_Fo_Hz" :  null ,
    "MDVP_Flo_Hz" :  null,
    "MDVP_Shimmer":  null, 
    "Shimmer_APQ5" :  null,
    "MDVP_APQ" : null,
    "HNR" :  null,
    "spread1":  null,
    "spread2" :  null,
    "PPE" :  null
  };


  const resetForm = () => {
    parkinsonFormik.setValues(initialValues);
    parkinsonFormik.setTouched({});
  };

  const parkinsonFormik = useFormik<ParkinsonInput>({
    initialValues: initialValues,
    validationSchema: parkinsonFormSchema,
    onSubmit: async (values) => {

  
      // Handle form submission logic here
      console.log("Form Submitted!");
      try {
        console.log("Form submitted with values:", values);
        const res = await submitParkinsonInput(values);
        if (res.status === 200) {
          resetForm();
          console.log(res.data);
          setResult(res.data);
          setStatus(true);
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <>
    <form
      onSubmit={parkinsonFormik.handleSubmit}
      className="flex-1 flex flex-col gap-4 items-center w-full mb-8"
     
      encType="multipart/form-data"
    >
      <section className="grid grid-cols-1 min-[450px]:grid-cols-2 gap-8 md:max-w-3xl w-full">
      <div className="flex flex-col gap-2">
        <Label htmlFor="MDVP_Fo_Hz" className="text-black dark:text-white">
          MDVP:Fo(Hz)
        </Label>
        <Input
          name="MDVP_Fo_Hz"
          type="number"
          placeholder="Enter MDVP:Fo(Hz)"
          onChange={parkinsonFormik.handleChange}
          value={parkinsonFormik.values.MDVP_Fo_Hz === null ? '' : parkinsonFormik.values.MDVP_Fo_Hz}
         
        />
        {parkinsonFormik.errors.MDVP_Fo_Hz && parkinsonFormik.touched.MDVP_Fo_Hz ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {parkinsonFormik.errors.MDVP_Fo_Hz}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="MDVP_Flo_Hz" className="text-black dark:text-white">
          MDVP:Flo(Hz)
        </Label>
        <Input
          name="MDVP_Flo_Hz"
          type="number"
          placeholder="Enter MDVP:Flo(Hz)"
          onChange={parkinsonFormik.handleChange}
          value={parkinsonFormik.values.MDVP_Flo_Hz === null ? '' : parkinsonFormik.values.MDVP_Flo_Hz}
        />
        {parkinsonFormik.errors.MDVP_Flo_Hz && parkinsonFormik.touched.MDVP_Flo_Hz ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {parkinsonFormik.errors.MDVP_Flo_Hz}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="MDVP_Shimmer" className="text-black dark:text-white">
          MDVP:Shimmer
        </Label>
        <Input
          name="MDVP_Shimmer"
          type="number"
          placeholder="Enter MDVP:Shimmer"
          onChange={parkinsonFormik.handleChange}
          value={parkinsonFormik.values.MDVP_Shimmer === null ? '' : parkinsonFormik.values.MDVP_Shimmer}
        />
        {parkinsonFormik.errors.MDVP_Shimmer &&
        parkinsonFormik.touched.MDVP_Shimmer ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {parkinsonFormik.errors.MDVP_Shimmer}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="Shimmer_APQ5" className="text-black dark:text-white">
          Shimmer:APQ5
        </Label>
        <Input
          name="Shimmer_APQ5"
          type="number"
          placeholder="Enter Shimmer:APQ5"
          onChange={parkinsonFormik.handleChange}
          value={parkinsonFormik.values.Shimmer_APQ5 === null ? '' : parkinsonFormik.values.Shimmer_APQ5}
        />
        {parkinsonFormik.errors.Shimmer_APQ5 &&
        parkinsonFormik.touched.Shimmer_APQ5 ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {parkinsonFormik.errors.Shimmer_APQ5}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="MDVP_APQ" className="text-black dark:text-white">
          MDVP:APQ
        </Label>
        <Input
          name="MDVP_APQ"
          type="number"
          placeholder="Enter MDVP:APQ"
          onChange={parkinsonFormik.handleChange}
          value={parkinsonFormik.values.MDVP_APQ === null ? '' : parkinsonFormik.values.MDVP_APQ}
        />
        {parkinsonFormik.errors.MDVP_APQ && parkinsonFormik.touched.MDVP_APQ ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {parkinsonFormik.errors.MDVP_APQ}
          </p>
        ) : null}
      </div> 

      <div className="flex flex-col gap-2">
        <Label htmlFor="HNR" className="text-black dark:text-white">
          HNR
        </Label>
        <Input
          name="HNR"
          type="number"
          placeholder="Enter HNR"
          onChange={parkinsonFormik.handleChange}
          value={parkinsonFormik.values.HNR === null ? '' : parkinsonFormik.values.HNR}
        />
        {parkinsonFormik.errors.HNR && parkinsonFormik.touched.HNR ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {parkinsonFormik.errors.HNR}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="spread1" className="text-black dark:text-white">
          Spread1
        </Label>
        <Input
          name="spread1"
          type="number"
          placeholder="Enter Spread1"
          onChange={parkinsonFormik.handleChange}
          value={parkinsonFormik.values.spread1 === null ? '' : parkinsonFormik.values.spread1}
        />
        {parkinsonFormik.errors.spread1 && parkinsonFormik.touched.spread1 ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {parkinsonFormik.errors.spread1}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="spread2" className="text-black dark:text-white">
          Spread2
        </Label>
        <Input
          name="spread2"
          type="number"
          placeholder="Enter Spread2"
          onChange={parkinsonFormik.handleChange}
          value={parkinsonFormik.values.spread2 === null ? '' : parkinsonFormik.values.spread2}
        />
        {parkinsonFormik.errors.spread2 && parkinsonFormik.touched.spread2 ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {parkinsonFormik.errors.spread2}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="PPE" className="text-black dark:text-white">
      PPE
        </Label>
        <Input
          name="PPE"
          type="number"
          placeholder="Enter PPE"
          onChange={parkinsonFormik.handleChange}
          value={parkinsonFormik.values.PPE === null ? '' : parkinsonFormik.values.PPE}
        />
        {parkinsonFormik.errors.PPE && parkinsonFormik.touched.PPE ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {parkinsonFormik.errors.PPE}
          </p>
        ) : null}
      </div>
      </section>

    
      <Button type="submit" className="w-fit mt-4 ">
        Submit
      </Button>
    </form>


    <ResultModal status={status} setStatus={setStatus} result={result}/>
    </>
  );
};

export default ParkinsonForm;
