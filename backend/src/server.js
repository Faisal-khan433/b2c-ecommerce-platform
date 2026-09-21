import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.use("/", ()=>{
    console.log("recived");
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});