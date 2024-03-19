import * as Yup from "yup";


export const parkinsonFormSchema = Yup.object({
    MDVP_Fo_Hz : Yup.number().required("Please enter value") ,
    MDVP_Flo_Hz : Yup.number().required("Please enter value"),
    MDVP_Shimmer: Yup.number().required("Please enter value"), 
    Shimmer_APQ5 : Yup.number().required("Please enter value"),
    MDVP_APQ :Yup.number().required("Please enter value"),
    HNR : Yup.number().required("Please enter value"),
    spread1: Yup.number().required("Please enter value"),
    spread2 : Yup.number().required("Please enter value"),
    PPE : Yup.number().required("Please enter value"),
})