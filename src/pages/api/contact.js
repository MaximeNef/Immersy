const sgMail = require('@sendgrid/mail')
// const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
sgMail.setApiKey(process.env.IMMERSY)
async function sendEmail(req, res) {
  try {
    await sgMail.send({
      to: 'maximenef1@gmail.com', // Your email where you'll receive emails
      from: 'immersy.info@gmail.com', // your website email address here
      subject: `${
        req.body.surfaceInfo == undefined
          ? 'Une personne vous contacte avec les informations suivantes'
          : `Un "${req.body.selected}" vous contacte pour une demande de tarif concernant une ${req.body.surfaceInfo.title} ${req.body.surfaceInfo.subTitle} m²`
      }`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px; font-size: 16px;">
              <h2>Vous avez recu un e-mail de la part de :</h2>
              <p style="color:blue; "> ${req.body.nom} <span>  ${
        req.body.prenom
      }</span></p>
              <h2>  Voici mon E-mail :  </h2>
              <p style="color:blue;">✉️${req.body.mail}</p>

              <h2>Voici mon Numero de téléphone :</h2>
              <p style="color:blue;">${req.body.telephone}</p>
              ${
                req.body.entreprise == '' || req.body.entreprise == undefined
                  ? ''
                  : `<h2>Voici mon entreprise :</h2>
              <p style="color:blue;">${req.body.entreprise}</p>`
              }
              ${
                req.body.message == undefined
                  ? ''
                  : `<h2>Voici mon message :</h2>
              <p style="color:blue;">${req.body.message}</p>`
              }
              ${
                req.body.nombreBiens == '' || req.body.nombreBiens == undefined
                  ? ''
                  : `<h2>Nombres de biens :</h2>
              <p style="color:blue;">${req.body.nombreBiens}</p>`
              }
              ${
                req.body.superficie == '' || req.body.superficie == undefined
                  ? ''
                  : `<h2>Superficie totale :</h2>
              <p style="color:blue;">${req.body.superficie}</p>`
              }

              <br>

              </div>
      </body>
      </html>`,
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
