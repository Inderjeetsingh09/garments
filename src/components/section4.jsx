import { Dropdown } from "flowbite-react"



export default function Filter(){

    return (

        <div className="filters">

<Dropdown 
  label="SELECT"
  inline={true} 
>

  <div className="innerfilters">
  <Dropdown.Item>
    Mens Outfit
  </Dropdown.Item>
  <Dropdown.Item>
    Womens Outfit
  </Dropdown.Item>
  <Dropdown.Item>
    Lehngas
  </Dropdown.Item>
  <Dropdown.Item>
    kurta Pajamas
  </Dropdown.Item>



  </div> 
</Dropdown>





        </div>
    )
}