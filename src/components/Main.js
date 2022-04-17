import { useEffect, useState } from "react";
import getProducts from "../services/getProducts";
import Product from "./Product";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroller";

const Loading = () => {
  return (
    <p className="text-4xl text-center p-4 text-green-600">
      Loading Products ...
    </p>
  );
};

const Main = ({ products, setProducts }) => {
  // offset value
  const getOffset = () => parseInt(localStorage.getItem("offset"));
  const addOffset = () =>
    localStorage.setItem(
      "offset",
      parseInt(localStorage.getItem("offset")) + 1
    );

  useEffect(() => {
    document.title = "Main Page";
    const get = async () => {
      const data = await getProducts(1);
      setProducts(data);
    };
    get();
    // reset offset
    return () => {
      localStorage.setItem("offset", 1);
    };
  }, []);

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
  };

  const loadProducts = () => {
    addOffset();
    const offset = getOffset();
    const get = async () => {
      const data = await getProducts(offset);
      setProducts([...products, ...data]);
    };
    get();
  };

  if (!products) return <Loading />;

  return (
    <main className="md:container p-4">
      <InfiniteScroll
        pageStart={0}
        loadMore={loadProducts}
        hasMore={true}
        loader={<Loading key={0} />}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto justify-center"
          columnClassName="bg-clip-padding"
        >
          {products.map((p) => (
            <Product key={p.page_id} p={p} />
          ))}
        </Masonry>
      </InfiniteScroll>
    </main>
  );
};

export default Main;
