import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import Content from './Content';
import Banner from './Banner';




function Sidebar() {


  const [isOpen, setIsOpen] = useState(true);

  const handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-screen'>
      <div className=' sticky top-0 max-w-full h-[75px] bg-[#184A7C] border-2'>
        <RxHamburgerMenu onClick={handletoggle} className={` cursor-pointer duration-500 text-[white] text-3xl 
         ${isOpen ? "ml-[10px]" : "ml-[200px]"
          }
         mt-5`} />
      </div>


<div className='flex border justify-center border-black w-full'>

<div className={`w-[250px] mt-[-2px] z-50 absolute duration-500 font-sans 
${isOpen ? "lg:ml-[-1780px] md:ml-[-1255px] ml-[-700px]"  : "lg:ml-[-1270px] md:ml-[-550px] ml-[-130px]"
        }
h-screen bg-[white]`}>
 
        <ul className=' flex capitalize py-5 flex-col text-[#8b8ba9] h-screen gap-5 px-5 border-2 '>
          <div className=' border-b-2 p-1 font-bold '>
            spifftest
          </div>
          <li><IoIosHome/>home</li>
          <li><FaUsers/>create/edit user</li>
          <li><LuLogOut/>logout</li>
         

        </ul>
      </div>
      
        <Content/>
       
    

     <Banner/>
    

</div>

 
    
      </div>




        
  )
}

export default Sidebar
