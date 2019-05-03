import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../../Actions';


let AddCategory = ({ dispatch }) => {
    let input


   return (
    <div>
        <form
          onSubmit ={ e => {
              e.preventDefault()
              if (!input.value.trim()) {
                  return 
              }
              dispatch(addCategory(input.value))
              input.value = ''
          }
        }
        >
        <input
          ref={node => {
            input = node 
          }
        }
        />
        <button type= "submit">Add Category </button>
        </form>
    </div>
   )

}
AddCategory = connect()(AddCategory)

export default AddCategory