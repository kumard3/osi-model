import Head from 'next/head'
import LayerComponent from '../components/Layer'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1  text-center">
<LayerComponent 
layername={7}
layerLink={`/ApplicationLayer`}
layertitle = {`Application Layer`}
backgroundcolor={`bg-application`}

/><LayerComponent 
layername={6}
layerLink={`/PresentationLayer`}
layertitle = {`Presentation Layer`}
backgroundcolor={`bg-presentation`}

/><LayerComponent 
layername={5}
layerLink={`/SessionLayer`}
layertitle = {`Session Layer`}
backgroundcolor={`bg-session`}

/><LayerComponent 
layername={4}
layerLink={`/TransportLayer`}
layertitle = {`Transport Layer`}
backgroundcolor={`bg-transport`}

/><LayerComponent 
layername={3}
layerLink={`/NewtworkLayer`}
layertitle = {`Network Layer`}
backgroundcolor={`bg-network`}

/><LayerComponent 
layername={2}
layerLink={`/DataLinkLayer`}
layertitle = {`Data Link Layer`}
backgroundcolor={`bg-dataLinkLayer`}

/><LayerComponent 
layername={1}
layerLink={`/PhysicalLayer`}
layertitle = {`Physical Layer`}
backgroundcolor={`bg-physicallayer`}

/>
      </main>
    </div>
  )
}
