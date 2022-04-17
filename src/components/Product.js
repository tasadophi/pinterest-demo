const Product = ({ p }) => {
  return (
    <div className="flex flex-col px-2 py-3 gap-y-2">
      <div className="group relative">
        <img className="rounded-xl w-full" src={p.image_url} alt={p.name} />
        <div className="hidden absolute bg-black opacity-70 z-10 rounded-xl w-full h-full inset-0 justify-center items-center text-white font-bold text-xl group-hover:block"></div>
        <span className="hidden absolute inset-0 cursor-pointer w-full h-full text-white z-20 font-bold text-xl group-hover:block">
          <a
            href={p.url}
            rel="noreferrer"
            target="_blank"
            className="w-full h-full justify-center items-center flex"
          >
            Open
          </a>
        </span>
        <a
          href={p.url}
          rel="noreferrer"
          target="_blank"
          className="hidden absolute p-2 text-white z-20 bottom-0 group-hover:block"
        >
          {p.domain}
        </a>
      </div>
      <div className="overflow-hidden whitespace-nowrap text-ellipsis">
        <span className="font-bold text-sm">{p.name}</span>
        <div className="text-xs text-ellipsis overflow-hidden">
          {p.description}
        </div>
      </div>
    </div>
  );
};

export default Product;
