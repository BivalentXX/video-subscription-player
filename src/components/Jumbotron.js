import React from 'react'
import { Piece, Container, Contents, Panel, Title, SubTitle, Image } from './styles/jumbotronStyle'

export default function Jumbotron({ children, direction = 'row', ...props }) {
    return (
        <Piece {...props}>
            <Container direction={direction}>
             {children}
            </Container>
        </Piece>
    )
}

Jumbotron.Contents = function JumbotronContents({ children, ...props }) {
    return <Contents { ...props}>{children}</Contents>;
}

Jumbotron.Panel = function JumbotronPanel({ children, ...props }) {
    return <Panel { ...props}>{children}</Panel>;
}

Jumbotron.Title = function JumbotronTitle({ children, ...props }) {
    return <Title { ...props}>{children}</Title>;
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props }) {
    return <SubTitle { ...props}>{children}</SubTitle>;
}

Jumbotron.Image = function JumbotronImage({...props }) {
    return <Image { ...props}></Image>;
}