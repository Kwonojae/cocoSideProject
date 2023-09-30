import { useQuery } from "react-query";
import { getDessertList } from "../../api/firebase";
import DessertListCard from "./DessertListCard";

export default function DessertList() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getDessertList);
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col items-center h-full mt-10">
      <div className="relative flex flex-col w-4/3 items-center rounded-[20px]  mx-auto  bg-clip-border  p-3">
        <div className="mt-2 mb-8 w-full">
          <h4 className="px-4 text-xl font-bold text-navy-700 ">
            Dessert List
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-6 px-2 w-full h-full">
          {products &&
            products.map((product) => (
              <DessertListCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
