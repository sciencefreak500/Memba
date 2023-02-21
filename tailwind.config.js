/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-priority-10",
    "bg-priority-9",
    "bg-priority-8",
    "bg-priority-7",
    "bg-priority-6",
    "bg-priority-5",
    "bg-priority-4",
    "bg-priority-3",
    "bg-priority-2",
    "bg-priority-1",
  ],
  theme: {
    extend: {
      backgroundColor: {
        priority: {
          10: "#d94545",
          9: "#F56565",
          8: "#f1774e",
          7: "#ED8936",
          6: "#f2b54a",
          5: "#F6E05E",
          4: "#afda78",
          3: "#68D391",
          2: "#55b6b9",
          1: "#4299E1",
        },
        
      }
    },
  },
  plugins: [],
}
