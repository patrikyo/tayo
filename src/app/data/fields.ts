import ContactField from "../models/enums/ContactField.enum";

const fields = [
  {
    key: ContactField.FirstName,
    label: "Förnamn",
    type: "text",
    required: true,
    autoComplete: "given-name",
  },
  {
    key: ContactField.LastName,
    label: "Efternamn",
    type: "text",
    required: true,
    autoComplete: "family-name",
  },
  {
    key: ContactField.EmailAddress,
    label: "Epostadress",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    key: ContactField.PhoneNumber,
    label: "Telefonnummer",
    type: "tel",
    required: false,
    autoComplete: "tel",
  },
];

export default fields;
