"use client";

import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      gutter={8}
      containerStyle={{
        zIndex: 999999,
      }}
      toastOptions={{
        // Default options for all types
        duration: 4000,
        style: {
          background: "#363636",
          color: "#fff",
        },

        // Success specific options
        success: {
          duration: 3000,
          iconTheme: {
            primary: "#10B981",
            secondary: "#FFFFFF",
          },
          style: {
            background: "#10B981",
            color: "#FFFFFF",
            fontWeight: "500",
          },
        },

        // Error specific options
        error: {
          duration: 5000,
          iconTheme: {
            primary: "#EF4444",
            secondary: "#FFFFFF",
          },
          style: {
            background: "#EF4444",
            color: "#FFFFFF",
            fontWeight: "500",
          },
        },

        // Loading specific options
        loading: {
          duration: Infinity,
          iconTheme: {
            primary: "#3B82F6",
            secondary: "#FFFFFF",
          },
          style: {
            background: "#3B82F6",
            color: "#FFFFFF",
            fontWeight: "500",
          },
        },

        // Custom types can be added here
      }}
    />
  );
};
