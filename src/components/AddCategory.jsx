import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

  const [InputValue, setInpuValue] = useState('One Punch');
  const onInputChange = (event) => {
    setInpuValue( event.target.value )
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (InputValue.trim().length <= 1) return;
    
    // setCategories( categories => [ InputValue, ...categories ] );
    onNewCategory( InputValue.trim() );
    setInpuValue('');
  };
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={InputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
