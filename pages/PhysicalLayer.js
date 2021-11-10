import LayerComponent from "../components/Layer";

export default function PhysicalLayer() {
    const functionData =[
        {
            name:"Bit-by-bit or symbol-by-symbol delivery"
        },{
            name:"Modulation"
        },{
            name:"Line coding"
        },{
            name:"Bit synchronization"
        },{
            name:"Start-stop signalling"
        },{
            name:"Multiplexing"
        },{
            name:"Carrier sense and collision detection"
        },{
            name:"Physical network topology, like bus, ring, mesh or star network"
        },
    ]
  return (
    <section>
      <LayerComponent
        layername={1}
        layerLink={`/`}
        layertitle={`Physical Layer`}
        backgroundcolor={`bg-physicallayer`}
      />
      <main className="grid xl:grid-cols-3 gap-2 grid-cols-1">
        <articel className="flex flex-col">
          <p className="my-2 text-lg ">
            The physical layer is the most fundamental. This layer offers
            mechanical, electrical, and other functional assistance that may be
            enabled or disabled, as well as the ability to preserve and
            communicate information about physical connections. Electrical
            transmissions, optical signals (optical fibre, laser),
            electromagnetic waves (wireless networks), or sound are examples.
            The procedures employed are referred to as the technical
            transmission process. Devices and network components connected with
            the physical layer, such as the antenna and amplifier, network cable
            connector and socket, repeater, stroke, transceiver, T-bar, and
            terminator, are examples (Terminator).
          </p>
          <p className="my-2 text-lg ">
            Its physical layer digital bit transfer occurs across a wireline or
            cable-free transmission route. Static multiplexing and dynamic
            multiplexing can be used on this tier to share a transmission
            medium. This necessitates not only the specification of specific
            transmission media (for example, copper cable, fibre optic cable,
            and power grid) but well as the defining of connections.
            Furthermore, at this level, it must be determined how a single bit
            will be sent.
          </p>
          <p className="my-2 text-lg ">
            In today's computer networks, data is often sent in the form of bit
            or symbol sequences. However, in copper cables and radio
            transmission, the information carrier is modulated high frequency
            electromagnetic waves, but in optical waveguide light waves of a
            certain wavelength or a different wavelength are used. The
            information carrier is not aware of bit strings, but it can take
            many more states than just 0 or 1. Encoding must consequently be
            established for each sort of communication. This is due to the
            physical layer of a network's definition.
          </p>
        </articel>
        <articel>
          <ul className="list-disc list-inside bg-rose-200">
            <h1 className="text-3xl font-medium">Function</h1>
            <>{functionData.map((n)=> {
                return(
                   <li className="text-xl">{n.name}</li>
                )
            } )} </>
          </ul>
        </articel>
        <articel></articel>
      </main>
    </section>
  );
}
