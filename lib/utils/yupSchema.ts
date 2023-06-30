import * as yup from "yup";
export const contentSchema = yup
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
      .min(5, "Title is too short - should be 5 chars minimum.")
      .max(100, "Title is too long - should be 100 chars maximum."),

    // card
    cardFileType: yup
      .string()
      .oneOf(["image", "video", "audio", "text"])
      .required("Please select a file type for the card"),

    cardDescription: yup
      .string()
      .required("Please enter a description")
      .min(10, "Description is too short - should be 10 chars minimum.")
      .max(2000, "Description is too long - should be 2000 chars maximum."),

    // sample
    sample: yup
      .boolean()
      .required("please select if you want to provide a sample"),

    sampleDescription: yup.string().when("sample", {
      is: true,
      then: yup
        .string()
        .required("Please enter a description for the sample")
        .min(10, "description is too short - should be 10 chars minimum.")
        .max(2000, "description is too long - should be 2000 chars maximum."),
      otherwise: yup.string().notRequired(),
    }),
    sampleFileType: yup.string().when(["sample", "free"], {
      is: true,
      then: yup
        .string()
        .oneOf(["video", "audio", "doc"])
        .required("Please select a file type for the sample"),
      otherwise: yup.string().notRequired(),
    }),

    // product
    productDescription: yup
      .string()
      .required("Please enter a description")
      .min(10, "Description is too short - should be 10 chars minimum.")
      .max(2000, "Description is too long - should be 2000 chars maximum."),
    productFileType: yup
      .string()
      .oneOf(["video", "audio", "doc"])
      .required("Please select a file type"),

    // category
    category1: yup.array().of(yup.string()).required("please select a form"),
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

import { socials } from "@/lib/Socials";
const basicUserInfo = yup
  .object()
  .shape({
    userID: yup
      .string()
      .required("Please enter a user ID")
      .matches(
        /^[A-Za-z0-9_]*$/,
        "ID can only contain alphanumeric characters and underscores."
      )
      .min(4, "UserID is too short - should be 4 chars minimum.")
      .max(30, "UserID is too long - should be 30 chars maximum.")
      .notOneOf(["admin", "nodus"], "This id is reserved."),

    userName: yup
      .string()
      .required("Please enter a user name")

      .min(3, "User name is too short - should be 3 chars minimum.")
      .max(30, "User name is too long - should be 30 chars maximum."),

    about: yup
      .string()
      .required("Please enter about")
      .min(1, "About is too short - should be 1 chars minimum.")
      .max(300, "About is too long - should be 300 chars maximum."),
  })
  .required();

const socialSchema = yup
  .string()
  .transform((value) => (value === "" ? undefined : value))
  .notRequired()
  .min(1, "handle is too short - should be 1 chars minimum.")
  .max(75, "handle is too long - should be 75 chars maximum.");

const validationSchema = socials.reduce((acc, social) => {
  acc[social.name] = socialSchema;
  return acc;
}, {});
export const userInfoSchema = basicUserInfo.shape(validationSchema).required();

export const collectionSchema = yup
  .object()
  .shape({
    collectionName: yup
      .string()
      .required("Please enter a collection name")
      .min(1, "Title is too short - should be 1 chars minimum.")
      .max(50, "Title is too long - should be 50 chars maximum."),
    collectionDescription: yup
      .string()
      .notRequired()
      .min(1, "Description is too short - should be 1 chars minimum.")
      .max(300, "Description is too long - should be 300 chars maximum."),
    private: yup.boolean().required("Please select if it's private."),
  })
  .required();

export const membershipPlanSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter a name for your membership")
    .min(1, "Name is too short - should be 1 chars minimum.")
    .max(50, "Name is too long - should be 50 chars maximum."),
  about: yup
    .string()
    .notRequired()
    .min(1, "Description is too short - should be 1 chars minimum.")
    .max(300, "Description is too long - should be 300 chars maximum."),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive integer")
    .integer("Price must be an integer")
    .min(1, "Price must be a positive integer"),
  contents: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string(),
        value: yup.string(),
      })
    )
    .required(),
});
