import app from "./app.mjs";
const port = process.env.PORT || 4002;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
