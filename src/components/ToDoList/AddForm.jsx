import React from 'react'
import { useForm } from 'react-hook-form'

export const AddForm = () => {
const {register, handleSubmit, reset} = useForm()
    const submit = ({title}) => {
        console.log(title)
        reset()
}
  return (
    <div>
          <form onSubmit={handleSubmit(submit)}>
              <input {...register('title')} type='text' /> 
              <button>Add ToDo</button>
      </form>
    </div>
  )
}

 
