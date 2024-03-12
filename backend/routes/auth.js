const express = require('express');
const router = express.Router();
const User = require('../models/User')
var jwt = require('jsonwebtoken');
const passport = require('passport');
const fetchUser = require('../middleware/fetchUser');


function isLoggedIn(req, res, next) {
    try {
        console.log("Toyash", req.user)
        req.user ? next() : res.json({ erre: req.user });
    } catch (error) {

    }

}

const JWT_token = "Eventio#Admin";

// router.post('/createuser', async (req, res) => {
//     try {
//         let user = await User.findOne({ 'email': "toyashpatil17@gmail.com" })
//         if (user) {
//             return res.status(400).json({ success, Error: 'User with this email already exist' })
//         }
//         // Creating User
//         user = await User.create(
//             {
//                 Email: "toyashpatil17@gmail.com",
//                 GoogleId: "councilGoogleId123",
//                 Degree: "",
//                 Branch: "",
//                 Gender: "Not Specified",
//                 Interests: [],
//                 Name: "Council Member",
//                 PhoneNumber: "111-222-3333",
//                 PhotoUrl: "https://example.com/council.jpg",
//                 RollNumber: "",
//                 Year: "",
//                 Role: "COUNCIL",
//                 About: "I am a member of the student council.",
//                 College: "Example University",
//                 isSomaiyaEmail: true,
//                 Provider: "Local",
//                 CouncilType: "Student Council",
//                 CreatedAt: "2024-02-06T12:00:00Z",
//                 UpdatedAt: "2024-02-06T12:00:00Z",
//                 isNewUser: true
//             }


//         )
//         const data = {
//             id: user.id
//         }
//         const token = jwt.sign(data, JWT_token);
//         res.json({ success: true, token })

//     } catch (error) {
//         console.error(error);
//     }
// })

// router.post('/login', async (req, res) => {
//     try {
//         let success = false;
//         const { Email } = req.body
//         let user = await User.findOne({ Email });
//         if (!user) {
//             return res.status(400).json({ success, "error": "Please login with appropriate credentials" });
//         } else {
//             if(user.Role==="ADMIN" ||user.Role==="COUNCIL" ||user.Role==="FACULTY" ){
//                 const data = {
//                 id: user.id
//             }
//             const token = jwt.sign(data, JWT_token);
//             res.json({ success: true, token })
//             }else{
//                 res.status(401).json({
//                     success:false,
//                     error:"Please Login with proper Credentials"
//                 })
//             }
//         }
//     } catch (error) {
//         console.error(error);
//     }
// })

router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/failure'
    }),
    async function (req, res) {
        // Successful authentication, redirect home.
        // console.log(res.req.user.id_token)
        const data = res.req.user;
        const decoded = jwt.decode(data.id_token)
        console.log(decoded)
        // let token = null
        // try {
        //     let success = false;
        //     let user = await User.findOne({ email: decoded.email });
        //     if (!user) {
        //         return res.status(400).json({ success, "error": "Please login with appropriate credentials" });
        //     } else {
        //         if (user.role === "ADMIN" || user.role === "COUNCIL"
        //         ) {
        //             const data = {
        //                 id: user.id
        //             }
        //             token = jwt.sign(data, JWT_token);
        //             console.log(token)
        //             // res.setHeader({ token })
        //             res.redirect("http://localhost:5173/callbackgoogle/?callback=" + token)
        //         } else {
        //             res.status(401).json({
        //                 success: false,
        //                 error: "Please Login with proper Credentials"
        //             })
        //         }
        //     }
        // } catch (error) {
        //     console.error(error);
        // }
    });

router.get('/getUser', fetchUser, async (req, res) => {
    const data = req.user;
    const userdata = await User.findById(data.id);
    res.status(200).json({ userdata });

});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            // Handle error if logout encounters an issue
            console.error('Error during logout:', err);
            return res.status(500).send('Error during logout');
        }

        // Logout successful, destroy the session
        req.session.destroy((err) => {
            if (err) {
                // Handle error if session destruction encounters an issue
                console.error('Error destroying session:', err);
                return res.status(500).send('Error destroying session');
            }

            // Session destroyed, send response to the client
            res.send('Logout successful');
            res.redirect('http://localhost:5000/')
        });
    });
});

module.exports = router;