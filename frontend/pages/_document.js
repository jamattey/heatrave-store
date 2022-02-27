import { ServerStyleSheets } from '@material-ui/core';
import Document, { Html, NextScript } from 'next/document';
import React from 'react';
export default class MyDocument extends Document {
    render(){
        <Html lang="en">
            <Head></Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
 }

 MyDocument.getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheets();
    const OriginalRenderPage = ctx.renderPage;
    ctx.renderPage = () => {
        originalRenderPage({
            enhanceApp: (App) = (props) => sheet.collect(<App {...props} />),

        });
    };
    const getInitialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ]
    }
 }