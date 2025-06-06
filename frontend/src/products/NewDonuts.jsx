import React, { useEffect, useRef, useState } from "react";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const NewDonuts = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollSaLeft, setCanScrollSaLeft] = useState(false);
  const [canScrollSaRight, setCanScrollSaRight] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  const scrollRef = useRef(null);

  const scroll = (drctn) => {
    const scrollAmount = drctn === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScroll = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScroll =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollSaLeft(leftScroll > 0);
      setCanScrollSaRight(rightScroll);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScroll);
      updateScroll();

      return () => container.removeEventListener("scroll", updateScroll)
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsMoving(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    console.log({walk: e.pageX - scrollRef.current.offsetLeft })
  };

  console.log({
    handleMouser: scrollRef.current?.offsetLeft,
  });

  
  const handleMouseMove = (e) => {
    if (!isMoving) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsMoving(false)
  };

  const handleMouseUp = () => {
    setIsMoving(false)
  };

  const newProducts = [
    {
      _id: "1",
      name: "Lotus Bisoff Chiller",
      price: 230.0,
      img: [
        {
          url: "https://mgi-deliveryportal.s3.amazonaws.com/Lotus%20Biscoff.jpg",
          altText: "Lotus Bisoff Chiller",
        },
      ],
    },
    {
      _id: "2",
      name: "Lotus Bisoff Chiller",
      price: 230.0,
      img: [
        {
          url: "https://mgi-deliveryportal.s3.amazonaws.com/Lotus%20Biscoff.jpg",
          altText: "Lotus Bisoff Chiller",
        },
      ],
    },
    {
      _id: "3",
      name: "Lotus Bisoff Chiller",
      price: 230.0,
      img: [
        {
          url: "https://mgi-deliveryportal.s3.amazonaws.com/Lotus%20Biscoff.jpg",
          altText: "Lotus Bisoff Chiller",
        },
      ],
    },
    {
      _id: "4",
      name: "Lotus Bisoff Chiller",
      price: 230.0,
      img: [
        {
          url: "https://mgi-deliveryportal.s3.amazonaws.com/Lotus%20Biscoff.jpg",
          altText: "Lotus Bisoff Chiller",
        },
      ],
    },
    {
      _id: "5",
      name: "Lotus Bisoff Chiller",
      price: 230.0,
      img: [
        {
          url: "https://mgi-deliveryportal.s3.amazonaws.com/Lotus%20Biscoff.jpg",
          altText: "Lotus Bisoff Chiller",
        },
      ],
    },
    {
      _id: "6",
      name: "Lotus Bisoff Chiller",
      price: 230.0,
      img: [
        {
          url: "https://mgi-deliveryportal.s3.amazonaws.com/Lotus%20Biscoff.jpg",
          altText: "Lotus Bisoff Chiller",
        },
      ],
    },
  ];
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl fond-bold mb-4 capitalize font-bold">
          Try oour new downots and dreinks
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          discover may apply to something requiring exploration or investigation
          or to a chance encounter.
        </p>

        <div className="absolute right-0 bottom-[-30px]  flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollSaLeft}
            className={`p-2 rounded border ${
              canScrollSaLeft ? "bg-white text-black" : "bg-gray-300"
            }`}
          >
            <TbArrowBadgeLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollSaRight}
            className={`p-2 rounded border ${
              canScrollSaRight ? "bg-white text-black" : "bg-gray-300"
            }`}
          >
            <TbArrowBadgeRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative no-scrollbar ${
          isMoving ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {newProducts.map((products) => (
          <div
            key={products._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={products.img[0]?.url}
              alt={products.img[0]?.altText || products.name}
              draggable="false"
              className="w-full h-[400px] object-cover border border-stone-200 shadow-xl rounded-lg"
            />
            <div className="absolute bottom-0 right-0 left-0 bg-opacity-50 backdrop-blur-md text-gray-800 p-4 rounded-b-lg">
              <Link to={`/product/${products._id}`} className="block">
                <h2 className="font-medium text-xl">{products.name}</h2>
                <p className="mt-1 ">
                  {products.price.toLocaleString("en-PH", {
                    currency: "PHP",
                    style: "currency",
                  })}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewDonuts;
