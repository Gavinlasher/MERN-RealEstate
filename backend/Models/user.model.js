import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/search?sca_esv=572214004&rlz=1C1GCEA_enUS1004US1005&sxsrf=AM9HkKmD9CVO66Bl6qFuJxvlgaW7XVk3pw:1696956523856&q=profile+image&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwiG1rbW9-uBAxVUCjQIHQqwCiMQ0pQJegQIDBAB&biw=1920&bih=931&dpr=1#imgrc=vdTYYTKIs_rlxM&imgdii=Eck3-Z1-_NVGmM",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
