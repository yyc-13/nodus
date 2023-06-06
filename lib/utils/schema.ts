import * as yup from "yup";
const schema = yup
  .object()
  .shape({
    free: yup
      .boolean()
      .required("Please select if your content is free or not"),

    memberships: yup
      .array()
      .of(
        yup.object().shape({
          label: yup.string(),
          value: yup.string(),
        })
      )
      .when(["free", "price"], {
        is: (free, price) => free === false && price == 0,
        then: yup
          .array()
          .required(
            "Select what membership you want this content to be access to."
          ),
        otherwise: yup.array().notRequired(),
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
    sample: yup
      .boolean()
      .required("please select if you want to provide a sample"),

    sampleDescription: yup.string().when("sample", {
      is: true,
      then: yup.string().required("Please enter a description for the sample"),
      otherwise: yup.string().notRequired(),
    }),
    sampleFileType: yup.string().when(["sample", "free"], {
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

      .required("please select a form"),
    category2: yup
      .array()
      .of(yup.string())
      .required("please select a category"),

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
