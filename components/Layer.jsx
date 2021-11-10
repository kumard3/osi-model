import Link from 'next/link'

export default function LayerComponent({layername,layertitle,layericon,backgroundcolor,layerLink}) {
    return (
        <Link href={layerLink}>
        <section className={`w-full p-3 ${backgroundcolor} items-center flex hover:py-5 layerhover`}>
            
            <span className="bg-white p-2 mx-1 font-medium rounded-md">
                <h2> Layer {layername} </h2>
            </span>
            <div>
            <img src={layericon} alt="layerIcon" className="mx-1" />
            </div>
            <h1 className="text-lg font-semibold">{layertitle}</h1>
        </section>
        </Link>
    )
}
