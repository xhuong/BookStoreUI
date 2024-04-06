import { IProductType } from "@/components/Product";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-DE").format(price) + " VNĐ";
};

// export const totalPrice = (cart: IProductType[]) => {
//   if (cart.length > 0) {
//     let totalPrice = 0;
//     cart.map((cartItem: IProductType) => {
//       return (totalPrice += cartItem.count * cartItem.priceOfProduct);
//     });

//     return totalPrice;
//   }
// };

// export const totalPriceOfTrackingOrder = (array: ) => {
//   if (array?.length > 0) {
//     let totalPrice = 0;
//     array.map((item) => {
//       return (totalPrice += item.quantityOrdered * item.priceOfProduct);
//     });

//     return totalPrice;
//   }
// };
