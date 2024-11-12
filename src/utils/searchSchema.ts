import * as yup from "yup";

export const searchSchema = yup
  .string()
  .trim()
  .notRequired()
  .matches(/^[a-zA-Z0-9\s]*$/, "Use only latin letters and numbers");
