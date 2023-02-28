import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
    Scene,
    Assets,
    AssetItem,
    Entity,
    Camera,
} from "@belivvr/aframe-react";

const ContainerStyled = styled.div`
    width: 500px;
    height: 500px;
    border: 1px solid #eee;
`;

interface ModelContainerProps {
    modelName: string;
}

function ModelContainer({ modelName }: ModelContainerProps) {
    // const [rendered, setRendered] = useState<boolean>(false);

    // useEffect(() => {
    //     setRendered(true);

    //     if (typeof window !== "undefined") {
    //         require("aframe"); // eslint-disable-line global-require
    //     }
    // }, [setRendered]);

    // if (!rendered) {
    //     return <>loading</>;
    // }

    const cameraLookConfig = {
        enabled: true,
        mouseEnabled: true, // 2d 모드에서 마우스를 사용해서 카메라를 움직일 지 여부
        reverseMouseDrag: false, // 마우스 끌기 반전 여부
        reverseTouchDrag: true, // 터치 드래그 반전 여부
        magicWindowTrackingEnabled: false, // 모바일 장치에서 자이로스코프 카메라 추적 활성화(?)
        pointerLockEnabled: false, // 커서 숨기기
        touchEnabled: true, // 매직 윈도우 모드에서 터치 컨트롤 사용 여부
    };

    return (
        <ContainerStyled>
            <Scene embedded={true}>
                <Camera
                    lookControls={cameraLookConfig}
                    wasdControls={{ fly: true, acceleration: 200 }}
                />

                <Assets>
                    <AssetItem
                        id={`${modelName}-obj`}
                        src={`/models/${modelName}/${modelName}.obj`}
                    />
                    <AssetItem
                        id={`${modelName}-mtl`}
                        src={`/models/${modelName}/${modelName}.mtl`}
                    />
                </Assets>

                <Entity
                    objModel={{
                        obj: `#${modelName}-obj`,
                        mtl: `#${modelName}-mtl`,
                    }}
                />
            </Scene>
        </ContainerStyled>
    );
}

export { ModelContainer };
