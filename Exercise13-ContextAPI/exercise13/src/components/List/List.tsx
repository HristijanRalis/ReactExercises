import { ListItem } from "../ListItem/ListItem";

export const List = ({ list }: { list: { label: string }[] }) => {
  return (
    <ul>
      {list.map((listItem) => {
        return <ListItem key={listItem.label} label={listItem.label} />;
      })}
    </ul>
  );
};
