import {
  FaMoneyBillWave,
  FaBriefcase,
  FaBuilding,
  FaLaptopCode,
  FaChartLine,
  FaUtensils,
  FaShoppingCart,
  FaHome,
  FaPlane,
  FaShoppingBag,
  FaFilm,
  FaFileInvoiceDollar,
  FaHeartbeat,
  FaGraduationCap,
  FaWallet,
} from "react-icons/fa";

const categoryIconMap = {
  Salary: FaMoneyBillWave,
  Job: FaBriefcase,
  Business: FaBuilding,
  Freelance: FaLaptopCode,
  Investment: FaChartLine,
  Food: FaUtensils,
  Groceries: FaShoppingCart,
  Rent: FaHome,
  Travel: FaPlane,
  Shopping: FaShoppingBag,
  Entertainment: FaFilm,
  Bills: FaFileInvoiceDollar,
  Health: FaHeartbeat,
  Education: FaGraduationCap,
  General: FaWallet,
};

export const getCategoryIcon = (category) => {
  return categoryIconMap[category] || FaWallet;
};