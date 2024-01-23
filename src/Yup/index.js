import * as Yup from "yup";

export const signupSchema = Yup.object({
  email: Yup.string()
    .email("Email must be valid")
    .test("not-gmail", "Gmail addresses are not allowed", (value) => {
      return !value || !value.endsWith("gmail.com");
    })
    .test("not-yahoo", "Yahoo addresses are not allowed", (value) => {
      return !value || !value.endsWith("yahoo.com");
    })
    .test("not-hotmail", "Hotmail addresses are not allowed", (value) => {
      return !value || !value.endsWith("hotmail.com");
    })
    .test("not-live", "Live addresses are not allowed", (value) => {
      return !value || !value.endsWith("live.com");
    })
    .test("not-outlook", "Outlook addresses are not allowed", (value) => {
      return !value || !value.endsWith("outlook.com");
    })
    .test("not-yopmail", "YOPmail addresses are not allowed", (value) => {
      return !value || !value.endsWith("yopmail.com");
    })
    .required("Please enter your email"),

  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords do not match"),
});

export const onBoardingSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name")
    .matches(/^\S*$/, "Name without spaces"),
  lastName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your last name")
    .matches(/^\S*$/, "Name without spaces"),
  phone: Yup.string()
    .matches(/^\+?[0-9]{10,}$/, "Invalid phone number") // Updated pattern to allow "+"
    .required("Please enter your phone number"),
  address: Yup.string().required("Please enter your address"),
});
export const companySchema = Yup.object({
  companyName: Yup.string().required("Company Name is required"),
  companyPhone: Yup.string()
    .matches(/^\d{10}$/, "Please enter a valid 10-digit phone number")
    .required("Company Phone is required"),
  companyAddress: Yup.string().required("Company Address is required"),
  companyWebsite: Yup.string()
    .url("Please enter a valid URL")
    .required("Company Website Link is required"),

  role: Yup.string().required("Role is required"),
});
