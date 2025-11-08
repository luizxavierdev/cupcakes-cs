import { cookies } from "next/headers";
import Image from "next/image";
import NextLink from "next/link";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";

// import { ThemeSwitch } from "@/components/molecules/theme-switch";
import { siteConfig } from "@/config/site";
import { CookiesKeys } from "@/types/cookies-keys.enum";

import { LinkWithLoading } from "../atom/LinkWithLoading";
import { ShoppingBag } from "./shopping-bag";

import clsx from "clsx";
// import { DiGithubBadge } from "react-icons/di";
// import { GiCupcake } from "react-icons/gi";


export const Navbar = () => {
  const cookieStore = cookies();
  const accountId = cookieStore.get(CookiesKeys.accountId)?.value;

  const filteredNavItems = siteConfig.navItems.filter((item) => {
    if (item.always) return true;
    if (accountId && item.logged === true) return true;
    if (!accountId && item.logged === false) return true;
    return false;
  });

  return (
    <NextUINavbar maxWidth="xl" position="sticky">

      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <GiCupcake className="max-h-fit" /> */}
            <Image height={32} width={32} src="/favicon-32x32.png" alt={"Icon Cupcakes CS"} />
            <p className="font-bold text-inherit">{siteConfig.name}</p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-start ml-2">

          {filteredNavItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >

        <NavbarItem className="hidden sm:flex gap-2">
          <ShoppingBag />

          {/* <LinkWithLoading isExternal href={siteConfig.links.github} aria-label="Github">
            <DiGithubBadge className="w-7 h-7 text-default-500" />
          </LinkWithLoading> */}

          {/* <ThemeSwitch /> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">

        <ShoppingBag />
        {/* <LinkWithLoading isExternal href={siteConfig.links.github} aria-label="Github">
          <DiGithubBadge className="w-7 h-7 text-default-500" />
        </LinkWithLoading> */}

        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">

          {filteredNavItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <LinkWithLoading color="foreground" href={item.href} size="lg">
                {item.label}
              </LinkWithLoading>
            </NavbarMenuItem>
          ))}

        </div>
      </NavbarMenu>

    </NextUINavbar>
  );
};
