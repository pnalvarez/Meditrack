import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';

export default (props)=>{

    return(
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
            </Head>
            <div>
                <Header/>
                {props.children}
                <Container>
                    <h1>oi</h1>
                    <h2>oi</h2>
                    <h3>oi</h3>
                </Container>

                <Container floated="right">
                    <h1>oi</h1>
                    <h1>oi</h1>

                </Container>
            </div>
        </Container>
    );
}