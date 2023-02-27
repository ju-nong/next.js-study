import type { NextPage } from "next";

import React, { useEffect, useState } from "react";
import {
    Scene,
    Box,
    Sphere,
    Cylinder,
    Plane,
    Sky,
    ObjModel,
    Assets,
    AssetItem,
    Entity,
    Image,
    Camera,
    GLTFModel,
} from "@belivvr/aframe-react";

const Home: NextPage = () => {
    const [rendered, setRendered] = useState<boolean>(false);

    useEffect(() => {
        setRendered(true);

        if (typeof window !== "undefined") {
            require("aframe"); // eslint-disable-line global-require
        }
    }, [setRendered]);

    if (!rendered) {
        return <>loading</>;
    }

    const cameraLookConfig = {
        enabled: true,
        mouseEnabled: true, // 2d 모드에서 마우스를 사용해서 카메라를 움직일 지 여부
        reverseMouseDrag: false, // 마우스 끌기 반전 여부
        reverseTouchDrag: false, // 터치 드래그 반전 여부
        magicWindowTrackingEnabled: false, // 모바일 장치에서 자이로스코프 카메라 추적 활성화(?)
        pointerLockEnabled: false, // 커서 숨기기
        touchEnabled: false, // 매직 윈도우 모드에서 터치 컨트롤 사용 여부
    };

    return (
        <Scene>
            {/* <Assets>
                <AssetItem id="tectonic-obj" src="tectonic.obj" />
                <AssetItem id="tectonic-mtl" src="tectonic.mtl" />
            </Assets>

            <Entity
                objModel={{
                    obj: "#tectonic-obj",
                    mtl: "#tectonic-mtl",
                }}
            /> */}

            {/* <Assets>
                <AssetItem id="vase-obj" src="vase.obj" />
                <AssetItem id="vase-mtl" src="vase.mtl" />
            </Assets>
            
            <Entity
                objModel={{
                    obj: "#vase-obj",
                    mtl: "#vase-mtl",
                }}
            />
            */}

            {/* <Assets>
                <AssetItem id="Optional2-obj" src="Optional2.obj" />
                <AssetItem id="Optional2-mtl" src="Optional2.mtl" />
                <AssetItem id="Optional1-obj" src="Optional1.obj" />
                <AssetItem id="Optional1-mtl" src="Optional1.mtl" />
                <AssetItem id="Couch-obj" src="Couch.obj" />
                <AssetItem id="Couch-mtl" src="Couch.mtl" />
            </Assets>

            <Entity
                objModel={{
                    obj: "#Optional2-obj",
                    mtl: "#Optional2-mtl",
                }}
            />
            <Entity
                objModel={{
                    obj: "#Optional1-obj",
                    mtl: "#Optional1-mtl",
                }}
            />
            <Entity
                objModel={{
                    obj: "#Couch-obj",
                    mtl: "#Couch-mtl",
                }}
            /> */}

            <Camera
                lookControls={cameraLookConfig}
                wasdControls={{ fly: true, acceleration: 200 }}
            />

            <GLTFModel id="model" src="/sofa/sofa_03_4k.gltf" />

            <Entity gltfModel="#model" />

            {/* <Entity gltfModel="#model">
                <Entity
                    material={{
                        src: "#texture1",
                    }}
                />
                <Entity
                    material={{
                        src: "#texture2",
                    }}
                />
                <Entity
                    material={{
                        src: "#texture3",
                    }}
                />
            </Entity> */}

            {/* <Box
                position={{ x: -1, y: 0.5, z: -3 }}
                rotation={{ x: 0, y: 45, z: 0 }}
                color="#4CC3D9"
            />
            <Sphere
                position={{ x: 0, y: 1.25, z: -5 }}
                radius={1.25}
                color="#EF2D5E"
            />
            <Cylinder
                position={{ x: 1, y: 0.75, z: -3 }}
                radius={0.5}
                height={1.5}
                color="#FFC65D"
            />
            <Plane
                position={{ x: 0, y: 0, z: -4 }}
                rotation={{ x: -90, y: 0, z: 0 }}
                width={4}
                height={4}
                color="#7BC8A4"
            />
            <Sky color="#ECECEC" /> */}
        </Scene>
    );
};

export default Home;
