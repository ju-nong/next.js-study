import React, { useState } from "react";
import styled from "@emotion/styled";
import { bgChange, colorChange } from "@/styles";
import axios from "axios";

const HomeContainer = styled.main`
    max-width: 700px;
    height: calc(100vh - 53px);
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`;

const ProfileContainer = styled.div`
    @keyframes loading {
        0% {
            transform: translateX(-150%);
        }
        50% {
            transform: translateX(-60%);
        }
        100% {
            transform: translate(150%);
        }
    }

    display: flex;
    text-align: center;
    flex-direction: column;

    & > .avatar {
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.9);
        max-width: 200px;
        max-height: 200px;
        width: 200px;
        height: 200px;
        cursor: pointer;
    }

    & > img {
        object-fit: cover;
    }

    & > div.avatar {
        position: relative;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.3);

        .shimmer-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            animation: loading 1s infinite;

            .shimmer {
                width: 50%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.05);
                transform: skewX(-20deg);
                box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.05);
            }
        }
    }
`;

const NamesContainer = styled.div`
    padding: 16px 0;
    cursor: pointer;

    & > h2 {
        color: white;
        line-height: 1.25;
        ${colorChange("white")}
    }

    & > p {
        color: #a0abb8;
        ${colorChange("#a0abb8")}
    }
`;

const ProfileLink = styled.button`
    background-color: #f6f8fa;
    font-weight: bold;
    padding: 5px 16px;
    border-radius: 6px;
    border: 1px solid #dadcde;
    cursor: pointer;

    ${bgChange("#f6f8fa")}
`;

const BASE = "https://cataas.com";

function Home() {
    const [imgSrc, setImgSrc] = useState(
        "https://avatars.githubusercontent.com/u/81794712?v=4",
    );

    const [loading, setLoading] = useState(false);

    const handleChangeImg = async () => {
        if (loading) {
            return;
        }

        setLoading((loading) => !loading);

        const {
            data: { url },
        } = await axios.get(`${BASE}/cat?json=true`);

        setImgSrc(`${BASE}${url}`);

        setTimeout(() => {
            setLoading((loading) => !loading);
        }, 2000);
    };

    const handleLink = () => {
        window.open("https://github.com/ju-nong");
    };

    return (
        <HomeContainer>
            <ProfileContainer>
                <div className={`avatar ${loading ? "" : "none"}`}>
                    <div className="shimmer-wrapper">
                        <div className="shimmer"></div>
                    </div>
                </div>
                <img
                    src={imgSrc}
                    alt="ju-nong"
                    className={`avatar ${loading ? "none" : ""}`}
                    onClick={handleChangeImg}
                />
                <NamesContainer onClick={handleChangeImg}>
                    <h2>leeJunyong</h2>
                    <p>ju-nong</p>
                </NamesContainer>

                <ProfileLink onClick={handleLink}>Visit Github</ProfileLink>
            </ProfileContainer>
            {/* <img src="https://cataas.com/cat" /> */}
        </HomeContainer>
    );
}

export { Home as default };
