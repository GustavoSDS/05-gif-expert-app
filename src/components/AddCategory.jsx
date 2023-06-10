import { useState } from "react"
import PropTypes from 'prop-types'

export default function AddCategory({ setCategory }) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length >= 2) {
      setCategory(cat => [inputValue, ...cat ]);
      setInputValue('')      
    }

  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        id="inputNameGif"
        type="text"
        value={inputValue}
        // placeholder="Search your Sticker"
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}