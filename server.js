import app from './app.js';
import cloudinary from 'cloudinary'


cloudinary.v2.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET,
});




app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running at ${process.env.PORT}`)
})