/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#476AEE",
        navBar: "#0E1726",
        success: "rgb(26, 188, 156)",
        warning: "#E2A03F",
      },
      boxShadow: {
        success: "0 10px 15px -3px #D3F2EC, 0 4px 6px -2px rgba(0, 0, 0, 0)",
        primary: "0 10px 15px -3px #C3CDFA, 0 4px 6px -2px rgba(0, 0, 0, 0)",
        warning: "0 10px 15px -3px #F6E1C2, 0 4px 6px -2px rgba(0, 0, 0, 0)",
        progress: "rgb(241, 242, 243) 1px 3px 20px 3px",
        stacked: "0px 0px 15px 1px rgb(113 106 202 / 10%)",
        "more-button": "rgb(208, 208, 208) 0px 0px 20px 0px",
        "sidebar-elements":
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      },
      outline: {
        "button-success": ["2px solid rgb(26, 188, 156)", "1px"],
        "button-primary": ["2px solid #4361EE", "1px"],
        "button-warning": ["2px solid #E2A03F", "1px"],
      },
    },
  },
  plugins: [],
};
