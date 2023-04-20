import { useState } from "react";
import styles from "./SearchBar.module.css"


export default function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <div className={styles.divSearch}>
         <input type='search' onChange={handleChange} value={id} 
         />
         <button className={styles.search} onClick={() => {onSearch(id); setId("")}}>
            Agregar
         </button>
      </div>
   );
}
