import * as Yup from "yup";

export const parkinsonFormSchema = Yup.object({
  MDVP_Fo_Hz: Yup.number()
    .required("Please enter value")
    .min(80, "MDVP:Fo(Hz) must be greater than 80")
    .max(300, "MDVP:Fo(Hz) must be less than 300"),
  MDVP_Flo_Hz: Yup.number()
    .required("Please enter value")
    .min(65, "MDVP:Flo(Hz) must be greater than 65")
    .max(255, "MDVP:Flo(Hz) must be less than 255"),
  MDVP_Shimmer: Yup.number()
    .required("Please enter value")
    .min(0.001, "MDVP:Shimmer must be greater than 0.001")
    .max(0.199, "MDVP:Shimmer must be less than 0.199"),
  Shimmer_APQ5: Yup.number()
    .required("Please enter value")
    .min(0.001, "Shimmer:APQ5 must be greater than 0.001")
    .max(0.1, "Shimmer:APQ5 must be less than 0.1"),
  MDVP_APQ: Yup.number()
    .required("Please enter value")
    .min(0.001, "MDVP:APQ must be greater than 0.001")
    .max(0.2, "MDVP:APQ must be less than 0.2"),
  HNR: Yup.number()
    .required("Please enter value")
    .min(5, "HNR must be greater than 5")
    .max(40, "HNR must be less than 40"),
  spread1: Yup.number()
    .required("Please enter value")
    .min(-8, "spread1 must be greater than -8")
    .max(-2, "spread1 must be less than -2"),
  spread2: Yup.number()
    .required("Please enter value")
    .min(0.001, "spread2 must be greater than 0.001")
    .max(0.5, "spread2 must be less than 0.5"),
  PPE: Yup.number()
    .required("Please enter value")
    .min(0.01, "PPE must be greater than 0.01")
    .max(0.6, "PPE must be less than 50"),
});
