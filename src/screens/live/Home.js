import React from 'react'
import { useForm } from 'react-hook-form'

const HomeA = () => {
	const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append("file", data.file[0])
    formData.append("userID", data.userID)
    formData.append("subjectID", data.subjectID)
    formData.append("taskID", data.taskID)

    const res = await fetch("http://localhost:5000/file", {
      method: "POST",
      body: formData
    }).then(res => res.json())
    alert(JSON.stringify(res))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="file" />
      <label>
        userID:
        <input ref={register} type="text" name="userID" />
      </label>
      <label>
        subjectID:
        <input ref={register} type="text" name="subjectID" />
      </label>
      <label>
        taskID:
        <input ref={register} type="text" name="taskID" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
	
}

export default HomeA;