import { BusinessInfo, Product } from "@/types";

export const businessInfo: BusinessInfo = {
  name: "Shani Dhupian",
  address: "Ground Floor, First Floor, 195, 196, 197, Sita Nagar Society, Puna Bombay Market Road",
  city: "Surat",
  state: "Gujarat",
  pincode: "395010",
  gst: "24AMWPR2708L1ZF",
  gstRegistrationDate: "24-07-2017",
  natureOfBusiness: "Trader - Wholesaler/Distributor",
  legalStatus: "Proprietorship",
  annualTurnover: "5 - 25 Cr",
  employees: "11 to 25 People",
  ceo: "Jenish Radadiya",
  establishedYear: "2009",
};

export const products: Product[] = [
  {
    id: "1",
    name: "Mono Banglory Fabric",
    category: "Cotton Fabric",
    description: "High-quality mono banglory cotton fabric",
  },
  {
    id: "2",
    name: "Cotton Fabric",
    category: "Cotton Fabric",
    description: "Premium cotton fabric for various applications",
  },
  {
    id: "3",
    name: "Lycra Fabric",
    category: "Lycra Fabric",
    description: "Stretchable lycra fabric with excellent durability",
  },
  {
    id: "4",
    name: "Mono Beglory Sillk",
    category: "Bakery Box",
    description: "Quality bakery box material",
  },
];

export const productCategories = [
  {
    name: "Cotton Fabric",
    products: ["Mono Banglory Fabric", "Cotton Fabric"],
    image: "/images/products/cotton-fabric.webp",
    icon: "cotton",
  },
  {
    name: "Lycra Fabric",
    products: ["Lycra Fabric"],
    image: "/images/products/lycra-fabric.webp",
    icon: "lycra",
  },
  {
    name: "Bakery Box",
    products: ["Mono Beglory Sillk"],
    image: "/images/products/bakery-box.webp",
    icon: "bakery",
  },
];
