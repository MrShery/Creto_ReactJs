import React from "react"
import ClientImg1 from "../assets/asset 16.svg"
import ClientImg2 from "../assets/asset 17.svg"
import ClientImg3 from "../assets/asset 18.svg"
import ClientImg4 from "../assets/asset 19.svg"
import ClientImg5 from "../assets/asset 20.svg"
import Client from "./Client";

const ClientSection=()=>{
    const Clients=[ClientImg1,ClientImg2,ClientImg3,ClientImg4,ClientImg5]
    return (
        <section className=" lg:flex  md:flex xl:flex 2xl:flex sm:flex flex-wrap justify-center   gap-16 py-40"> 
            {Clients.map((elem)=> <Client imgSrc={elem}/>)}
        </section>
    )
}
export default ClientSection;