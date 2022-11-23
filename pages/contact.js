import { MyForm, Alert } from '../ui-components'
import { useState } from 'react'

export default function Contact() {
  const [showForm, setShowForm] = useState(true)

  return (
    <>
  {showForm && <MyForm
    onSubmit={async (fields) => {
      // console.log(JSON.stringify(fields));
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fields) // Pass in form data
      })

      if (response.status === 200) {
        setShowForm(false) // Hide the form
      }
      if (response.status === 404) {
        console.log("fail")
      }
    }}/>}
  </>
  )
  
}

