"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/languageContext";
import en from "@/langs/en.json";
import fa from "@/langs/fa.json";
import ConnectWithMeField from "../ui/connectionForm/connectWithMeFormField";
import { Mail, Phone, Send, SendIcon } from "lucide-react";
import ApiService from "@/services/GalleryClass";
import { FormEvent, useReducer, useState } from "react";
import toast from "react-hot-toast";

const MESSAGES_API_URL = "https://parsa-shaabani-backend.vercel.app/messages";

interface StateReducerInterFace {
  fullName: string;
  email: string;
  Message: string;
}

type FormErrors = Partial<Record<keyof StateReducerInterFace, string>>;

type FormAction =
  | {
      type: "Clean_State";
      value?: string;
    }
  | {
      type: "FullName_Change";
      value: string;
    }
  | {
      type: "Email_Change";
      value: string;
    }
  | {
      type: "Message_Change";
      value: string;
    };

const initialState: StateReducerInterFace = {
  fullName: "",
  email: "",
  Message: "",
};

const toastStyle = {
  color: "#FFFFFF",
  fontWeight: "500",
  borderRadius: "8px",
  padding: "12px 16px",
  fontSize: "14px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
};

const reducer = (state: StateReducerInterFace, action: FormAction) => {
  switch (action.type) {
    case "FullName_Change":
      return { ...state, fullName: action.value };

    case "Email_Change":
      return { ...state, email: action.value };

    case "Message_Change":
      return { ...state, Message: action.value };

    case "Clean_State":
      return initialState;

    default:
      return state;
  }
};

const validateForm = (state: StateReducerInterFace) => {
  const errors: FormErrors = {};

  const fullName = state.fullName.trim();
  const email = state.email.trim();
  const message = state.Message.trim();

  if (!fullName) {
    errors.fullName = "Full name is required";
  } else if (fullName.length < 3) {
    errors.fullName = "Full name must be at least 3 characters";
  } else if (fullName.length > 60) {
    errors.fullName = "Full name must be less than 60 characters";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!message) {
    errors.Message = "Message is required";
  } else if (message.length < 10) {
    errors.Message = "Message must be at least 10 characters";
  } else if (message.length > 1000) {
    errors.Message = "Message must be less than 1000 characters";
  }

  return errors;
};

export default function GetInTouch() {
  const { lang } = useLang();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDispatch = (action: FormAction) => {
    dispatch(action);

    if (action.type === "FullName_Change") {
      setErrors((prev) => ({ ...prev, fullName: undefined }));
    }

    if (action.type === "Email_Change") {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }

    if (action.type === "Message_Change") {
      setErrors((prev) => ({ ...prev, Message: undefined }));
    }

    if (action.type === "Clean_State") {
      setErrors({});
    }
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(state);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the form errors", {
        duration: 2000,
        style: toastStyle,
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const apiService = new ApiService(MESSAGES_API_URL, "");

      await apiService.postData(
        JSON.stringify({
          fullName: state.fullName.trim(),
          email: state.email.trim(),
          Message: state.Message.trim(),
        }),
      );

      handleDispatch({ type: "Clean_State" });

      toast.success("Your message successfully sent", {
        duration: 2000,
        style: {
          ...toastStyle,
          background: "#10B981",
          border: "1px solid #059669",
        },
      });
    } catch (error) {
      console.error("Failed to send message:", error);

      toast.error("Failed to send message", {
        duration: 2000,
        style: toastStyle,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-[100px] flex flex-col gap-y-3 [@media(max-width:1200px)]:w-[95%] w-[90%] mx-auto overflow-hidden">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ delay: 0.1 }}
        className="text-[#021322] dark:text-white font-bold text-3xl text-center w-full"
      >
        {lang === "en" ? en.getInTouch.title : fa.getInTouch.title}
      </motion.h1>

      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -200, scale: 1 },
          visible: { x: 0, scale: 1, opacity: 1 },
        }}
        transition={{ delay: 0.1 }}
        onSubmit={submitForm}
        noValidate
        className="mt-5 flex flex-col gap-y-3 p-6 rounded-xl border-[1px] dark:border-neutral-800 border-slate-200"
      >
        <h1 className="text-[#021322] dark:text-white font-bold text-xl w-full">
          {lang === "en" ? en.getInTouch.form.title : fa.getInTouch.form.title}
        </h1>

        <p className="font-[400] dark:text-neutral-400 text-slate-600 leading-[30px] text sm:text-md text-[13px] w-full">
          {lang === "en"
            ? en.getInTouch.form.subTitle
            : fa.getInTouch.form.subTitle}
        </p>

        <div>
          <ConnectWithMeField
            title={
              lang === "en"
                ? en.getInTouch.form.fields.fullName
                : fa.getInTouch.form.fields.fullName
            }
            tag="fullName"
            dispatch={handleDispatch}
            state={state}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <ConnectWithMeField
            title={
              lang === "en"
                ? en.getInTouch.form.fields.email
                : fa.getInTouch.form.fields.email
            }
            type="email"
            tag="email"
            dispatch={handleDispatch}
            state={state}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <ConnectWithMeField
            title={
              lang === "en"
                ? en.getInTouch.form.fields.message
                : fa.getInTouch.form.fields.message
            }
            tag="message"
            message={true}
            dispatch={handleDispatch}
            state={state}
          />
          {errors.Message && (
            <p className="mt-1 text-sm text-red-500">{errors.Message}</p>
          )}
        </div>

        <section className="flex mt-3 w-full justify-between items-center">
          <div className="flex flex-col items-start">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-x-2 justify-center py-2 px-4 rounded-lg dark:bg-primary-dark bg-primary-light dark:text-black text-white text-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? "Sending..."
                : lang === "en"
                  ? en.getInTouch.form.confirmButtonContent
                  : fa.getInTouch.form.confirmButtonContent}
              <Send size={18} />
            </motion.button>
          </div>

          <div className="flex items-center gap-x-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:parsashaabani3@gmail.com"
              className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700"
            >
              <Mail size={17} />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="tel:+989915980854"
              className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700"
            >
              <Phone size={17} />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/Parsa_Shaabani"
              className="cursor-pointer transition-all duration-200 bg-transparent p-2 rounded-xl dark:hover:bg-neutral-800 hover:bg-slate-200 border-[1px] dark:border-neutral-800 border-slate-200 dark:text-neutral-200 text-slate-700"
            >
              <SendIcon size={17} />
            </a>
          </div>
        </section>
      </motion.form>
    </div>
  );
}
