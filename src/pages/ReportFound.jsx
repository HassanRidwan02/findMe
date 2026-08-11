import ItemForm from '../Form/ItemForm'

export default function ReportFound({setItems}){

  return (<ItemForm 
            report='Report Found Item'
            submit="Submit Found Item"
            setItems={setItems}
            emoji="📗"
            color='bg-green-100'
            bgcolor='bg-green-500'
            hover='green'
        />)
}