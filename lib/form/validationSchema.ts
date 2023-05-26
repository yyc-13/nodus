// validationSchema.ts
import * as yup from "yup";

const schema = yup
  .object({
    type: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup
      .number()
      .integer("Price must be an integer")
      .min(0, "Price must be a positive integer or 0")
      .required(),
  })
  .required();

export default schema;
