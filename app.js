import express from "express";
import cors from "cors";

const app = express();
const port = 3030;

const user = [
  {
    id: "1",
    image: "/images/images1.png",
    title: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    color: [
      { id: 1, color: "#816DFA" },
      { id: 2, color: "#000000" },
      { id: 3, color: "#B88E2F" },
    ],
    size: [
      { id: 1, Size: "L" },
      { id: 2, Size: "XL" },
      { id: 3, Size: "XS" },
    ],
    discounts: [
      {
        discount: "-30%",
        price: "Rp 3.500.000",
      },
    ],
  },
  {
    id: "2",
    image: "/images/images2.png",
    title: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discounts: [{ discount: null, price: null }],
    color: [
      { id: 1, color: "#816DFA" },
      { id: 2, color: "#000000" },
      { id: 3, color: "#B88E2F" },
    ],
    size: [
      { id: 1, Size: "L" },
      { id: 2, Size: "XL" },
      { id: 3, Size: "XS" },
    ],
  },
  {
    id: "3",
    image: "/images/images3.png",
    title: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    color: [
      { id: 1, color: "#816DFA" },
      { id: 2, color: "#000000" },
      { id: 3, color: "#B88E2F" },
    ],
    discounts: [
      {
        discount: "-50%",
        price: "Rp 14.000.000",
      },
    ],
    size: [
      { id: 1, Size: "L" },
      { id: 2, Size: "XL" },
      { id: 3, Size: "XS" },
    ],
  },
  {
    id: "4",
    image: "/images/images4.png",
    title: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    color: [
      { id: 1, color: "#816DFA" },
      { id: 2, color: "#000000" },
      { id: 3, color: "#B88E2F" },
    ],
    discounts: [
      {
        discount: "New",
        price: null,
      },
    ],
    size: [{ id: 1, Size: "L" }],
  },
  {
    id: "5",
    image: "/images/images5.png",
    title: "Grifo",
    desc: "Night lamp",
    price: "Rp 1.500.000",
    color: [
      { id: 1, color: "#816DFA" },
      { id: 2, color: "#000000" },
      { id: 3, color: "#B88E2F" },
    ],
    discounts: [
      {
        discount: null,
        price: null,
      },
    ],
    size: [{ id: 3, Size: "XS" }],
  },
  {
    id: "6",
    image: "/images/images6.png",
    title: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    color: [
      { id: 1, color: "#816DFA" },
      { id: 2, color: "#000000" },
      { id: 3, color: "#B88E2F" },
    ],
    discounts: [
      {
        discount: "New",
        price: null,
      },
    ],
    size: [
      { id: 1, Size: "L" },
      { id: 2, Size: "XL" },
      { id: 3, Size: "XS" },
    ],
  },
  {
    id: "7",
    image: "/images/images7.png",
    title: "Pingky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    color: [
      { id: 1, color: "#816DFA" },
      { id: 2, color: "#000000" },
      { id: 3, color: "#B88E2F" },
    ],
    discounts: [
      {
        discount: "-50%",
        price: "Rp 14.000.000",
      },
    ],
    size: [{ id: 1, Size: "L" }],
  },
  {
    id: "8",
    image: "/images/images8.png",
    title: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 500.000",
    color: [
      { id: 1, color: "#816DFA" },
      { id: 2, color: "#000000" },
      { id: 3, color: "#B88E2F" },
    ],
    discounts: [
      {
        discount: "New",
        price: null,
      },
    ],
    size: [
      { id: 2, Size: "XL" },
      { id: 3, Size: "XS" },
    ],
  },
];
let newUser = user;
app.use(cors());

app.get("/user", (req, res) => {
  res.send(newUser);
});
app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  newUser = newUser.filter((item) => item.id !== id);
  console.log(newUser);
  if (!newUser) {
    res.status(404).send({ message: "User not found" });
  }
  res.send(newUser);
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = newUser.find((item) => item.id === id);
  if (!data) {
    res.send({ status: 404, result: "error" });
  }
  res.send(data);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
