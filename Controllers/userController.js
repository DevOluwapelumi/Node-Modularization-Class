const User = require('../Models/userModel');
const nodemailer = require('nodemailer')

const html = `<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
		<tbody><tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
					<tbody><tr>
						<td align="center" valign="top" background="https://designmodo.com/demo/emailtemplate/images/header-background.jpg" bgcolor="#66809b" style="background-size:cover; background-position:top;height=" 400""="">
							<table class="col-600" width="600" height="400" border="0" align="center" cellpadding="0" cellspacing="0">

								<tbody><tr>
									<td height="40"></td>
								</tr>


								<tr>
									<td align="center" style="line-height: 0px;">
										<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/logo.png" width="109" height="103" alt="logo">
									</td>
								</tr>



								<tr>
									<td align="center" style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:24px; font-weight: bold; letter-spacing: 7px;">
										EMAIL <span style="font-family: 'Raleway', sans-serif; font-size:37px; color:#ffffff; line-height:39px; font-weight: 300; letter-spacing: 7px;">TEMPLATE</span>
									</td>
								</tr>





								<tr>
									<td align="center" style="font-family: 'Lato', sans-serif; font-size:15px; color:#ffffff; line-height:24px; font-weight: 300;">
										A creative email template for your email campaigns, promotions <br>and products across different email platforms.
									</td>
								</tr>


								<tr>
									<td height="50"></td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END HEADER/BANNER -->


<!-- START 3 BOX SHOWCASE -->

		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px; border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="35"></td>
					</tr>

					<tr>
						<td align="center" style="font-family: 'Raleway', sans-serif; font-size:22px; font-weight: bold; color:#2a3a4b;">A creative way to showcase your content</td>
					</tr>

					<tr>
						<td height="10"></td>
					</tr>


					<tr>
						<td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">
							Prepare some  flat icons of your choice. You can place your content below.<br>
							Make sure it's awesome.
						</td>
					</tr>

				</tbody></table>
			</td>
		</tr>

		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9; ">
					<tbody><tr>
						<td height="10"></td>
					</tr>
					<tr>
						<td>


							<table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-about.png" width="69" height="78" alt="icon">
												</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Raleway', Arial, sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">About Us</td>
											</tr>


											<tr>
												<td height="10"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">Place some cool text here.</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>





							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>



							<table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-team.png" width="69" height="78" alt="icon">
												</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">Our Team</td>
											</tr>


											<tr>
												<td height="10"></td>
											</tr>


											<tr align="center">
													<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">Place some cool text here.</td>
											</tr>



										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>



							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>



							<table class="col3" width="183" border="0" align="right" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-portfolio.png" width="69" height="78" alt="icon">
												</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Raleway',  sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">Our Portfolio</td>
											</tr>


											<tr>
												<td height="10"></td>
											</tr>


											<tr align="center">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">Place some cool text here.</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>


						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>

			<tr>
					<td height="5"></td>
		</tr>


<!-- END 3 BOX SHOWCASE -->


<!-- START AWESOME TITLE -->

		<tr>
			<td align="center">
				<table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
					<tbody><tr>
						<td align="center" bgcolor="#2a3b4c">
							<table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
								<tbody><tr>
									<td height="33"></td>
								</tr>
								<tr>
									<td>


										<table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">

											<tbody><tr>
											<td height="18"></td>
											</tr>

											<tr>
												<td align="center">
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src="https://designmodo.com/demo/emailtemplate/images/icon-title.png" alt="img" width="156" height="136">
												</td>



											</tr>
										</tbody></table>



										<table class="col3_one" width="380" border="0" align="right" cellpadding="0" cellspacing="0">

											<tbody><tr align="left" valign="top">
												<td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#f1c40f; line-height:30px; font-weight: bold;">This title is definitely awesome! </td>
											</tr>


											<tr>
												<td height="5"></td>
											</tr>


											<tr align="left" valign="top">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height:24px; font-weight: 300;">
													The use of flat colors in web design is more than a recent trend, it is a style designers have used for years to create impactful visuals. When you hear "flat", it doesn't mean boring it just means minimalist.
												</td>
											</tr>

											<tr>
												<td height="10"></td>
											</tr>

											<tr align="left" valign="top">
												<td>
													<table class="button" style="border: 2px solid #fff;" bgcolor="#2b3c4d" width="30%" border="0" cellpadding="0" cellspacing="0">
														<tbody><tr>
															<td width="10"></td>
															<td height="30" align="center" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#ffffff;">
																<a href="#" style="color:#ffffff;">Read more</a>
															</td>
															<td width="10"></td>
														</tr>
													</tbody></table>
												</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="33"></td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END AWESOME TITLE -->


<!-- START WHAT WE DO -->

		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px;">



		<tbody><tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>
						<td align="right">


							<table class="col2" width="287" border="0" align="right" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td align="center" style="line-height:0px;">
										<img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src="https://designmodo.com/demo/emailtemplate/images/icon-responsive.png" width="169" height="138">
									</td>
								</tr>
							</tbody></table>






							<table width="287" border="0" align="left" cellpadding="0" cellspacing="0" class="col2" style="">
								<tbody><tr>
									<td align="center">
										<table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">



											<tbody><tr align="left">
												<td style="font-family: 'Raleway', sans-serif; font-size:23px; color:#2a3b4c; line-height:30px; font-weight: bold;">What we do?</td>
											</tr>

											<tr>
												<td height="5"></td>
											</tr>


											<tr>
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#7f8c8d; line-height:24px; font-weight: 300;">
													We create responsive websites with modern designs and features for small businesses and organizations that are professionally developed and SEO optimized.
												</td>
											</tr>


										</tbody></table>
									</td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END WHAT WE DO -->



<!-- START READY FOR NEW PROJECT -->

		<tr>
			<td align="center">
				<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>


						<td align="center" bgcolor="#34495e">
							<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="35"></td>
								</tr>


								<tr>
									<td align="center" style="font-family: 'Raleway', sans-serif; font-size:20px; color:#f1c40f; line-height:24px; font-weight: bold;">Ready for new project?</td>
								</tr>


								<tr>
									<td height="20"></td>
								</tr>


								<tr>
									<td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height: 1px; font-weight: 300;">
										Check out our price below.
									</td>
								</tr>


								<tr>
									<td height="40"></td>
								</tr>

							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END READY FOR NEW PROJECT -->


<!-- START PRICING TABLE -->

		<tr>
			<td align="center">
				<table width="600" class="col-600" align="center" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>
						<td>


							<table style="border:1px solid #e2e2e2;" class="col2" width="287" border="0" align="left" cellpadding="0" cellspacing="0">


								<tbody><tr>
									<td height="40" align="center" bgcolor="#2b3c4d" style="font-family: 'Raleway', sans-serif; font-size:18px; color:#f1c40f; line-height:30px; font-weight: bold;">Small Business Website</td>
								</tr>


								<tr>
									<td align="center">
										<table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">
											<tbody><tr>
												<td height="20"></td>
											</tr>

											<tr align="center" style="line-height:0px;">
												<td style="font-family: 'Lato', sans-serif; font-size:48px; color:#2b3c4d; font-weight: bold; line-height: 44px;">$150</td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>


											<tr>
												<td height="15"></td>
											</tr>



											<tr>
												<td align="center">
													<table width="100" border="0" align="center" cellpadding="0" cellspacing="0" style="border: 2px solid #2b3c4d;">
														<tbody><tr>
															<td width="10"></td>
															<td height="30" align="center" style="font-family: 'Lato', sans-serif; font-size:14px; font-weight: 300; color:#2b3c4d;">
																<a href="#" style="color: #2b3c4d;">Learn More</a>
															</td>
															<td width="10"></td>
														</tr>
													</tbody></table>
												</td>
											</tr>


										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>





							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>


							<table style="border:1px solid #e2e2e2;" class="col2" width="287" border="0" align="right" cellpadding="0" cellspacing="0">


								<tbody><tr>
									<td height="40" align="center" bgcolor="#2b3c4d" style="font-family: 'Raleway', sans-serif; font-size:18px; color:#f1c40f; line-height:30px; font-weight: bold;">E-commerce Website</td>
								</tr>


								<tr>
									<td align="center">
										<table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">
											<tbody><tr>
												<td height="20"></td>
											</tr>

											<tr align="center" style="line-height:0px;">
												<td style="font-family: 'Lato', sans-serif; font-size:48px; color:#2b3c4d; font-weight: bold; line-height: 44px;">$289</td>
											</tr>


											<tr>
												<td height="30"></td>
											</tr>



											<tr align="center">
												<td>
													<table width="100" border="0" align="center" cellpadding="0" cellspacing="0" style=" border: 2px solid #2b3c4d;">
														<tbody><tr>
															<td width="10"></td>
															<td height="30" align="center" style="font-family: 'Lato', sans-serif; font-size:14px; font-weight: 300; color:#2b3c4d;">
																<a href="#" style="color: #2b3c4d;">Learn More</a>
															</td>
															<td width="10"></td>
														</tr>
													</tbody></table>
												</td>
											</tr>


										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="20"></td>
								</tr>
							</tbody></table>

						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>


<!-- END PRICING TABLE -->


<!-- START FOOTER -->

		<tr>
			<td align="center">
				<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>
						<td align="center" bgcolor="#34495e" background="https://designmodo.com/demo/emailtemplate/images/footer.jpg" height="185">
							<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="25"></td>
								</tr>

									<tr>
									<td align="center" style="font-family: 'Raleway',  sans-serif; font-size:26px; font-weight: 500; color:#f1c40f;">Follow us for some cool stuffs</td>
									</tr>


								<tr>
									<td height="25"></td>
								</tr>



								</tbody></table><table align="center" width="35%" border="0" cellspacing="0" cellpadding="0">
								<tbody><tr>
									<td align="center" width="30%" style="vertical-align: top;">
											<a href="https://www.facebook.com/designmodo" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-fb.png"> </a>
									</td>

									<td align="center" class="margin" width="30%" style="vertical-align: top;">
										 <a href="https://twitter.com/designmodo" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-twitter.png"> </a>
									</td>

									<td align="center" width="30%" style="vertical-align: top;">
											<a href="https://plus.google.com/+Designmodo/posts" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-googleplus.png"> </a>
									</td>
								</tr>
								</tbody></table>



							</td></tr></tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>	
				</tbody></table>`

const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken")
const secret = process.env.SECRET
const cloudinary = require("cloudinary")
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const upload = (req,res) => {
  // console.log(req.body.file)
  let uploadedFile = req.body.file;

  cloudinary.v2.uploader.upload(uploadedFile, (err, result) => {
    if(err){
      console.log(err);
    }
    else{
      let myImage = result.secure_url;
      // console.log(result.secure.url);
      res.send({status : true,  message:"File uploaded successfully", myImage})
    }
  })

}

const { compare } = require("bcrypt") 
const userWelcome = (req, res) => {
    res.send('Welcome to the user route')
    console.log('welcome page');
}

const registerUser = async (req, res) => {
    // console.log("user registered");
    // console.log(req.body);
    // let user = new userModel(req.body)
    // user.save().then(() => {
    //     // console.log(user);
    //     console.log("User saved");
    //     res.send({ status: true, message: "user saved successfully" })
    // }).catch((err) => {
    //     console.log("Error creating user", err);
    //     res.send({ status: false, message: "user not saved" })
    // })
    // console.log(req.body);
    const { firstName, phone, email, password } = req.body
    const user = await userModel.findOne({ email })
    console.log(user);
    if (user) {
        res.json({
            message: "Email already exist"
        })
    } else if (!user) {
        let newUser = new userModel({ firstName, phone, email, password })
        console.log(newUser);
       await newUser.save().then(() => {
            // console.log(user);
            console.log("User saved");
            res.send({ status: true, message: "user saved successfully" })
        }).catch((err) => {
            console.log("Error creating user", err);
            res.send({ status: false, message: "user not saved" })
        })
        // console.log(req.body);
    }
}

const login = async (req, res) => {
    let { email, password } = req.body
    userModel.findOne({ email: email }).then(async (user) => {
        if (!user) return res.status(200).json({ message: "Email not found", status: false })
        const correctPass = await compare(password, user.password);
        if (!correctPass) {
            res.status(200).json({ message: "password is incorrect", status: false })
        } else {
            let token = jwt.sign({email}, secret, {expiresIn:"4h"})
            res.status(200).json({ message: 'success', status: true ,token})
        }
    })
        .catch((err) => {
            console.log("error occured", err);
        })
    // console.log(req.body);
}
const dashboard = (req, res) => {

    if (!req.headers.authorization) {
        return res.status(401).json({ status: false, message: "Authorization header missing" });
    }
    let token = req.headers.authorization.split(" ")[1]
    console.log(token);
    jwt.verify(token, secret, ((err, result) => {
        if (err) {
            res.send({ status: false, message: "wrong token" })
        }
        else {
            res.send({ status: true, message: "Success token correct", result })
        }
    }))
};


const sendMail = ()=> {

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD
    }
  });
  
  var mailOptions = {
    from: process.env.USER_EMAIL,
    to: 'olupelumi16@gmail.com',
    subject: 'Sending Email using Node.js',
    html: html
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}



module.exports = { userWelcome, registerUser, login, dashboard, upload, sendMail }