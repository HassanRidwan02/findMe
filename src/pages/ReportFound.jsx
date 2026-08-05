import ItemForm from './ItemForm'

export default function ReportFound(){
  return (<ItemForm 
            report='Report Found Item'
            submit="Submit Found Item"
            emoji="📗"
            color='bg-green-100'
            bgcolor='bg-green-500'
            hover='green'
        />)
}