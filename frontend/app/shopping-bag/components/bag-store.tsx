import { Store } from "@/models/store.model";

type Props = {
  store?: Store;
};

export const BagStore = ({ store }: Props) =>
  store ? (
    <div>
      <p>{store?.name}</p>
      <p>
        {store?.address}, {store?.number} - {store?.zipcode}
      </p>
      <p>
        {store?.neighborhood}, {store?.city} - {store?.state}
      </p>
    </div>
  ) : (
    <span className="self-end">
      Register your address to find a store
    </span>
  );
