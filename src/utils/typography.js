import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Rubik",
      styles: ["400", "500"]
    },
    {
      name: "Roboto Mono",
      styles: ["400", "500"]
    }
  ]
});

export default typography;
