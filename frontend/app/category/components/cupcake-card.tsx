"use client";
import { useContext } from "react"

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Chip, Divider } from "@nextui-org/react";

import { translateCupcakeName } from "@/config/data-translations";
import { ShoppingBagContext } from "@/contexts/shopping-bag.context";
import { Cupcake } from "@/models/cupcake.model";



type Params = {
  cupcake: Cupcake;
};

export const CupcakeCard = ({ cupcake, ...params }: Params) => {
  const router = useRouter();
  const pathname = usePathname();
  const { addCupcake } = useContext(ShoppingBagContext);
  const translatedName = translateCupcakeName(cupcake.name);

  return (
    <Card
      className="max-w-sm rounded-b-lg hover:shadow-xl"
      radius="none"
      shadow="sm"
      isPressable
      onPress={() => {
        addCupcake(cupcake.id);
        router.push(`/shopping-bag?source=${pathname}&cupcake=${cupcake.id}`);
      }}

      {...params}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          height={1024}
          width={1024}
          alt={translatedName}
          className="w-full"
          src={cupcake.image}
        />
      </CardBody>
      <CardFooter className="grow text-sm flex-col gap-y-2">
        <div className="grow w-full flex justify-between items-center text-lg font-bold">
          <span>{translatedName}</span>
          <Chip className="bg-gradient-to-tr from-indigo-500 text-white shadow-lg fit">
            {cupcake.value.formatted}
          </Chip>
        </div>
        <Divider />
        <p className="w-full flex flex-wrap justify-center gap-2 text-xs">
          {cupcake.ingredients.split(", ").map((ingredient) => (
            <Chip key={ingredient} className="text-xs">
              {ingredient}
            </Chip>
          ))}
        </p>
        <p className="line-clamp-3">{cupcake.description}</p>
      </CardFooter>
    </Card>
  );
};
