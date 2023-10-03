import React, { FC } from 'react';
import { HeroWrap } from "@site/src/components/hero/style";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from '@theme/ThemedImage'
import ReactTypingEffect from 'react-typing-effect';
import Button from '../style/button';

const Hero: FC = () => {
    return (
        <HeroWrap>
            <h1> Hackadia Blog </h1>
            <ReactTypingEffect
                text={["Hackadia Blog'una Hoşgeldiniz.."]}
                cursorRenderer={cursor => <h2>{cursor}</h2>}
                displayTextRenderer={(text, i) => {
                    return (
                        <h2>
                            {text.split('').map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span
                                        key={key}
                                    >{char}</span>
                                );
                            })}
                        </h2>
                    );
                }}
            />

            <Button
                type="contained"
                shape="circle"
                size="large"
                style={{
                    marginTop: 12
                }}
                to="/blog"
            >
                Hemen 👇 Oku
            </Button>

            <ThemedImage
                sources={{
                    light: useBaseUrl('/img/light.jpg'),
                    dark: useBaseUrl('/img/dark.jpg')
                }}
                alt="" />
        </HeroWrap>
    );
};

export default Hero;
