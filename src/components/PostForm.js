import React from 'react'

const defaultFormValues = {
  name: '',
  petType: '',
}

export default function PostForm({
  onSubmit,
  initialValues = defaultFormValues,
  submitText,
  clearOnSubmit,
}) {
  const [values, setValues] = React.useState(initialValues)

  const setValue = (field, value) =>
    setValues((old) => ({ ...old, [field]: value }))

  const handleSubmit = (e) => {
    if (clearOnSubmit) {
      setValues(defaultFormValues)
    }
    e.preventDefault()
    onSubmit(values)
  }

  React.useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">pet name</label>
      <div>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={(e) => setValue('name', e.target.value)}
          required
        />
      </div>
      <br />
      <label htmlFor="body">pet type</label>
      <div>
        <textarea
          type="text"
          name="petType"
          value={values.petType}
          onChange={(e) => setValue('petType', e.target.value)}
          required
          rows="10"
        />
      </div>
      <br />
      <button type="submit">{submitText}</button>
    </form>
  )
}
