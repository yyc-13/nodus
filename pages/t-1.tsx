import { useState } from "react";

export default function DynamicForm() {
  const [formData, setFormData] = useState([{ name: "", description: "" }]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const formFields = [...formData];
    formFields[index][name] = value;
    setFormData(formFields);
  };

  const handleAddFields = () => {
    const formFields = [...formData, { name: "", description: "" }];
    setFormData(formFields);
  };

  const handleRemoveFields = (index) => {
    const formFields = [...formData];
    formFields.splice(index, 1);
    setFormData(formFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((formField, index) => (
        <div key={`${formField}-${index}`}>
          <input
            type="text"
            name="name"
            value={formField.name}
            onChange={(event) => handleInputChange(event, index)}
            placeholder="Enter a name for this field"
          />
          <input
            type="text"
            name="description"
            value={formField.description}
            onChange={(event) => handleInputChange(event, index)}
            placeholder="Enter a description for this field"
          />
          <button type="button" onClick={() => handleRemoveFields(index)}>
            Remove Field
          </button>
        </div>
      ))}
      <button type="button" onClick={() => handleAddFields()}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
