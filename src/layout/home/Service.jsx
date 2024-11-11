export default function Service({iconClass,title, description}){
    return (
        <div className="service-item w-[25%]">
            <div className="service bg-[#fff] p-5 boxshadow rounded-lg h-full">
                <div className="icon">
                    <i className={iconClass}></i>
                </div>
                <span className="title text-[14px] font-[500] leading-[29.5px]">
                    {title}
                </span>
                <p className="little-text text-[#989898] font-[400] leading-[18px] text-[13px]">
                    {description}
                </p>
            </div>
        </div>
    )
}