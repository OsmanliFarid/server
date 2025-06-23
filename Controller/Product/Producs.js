import { ProductModel } from "../../Model/Products.js";
export const AllProducts = (req, res) => {
  ProductModel.find().then((data) => {
    res.json({
      data: data,
    });
  });
};
export const ProductsPost = (req, res) => {
  const user = [
    {
      image: "/images/images1.png",
      title: "Syltherine",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      color: [{ color: "#816DFA" }, { color: "#000000" }, { color: "#B88E2F" }],
      size: [{ Size: "L" }, { Size: "XL" }, { Size: "XS" }],
      discounts: [
        {
          discount: "-30%",
          price: "Rp 3.500.000",
        },
      ],
    },
    {
      image: "/images/images2.png",
      title: "Leviosa",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discounts: [{ discount: null, price: null }],
      color: [{ color: "#816DFA" }, { color: "#000000" }, { color: "#B88E2F" }],
      size: [{ Size: "L" }, { Size: "XL" }, { Size: "XS" }],
    },
    {
      image: "/images/images3.png",
      title: "Lolito",
      desc: "Luxury big sofa",
      price: "Rp 7.000.000",
      color: [{ color: "#816DFA" }, { color: "#000000" }, { color: "#B88E2F" }],
      discounts: [
        {
          discount: "-50%",
          price: "Rp 14.000.000",
        },
      ],
      size: [{ Size: "L" }, { Size: "XL" }, { Size: "XS" }],
    },
    {
      image: "/images/images4.png",
      title: "Respira",
      desc: "Outdoor bar table and stool",
      price: "Rp 500.000",
      color: [{ color: "#816DFA" }, { color: "#000000" }, { color: "#B88E2F" }],
      discounts: [
        {
          discount: "New",
          price: null,
        },
      ],
      size: [{ Size: "L" }],
    },
    {
      image: "/images/images5.png",
      title: "Grifo",
      desc: "Night lamp",
      price: "Rp 1.500.000",
      color: [{ color: "#816DFA" }, { color: "#000000" }, { color: "#B88E2F" }],
      discounts: [
        {
          discount: null,
          price: null,
        },
      ],
      size: [{ Size: "XS" }],
    },
    {
      image: "/images/images6.png",
      title: "Muggo",
      desc: "Small mug",
      price: "Rp 150.000",
      color: [{ color: "#816DFA" }, { color: "#000000" }, { color: "#B88E2F" }],
      discounts: [
        {
          discount: "New",
          price: null,
        },
      ],
      size: [{ Size: "L" }, { Size: "XL" }, { Size: "XS" }],
    },
    {
      image: "/images/images7.png",
      title: "Pingky",
      desc: "Cute bed set",
      price: "Rp 7.000.000",
      color: [{ color: "#816DFA" }, { color: "#000000" }, { color: "#B88E2F" }],
      discounts: [
        {
          discount: "-50%",
          price: "Rp 14.000.000",
        },
      ],
      size: [{ Size: "L" }],
    },
    {
      image: "/images/images8.png",
      title: "Potty",
      desc: "Minimalist flower pot",
      price: "Rp 500.000",
      color: [{ color: "#816DFA" }, { color: "#000000" }, { color: "#B88E2F" }],
      discounts: [
        {
          discount: "New",
          price: null,
        },
      ],
      size: [{ Size: "XL" }, { Size: "XS" }],
    },
  ];
  ProductModel.create(user)
    .then((data) => {
      res.status(200).json({
        success: true,
        data: data,
      });
    })
    .catch((error) => {
      console.error("MongoDB create error:", error);
      res.status(404).json({
        success: false,
        error: error.message,
      });
    });
};
export const AllProductsId = (req, res) => {
  const id = req.params.id;
  ProductModel.findById(id)
    .then((data) => {
      res.status(200).json({
        success: true,
        data: data,
      });
    })
    .catch(() =>
      res.status(404).json({
        success: false,
        error: "error var",
      })
    );
};
