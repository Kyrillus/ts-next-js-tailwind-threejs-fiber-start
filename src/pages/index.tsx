import {Canvas} from "@react-three/fiber";
import * as React from 'react';

import Seo from '@/components/Seo';
import Box from "@/components/threejs/Box";

export default function HomePage() {
    return (
        <>
            <Seo templateTitle='Home'/>

            <main>
                <section className='bg-white flex items-center justify-center h-screen'>
                    <Canvas>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Box position={[-1.2, 0, 0]} />
                        <Box position={[1.2, 0, 0]} />
                    </Canvas>
                </section>
            </main>
        </>
    );
}
