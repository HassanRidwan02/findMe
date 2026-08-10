import ItemForm from '../Form/ItemForm'

export default function ReportLost(){
  return (<ItemForm 
            report='Report Lost Item'
            submit="Submit Lost Item"
            emoji="🦀"
            color='bg-red-100'
            bgcolor='bg-red-500'
            hover='red'
          />)
}