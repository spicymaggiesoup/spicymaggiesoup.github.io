/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application strings into before sending it to the client.
 */

 const Html = ({ body, styles, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`

export default Html