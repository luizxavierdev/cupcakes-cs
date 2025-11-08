import Image from "next/image";

import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

import { LinkWithLoading } from "@/components/atom/LinkWithLoading";
import Carousel from "@/components/molecules/carousel";
import { translateCupcakeName } from "@/config/data-translations";
import { Promotions } from "@/config/promotion-banners";
import { getTranslations } from "@/config/translations";
import {
  listCupcakes,
  listCupcakesCategories,
} from "@/gateways/cupcake.gateway";


export default async function Home() {
  const cupcakes = await listCupcakes();
  const categories = await listCupcakesCategories();
  const t = getTranslations("pt"); // Server component - usa português por padrão

  return (
    <section className="flex flex-col justify-stretch gap-4 scrollbar-hide">
      <Carousel autoPlay={true} images={Promotions} />
      <div className="px-2 flex flex-col gap-2">
        <p className="text-lg uppercase font-bold">{t.titles.promotions}</p>
        <div className="flex flex-row gap-4 overflow-x-scroll scrollbar-hide py-2 px-1">
          {cupcakes.map(({ id, name, value, image }) => {
            const translatedName = translateCupcakeName(name);
            return (
              <LinkWithLoading key={id} href={`/shopping-bag?cupcake=${id}`}>
                <Card
                  className="h-full min-w-[200px] rounded-b-lg text-center"
                  radius="none"
                  shadow="sm"
                  isPressable
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      width={200}
                      height={180}
                      alt={translatedName}
                      className="w-full h-[180px]"
                      src={image}
                    />
                  </CardBody>
                  <CardFooter className="grow text-sm flex-col gap-y-2">
                    <b className="grow">{translatedName}</b>
                    <Chip className="bg-gradient-to-tr from-indigo-500 text-white shadow-lg fit">
                      {value.formatted}
                    </Chip>
                  </CardFooter>
                </Card>
              </LinkWithLoading>
            );
          })}
        </div>
      </div>
      <div className="px-2 flex flex-col gap-2">
        <div className="flex flex-row justify-between content-center">
          <p className="text-lg font-bold">{t.titles.categories}</p>{" "}
          <LinkWithLoading href="/category" className="hover:font-bold">
            <Chip className="bg-gradient-to-tr from-indigo-500 text-white shadow-lg fit">
            {t.other.seeAll}
            </Chip>
          </LinkWithLoading>
        </div>
        <div className="flex flex-row gap-4 overflow-x-scroll scrollbar-hide py-2 px-1">
          {categories.map(({ id, name, image }) => (
            <LinkWithLoading
              key={id}
              href={`/category/${id}`}
              className="relative overflow-visible min-w-[200px]"
            >
              <Image
                width={200}
                height={180}
                alt={name}
                className="w-full h-[180px]"
                src={image}
              />
              <b className="absolute bottom-0 z-10 w-full text-center p-2 bg-gradient-to-tr from-zinc-900/75 to-zinc-200/25 text-white">
                {name}
              </b>
            </LinkWithLoading>
          ))}
        </div>
      </div>
    </section>
  );
}
