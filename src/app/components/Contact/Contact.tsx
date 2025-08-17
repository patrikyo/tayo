"use client";
import { useState } from "react";
import styles from "./Contact.module.css";
import { getValidationError } from "./validation";
import ContactField from "@/app/models/enums/contactField.enum";
import Status from "@/app/models/enums/status.enum";
import ContactInput from "@/app/models/interfaces/contactInput.interface";
import fields from "@/app/data/fields";
import Spinner from "../Spinner/Spinner";
import { useRouter } from "next/navigation";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ContactInput>({
    [ContactField.FirstName]: "",
    [ContactField.LastName]: "",
    [ContactField.EmailAddress]: "",
    [ContactField.PhoneNumber]: "",
    [ContactField.UserMessage]: "",
  });

  const [isFormValid, setIsFormValid] = useState<ContactInput>({
    [ContactField.FirstName]: "",
    [ContactField.LastName]: "",
    [ContactField.EmailAddress]: "",
    [ContactField.PhoneNumber]: "",
    [ContactField.UserMessage]: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [submitStatus, setSubmitStatus] = useState<Status | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateInput = (name: ContactField, value: string) => {
    const error = getValidationError(name, value);
    setIsFormValid({ ...isFormValid, [name]: error });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const form = JSON.stringify(formData);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: form,
    };
    fetch("https://contact-api-3l0q.onrender.com/api/contacts", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        setSubmitStatus(Status.Success);
        setFormData({
          [ContactField.FirstName]: "",
          [ContactField.LastName]: "",
          [ContactField.EmailAddress]: "",
          [ContactField.PhoneNumber]: "",
          [ContactField.UserMessage]: "",
        });
        setIsFormValid({
          [ContactField.FirstName]: "",
          [ContactField.LastName]: "",
          [ContactField.EmailAddress]: "",
          [ContactField.PhoneNumber]: "",
          [ContactField.UserMessage]: "",
        });
        setIsLoading(false);
        router.push("/thanks");
      })
      .catch(() => {
        setSubmitStatus(Status.Error);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.contactInfoContainer}>
        {fields.map((field) => {
          const errorId = `${field.key}-error`;
          return (
            <div className={styles.contactInputContainer} key={field.key}>
              <label className={styles.contactLabel} htmlFor={field.key}>
                {field.label}
              </label>
              <input
                id={field.key}
                className={`${styles.contactInfo} ${
                  touched && isFormValid[field.key]
                    ? styles.invalidContactInfo
                    : styles.validContactInfo
                }`}
                type={field.type}
                name={field.key}
                value={formData[field.key]}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [field.key]: e.target.value,
                  });
                  validateInput(field.key, e.target.value);
                }}
                onBlur={() => setTouched({ ...touched, [field.key]: true })}
                required={field.required}
                autoComplete={field.autoComplete}
                aria-invalid={!!isFormValid[field.key]}
                aria-describedby={errorId}
              />
              {touched[field.key] && isFormValid[field.key] && (
                <span id={errorId} className={styles.error} role="alert">
                  {isFormValid[field.key]}
                </span>
              )}
            </div>
          );
        })}

        {/* Meddelande */}
        <div className={styles.contactInputContainer}>
          <label
            className={styles.contactLabel}
            htmlFor={ContactField.UserMessage}
          >
            Meddelande
          </label>
          <textarea
            id={ContactField.UserMessage}
            className={`${styles.contactInfo} ${styles.textArea} ${
              touched && isFormValid.userMessage
                ? styles.invalidContactInfo
                : styles.validContactInfo
            }`}
            name={ContactField.UserMessage}
            value={formData.userMessage}
            onChange={(e) => {
              setFormData({ ...formData, userMessage: e.target.value });
              validateInput(ContactField.UserMessage, e.target.value);
            }}
            onBlur={() =>
              setTouched({ ...touched, [ContactField.UserMessage]: true })
            }
            required
            aria-invalid={!!isFormValid.userMessage}
            aria-describedby={`${ContactField.UserMessage}-error`}
          ></textarea>
          {touched[ContactField.UserMessage] && isFormValid.userMessage && (
            <span
              id={`${ContactField.UserMessage}-error`}
              className={styles.error}
              role="alert"
            >
              {isFormValid.userMessage}
            </span>
          )}
        </div>
      </div>
      <div className={styles.submitContainer}>
        {!isLoading && (
          <button
            className={`${styles.sendBtn} ${
              submitStatus
                ? styles.withStatusMessage
                : styles.withoutStatusMessage
            }`}
            type="submit"
          >
            skicka meddelande
          </button>
        )}

        {/** spinner */}
        {isLoading && (
          <div className={styles.withoutStatusMessage}>
            <Spinner size={32} color="#676776" />
          </div>
        )}

        {!isLoading && (
          <div className="mb-2">
            {submitStatus === Status.Error && (
              <div
                className={styles.errorContainer}
                role="alert"
                aria-live="polite"
              >
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className={styles.icon}
                />
                Ett fel uppstod. Var god försök igen om en stund.
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  );
};

export default Contact;
