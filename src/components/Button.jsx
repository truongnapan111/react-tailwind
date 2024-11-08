export default function Btn({ title , icon }){
    return (
        <>
            <button className="site-btn icon mx-0 border-none block bg-[#ffc500] hover:bg-[#f0ac02] font-[500] text-[14px] rounded-[50px] leading-[35px] text-left py-[1px] pr-[6px] pl-[19px]">
                {title}
                <i className={icon} aria-hidden="true"></i>
            </button>
        </>

    )
}