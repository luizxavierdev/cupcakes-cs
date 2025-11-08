
import { LinkWithLoading } from "@/components/atom/LinkWithLoading";
import { AccountAddress } from "@/models/account-address.model";

type Props = {
  address?: AccountAddress;
};

export const BagAddress = ({ address }: Props) =>
  address ? (
    <span>
      {address?.address}, {address?.number} - {address?.zipcode}
    </span>
  ) : (
    <LinkWithLoading className="self-end" href="/account">
      Register address
    </LinkWithLoading>
  );
