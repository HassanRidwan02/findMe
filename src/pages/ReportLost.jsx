import ItemForm from "../Form/ItemForm";

export default function ReportLost({ items, setItems }) {
  return (
    <ItemForm
      report="Report Lost Item"
      submit="Submit Lost Item"
      items = {items}
      setItems={setItems}
      emoji="🦀"
      color="bg-red-100"
      bgcolor="bg-red-500"
      hover="red"
    />
  );
}