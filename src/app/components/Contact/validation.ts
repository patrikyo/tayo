import ContactField from "@/app/models/enums/contactField.enum";

const validateNamePattern = (value: string): boolean => {
  value = value.trim();
  const nonAlphabetRegex = /[^a-zåäö ]/gi;

  if (nonAlphabetRegex.test(value)) {
    return true;
  }
  return false;
};

const validateMinMaxLength = (
  value: string,
  min: number,
  max: number
): boolean => {
  if (value.length < min || value.length > max) {
    return true;
  }
  return false;
};

const validateEmailPattern = (value: string): boolean => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(value)) {
    return true;
  }
  return false;
};

const validatePhone = (value: string) => {
  const phoneNumberRegex = /^((00|\+)[1-9]{2}|0)[1-9\s\-][0-9\s\-]*$/;
  if (!phoneNumberRegex.test(value)) {
    return true;
  }
  return false;
};

const getValidationError = (name: ContactField, value: string): string => {
  switch (name) {
    case ContactField.FirstName:
    case ContactField.LastName:
      if (validateNamePattern(value)) {
        return `${
          name === "firstName" ? "För" : "Efter"
        }namnet får endast innehålla bokstäver (a–z, å, ä, ö)`;
      } else if (validateMinMaxLength(value, 2, 50)) {
        return `${
          name === "firstName" ? "För" : "Efter"
        }namnet måste vara mellan 2 och 50 tecken långt`;
      }
      return "";
    case ContactField.EmailAddress:
      if (validateEmailPattern(value)) {
        return "Vänligen ange en giltig e-postadress";
      } else if (validateMinMaxLength(value, 5, 254)) {
        return "E-postadressen måste vara mellan 5 och 254 tecken lång";
      }
      return "";
    case ContactField.PhoneNumber:
      if (validatePhone(value)) {
        return "Telefonnumret måste vara i ett giltigt format";
      } else if (validateMinMaxLength(value, 7, 20)) {
        return "Telefonnumret måste vara mellan 7 och 20 tecken långt";
      }
      return "";
    case ContactField.UserMessage:
      if (validateMinMaxLength(value, 10, 1000)) {
        return "Meddelandet måste vara minst 10 tecken långt";
      }
      return "";
    default:
      return "";
  }
};

export {
  validateNamePattern,
  validateMinMaxLength,
  validateEmailPattern,
  validatePhone,
  getValidationError,
};
