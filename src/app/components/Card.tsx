import React from "react";
import { CardProps } from "../interfaces/interfaces";
import Image from "next/image";

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  price,
  rate,
}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl lg:max-w-80 max-w-60 lg:text-center text-center">
      <figure>
        <Image width={150} height={150} src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>{description}</p> */}
        <p>Rate:{rate}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-ghost ">Price : {price}</button>
          <button className="btn btn-warning">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
