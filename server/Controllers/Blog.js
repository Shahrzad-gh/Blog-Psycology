const Blog = require("../Models/Blog");
const cloudinary = require("../utils/cloudinary");

module.exports.editBlog_put = async (req, res) => {
  let headerPhoto = { img: "", id: "" };
  let aboutPhoto = { img: "", id: "" };
  console.log(req.body);
  const { about, id, name, title, subTitle, instagram, facebook, twitter } =
    req.body;
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_APISECRET,
  });
  try {
    const blog = await Blog.findById(id);

    if (res.locals.user.role === "admin") {
      try {
        if (req.files.lenght !== undefined) {
          const headerrResult = await cloudinary.uploader.upload(
            req.files[0].path
          );
          headerPhoto.img = headerrResult.secure_url;
          headerPhoto.id = headerrResult.public_id;
          const aboutResult = await cloudinary.uploader.upload(
            req.files[1].path
          );
          aboutPhoto.img = aboutResult.secure_url;
          aboutPhoto.id = aboutResult.public_id;
        } else {
          headerPhoto = { img: blog.headerPhoto.img, id: blog.headerPhoto.id };
          aboutPhoto = { img: blog.aboutPhoto.img, id: blog.aboutPhoto.id };
        }
        const newBlog = await Blog.findByIdAndUpdate(
          id,
          {
            $set: {
              title,
              subTitle,
              name,
              about,
              headerPhoto,
              aboutPhoto,
              socialLinks: {
                instagram,
                facebook,
                twitter,
              },
            },
          },
          { new: true }
        );
        console.log(newBlog);
        res.status(201).json(newBlog);
      } catch (error) {
        // const err = handleError(error);
        console.log(error);

        res.status(500).json(err);
      }
    } else {
      res.status(401).json("Only Admin can update Blog.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports.getBlog_get = async (req, res) => {
  try {
    const blog = await Blog.findOne({});
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
