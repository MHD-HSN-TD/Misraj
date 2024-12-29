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
        <div className="card bg-base-100 w-96 shadow-xl ">
            <figure>
                <Image
                    width={300}
                    height={300}

                    src={image}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{rate}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{price}</button>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
