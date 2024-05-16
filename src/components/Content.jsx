import React from 'react'

function Content() {
  return (
    <div>
<div className=' sticky top-[100px] bg-white shadow-xl capitalize mx-auto flex-col md:block md:text-center mt-5  hidden  md:w-[250px] h-[85vh]'>
        <div className='flex text-[#8D9598] flex-col gap-5 mt-3'>
       <p className='text-opacity-0'>device id connected</p>
        <h1 className='text-xl ml-[-30px] font-sans font-bold'>MBS00007<i class="fa-solid fa-chevron-down ml-[30px]"></i></h1>

       <div className='mt-10'>
        temp: <br /><p className='text-2xl font-sans '>37.5</p>
       </div>
</div>

<div className=' mt-10 ml-[-50px]  flex flex-col gap-5' >
<p className='text-2xl ml-[-30px] font-bold text-[#184A7C]'><input type="checkbox" name="" id="" />&nbsp;select</p>
<p className='text-xl text-[#184A7C]'><input className='text-2xl text-[#184A7C]' type="radio" name="" id="" />&nbsp;&nbsp;&nbsp;&nbsp; white</p>
<p className='text-xl text-[#184A7C]'><i className="fa-solid fa-play text-[#5A5A5A] text-2xl"></i>&nbsp;&nbsp;&nbsp;&nbsp;start</p>
<p className='text-xl text-[#184A7C]'><i className="fa-solid fa-stop  text-[#5A5A5A] text-2xl"></i>&nbsp;&nbsp;&nbsp;&nbsp;stop</p>
</div>


<div className='flex justify-center mt-[170px]'>
<i className="fa-solid fa-gear text-4xl mt-[-6px]  text-[#5A5A5A]"></i>&nbsp;&nbsp;&nbsp;
<p className='text-[#727778] text-xl'>device settings</p>
</div>


</div>
    </div>
  )
}

export default Content
