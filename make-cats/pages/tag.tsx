import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "@/store";
import { useQuery } from "react-query";
import { setTags } from "@/store/tags/reducer";
import { Tags } from "@/store/tags/types";
import { TagButton } from "@/components/TagButton";
import Flicking from "@egjs/react-flicking";
import { Fade } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

import styled from "@emotion/styled";

const fetchData = async (): Promise<AxiosResponse<Tags>> =>
    axios.get("https://cataas.com/api/tags");

const useGetTags = () => useQuery("tagList", fetchData);

const TagContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TagList = styled.ul`
    display: flex;
    padding-left: 1rem;
    flex-wrap: wrap;
    max-width: 500px;
    max-height: 105px;
    overflow-y: scroll;
    margin: 30px 0px 60px 0px;

    & > li {
        display: inline-block;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90vw;
    min-width: 200px;
    height: 30vh;
    margin-bottom: 30px;
    overflow-x: hidden;

    & > .flicking-viewport {
        height: 100%;
    }
    & > .flicking-viewport > .flicking-camera {
        cursor: pointer;
        height: 100%;
    }
`;

const ImageStyled = styled.img`
    height: 100%;
    pointer-events: none;
    margin-right: 1rem;
    border-radius: 3rem;
`;

const Loading = styled.div`
    &,
    &:after {
        border-radius: 50%;
        width: 10em;
        height: 10em;
    }
    & {
        font-size: 10px;
        position: absolute;
        text-indent: -9999em;
        border-top: 1.1em solid rgba(255, 255, 255, 0.2);
        border-right: 1.1em solid rgba(255, 255, 255, 0.2);
        border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
        border-left: 1.1em solid #ffffff;
        transform: translateZ(0);
        animation: load8 1.1s infinite linear;
    }

    @-webkit-keyframes load8 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes load8 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const BASE = "https://cataas.com";

function Tag() {
    const plugins = [new Fade("", 1)];

    const { tags } = useSelector((state: AppState) => state.tagsStore);
    const dispatch = useDispatch();

    const { data: tagsResponse } = useGetTags();
    const tagsData = tagsResponse?.data;

    const [nowTag, setNowTag] = useState("");
    const [load, setLoad] = useState(true);

    const [links, setLinks] = useState([]);

    const handleCats = async () => {
        try {
            const { data } = await axios.get(
                `${BASE}/api/cats?tags=${nowTag}`,
                {
                    timeout: 3000,
                },
            );

            setLinks(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setNowTag(`${event.target.value}`);
        } else {
            setNowTag("");
        }

        setLoad(false);
    };

    const onLoad = () => {
        setLoad(true);
    };

    useEffect(() => {
        if (tagsData) {
            dispatch(
                setTags(
                    tagsData.filter(
                        (tag) => !tag.includes("#") && !tag.includes(" "),
                    ),
                ),
            );
        }

        if (nowTag != "") {
            handleCats();
        }
    }, [dispatch, tagsData, nowTag]);

    return (
        <TagContainer>
            <TagList>
                {tags.map((tag, index) =>
                    tag !== "" ? (
                        <li key={index}>
                            <TagButton
                                key={index}
                                text={tag}
                                onChange={handleChangeTag}
                            />
                        </li>
                    ) : null,
                )}
            </TagList>
            <ImageContainer>
                {links.length > 0 ? (
                    <Flicking plugins={plugins}>
                        {links.map((link) => (
                            <ImageStyled
                                className="flicking-panel"
                                key={link["_id"]}
                                src={`${BASE}/cat/${link["_id"]}`}
                                alt="cat"
                                onLoad={onLoad}
                            />
                        ))}
                    </Flicking>
                ) : (
                    <ImageStyled
                        src="https://cataas.com/cat"
                        alt="cat"
                        onLoad={onLoad}
                    />
                )}
                {load || <Loading />}
            </ImageContainer>
        </TagContainer>
    );
}

export { Tag as default };
