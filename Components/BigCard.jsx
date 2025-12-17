
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function BigCard({head,src,title,para,list,onNext, onPrev }) {  
  return (
    <>
    <div className='h-[340px] w-[900px] bg-[#e7e5e5] ml-[330px] mt-4 rounded-2xl  p-[7px]  flex flex-col '>
        <div className='flex justify-between '>
            <h3 className='font-semibold'>{head}</h3>
              <BiDotsHorizontalRounded />
        </div>
        <div className='flex gap-2 mt-6 '>
            <div >
                <img className='w-[300px] h-[200px] rounded-xl ' src={src} alt="" />
            </div>
            <div>
                <h3 className='font-semibold'>{title}</h3>
                <p className='w-[500px] mt-1'>{para}</p>
                <ul className='pl-5 list-disc'>
                {list && list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}  
                </ul>
                <button className='w-24 mt-3 bg-white rounded-xl h-9'>Get Started</button>
            </div>  
        </div>
        <div className="flex justify-end gap-3 ">
        <button
          onClick={onPrev}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-200"
        >
          <MdKeyboardArrowLeft size={22} />
        </button>
        <button
          onClick={onNext}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-200"
        >
          <MdKeyboardArrowRight size={22} />
        </button>
      </div>
    </div>
    </>
  )
}

export default BigCard