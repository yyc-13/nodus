import * as yup from "yup";
const schema = yup
  .object()
  .shape({
    free: yup
      .boolean()
      .required("Please select if your content is free or not"),

    subscriber: yup.boolean().when("free", {
      is: true,
      then: yup.boolean().notRequired(),
      otherwise: yup
        .boolean()
        .required("Please select if your content is available to subscribers"),
    }),

    price: yup.number().when("free", {
      is: true,
      then: yup.number().notRequired(),
      otherwise: yup
        .number()
        .required("Price is required")
        .positive("Price must be a positive integer")
        .integer("Price must be an integer")
        .min(1, "Price must be a positive integer"),
    }),

    // basic
    title: yup
      .string()
      .required("Please enter a title")
      .min(1, "Title is too short - should be 1 chars minimum.")
      .max(50, "Title is too long - should be 50 chars maximum."),

    // card
    cardFileType: yup
      .string()
      .oneOf(["image", "video", "audio", "text"])
      .required("Please select a file type for the card"),

    cardDescription: yup.string().required("Please enter a description"),

    // sample
    sample: yup.boolean().when("free", {
      is: false,
      then: yup.boolean().required("Would you provide a free sample?"),
      otherwise: yup.boolean().notRequired(),
    }),
    sampleDescription: yup.string().when("sample", {
      is: true,
      then: yup.string().required("Please enter a description for the sample"),
      otherwise: yup.string().notRequired(),
    }),
    sampleFileType: yup.string().when("sample", {
      is: true,
      then: yup
        .string()
        .oneOf(["image", "video", "audio", "doc"])
        .required("Please select a file type for the sample"),
      otherwise: yup.string().notRequired(),
    }),

    // product
    productDescription: yup.string().required("Please enter a description"),
    productFileType: yup
      .string()
      .oneOf(["image", "video", "audio", "doc"])
      .required("Please select a file type"),

    // category
    category1: yup
      .array()
      .of(yup.string())

      .required("please select at least one category"),
    category2: yup.array().of(yup.string()).notRequired(),

    tags: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.string().required(),
          text: yup.string().required(),
        })
      )
      .max(3, "You can only add up to 3 tags"),
  })
  .required();

export default schema;
