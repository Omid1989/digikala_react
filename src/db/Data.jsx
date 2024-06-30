import takhfif from "../assets/takhfif.png";

import { IconContext } from "react-icons";
import { TbDiscount } from "react-icons/tb";
import { CiShoppingBasket } from "react-icons/ci";
import { MdCardGiftcard } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";
const style = { marginLeft: "5px" };
const Discount = () => {
  return (
    <IconContext.Provider value={{ color: "#a5a5a8", size: "1.5em", style }}>
      <TbDiscount />
    </IconContext.Provider>
  );
};
const ShoppingBasket = () => {
  return (
    <IconContext.Provider value={{ color: "#a5a5a8", size: "1.5em", style }}>
      <CiShoppingBasket />
    </IconContext.Provider>
  );
};
const Fire = () => {
  return (
    <IconContext.Provider value={{ color: "#a5a5a8", size: "1.5em", style }}>
      <RiFireLine />
    </IconContext.Provider>
  );
};
const AddressCard = () => {
  return (
    <IconContext.Provider value={{ color: "#a5a5a8", size: "1.5em", style }}>
      <MdCardGiftcard />
    </IconContext.Provider>
  );
};
const Takhfif = () => {
  return <img src={takhfif} alt="" style={{ marginLeft: "5px" }} />;
};

export const DataMenu = [
  { title: "شگفت‌انگیزها", link: "#", icon: <Discount /> },
  { title: "سوپرمارکت", link: "#", icon: <ShoppingBasket /> },
  { title: "کارت هدیه", link: "#", icon: <AddressCard /> },
  { title: "پرفروش‌ترین‌ها", link: "#", icon: <Fire /> },
  { title: "تخفیف‌ها و پیشنهادها", link: "#", icon: <Takhfif /> },
  { title: "سوالی دارید؟", link: "#", icon: null },
  { title: "در دیجی‌کالا بفروشید !", link: "#", icon: null },
];
