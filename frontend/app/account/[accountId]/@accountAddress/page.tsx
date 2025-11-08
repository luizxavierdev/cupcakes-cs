
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/react";

import { LinkWithLoading } from "@/components/atom/LinkWithLoading";
import { getAccountFavoriteAddress } from "@/gateways/account.gateway";

type Params = {
  params: {
    accountId: string;
  };
};

export default async function Page({ params }: Readonly<Params>) {
  const address = await getAccountFavoriteAddress(Number(params.accountId));

  if (address)
    return (
      <Card className="w-full md:w-96 p-4 gap-y-2">
        <p className="flex justify-between">
          <b>CEP</b>
          {address.zipcode}
        </p>
        <p className="flex justify-between">
          <b>Address</b>
          <span>
            {address.address}, {address.number}
          </span>
        </p>
        <p className="flex justify-between">
          <b>Complement</b>
          {address.complement}
        </p>
        <p className="flex justify-between">
          <b>Neighborhood</b>
          {address.neighborhood}
        </p>
        <p className="flex justify-between">
          <b>City</b>
          {address.city}
        </p>
        <p className="flex justify-between">
          <b>State</b>
          {address.state}
        </p>
      </Card>
    );

  return (
    <Card className="flex content-center justify-center w-full md:w-96 p-4 gap-y-2">
      <p className="text-center">
       {"It looks like you don't have a registered address yet"}
      </p>
      <LinkWithLoading href="/address/create">
        <Button
          type="submit"
          radius="full"
          fullWidth
          className="bg-gradient-to-tr from-indigo-500 text-white shadow-lg self-center"
        >
          Register address
        </Button>
      </LinkWithLoading>
    </Card>
  );
}
