import HeaderImage from "../images/image-header-desktop.jpg";


export default function Header() {
  
  return(
    <section className='bg-SoftViolet xl:w-[540px] h-[240px] overflow-hidden xl:h-full'>
      <img src={HeaderImage} className='mix-blend-multiply opacity-75'/>
    </section>
  )
}
