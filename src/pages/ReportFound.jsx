import ItemForm from '../Form/ItemForm'

export default function ReportFound({items, setItems}){

  return (<ItemForm 
            report='Report Found Item'
            submit="Submit Found Item"
            items={items}
            setItems={setItems}
            emoji="📗"
            color='bg-green-100'
            bgcolor='bg-green-500'
            hover='green'
        />)
}