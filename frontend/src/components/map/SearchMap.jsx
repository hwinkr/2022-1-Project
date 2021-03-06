import React , {useState} from 'react'
import Map from './Map';

document.cookie = "safeCookie1=foo; SameSite=Lax"; 

function SearchMap() {
    
    const [InputText, setInputText] = useState('')
    const [Place, setPlace] = useState('')
  
    const onChange = (e) => {
      setInputText(e.target.value)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setPlace(InputText)
      setInputText('')
    }
  
    return (
      <>
        <form className="inputForm" onSubmit={handleSubmit}>
          <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
          <button type="submit">검색</button>
        </form>
        <Map searchPlace={Place} />
      </>
    )
}

export default SearchMap