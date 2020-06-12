import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
    try {
        const videos = await Video.find({});
        // await이 끝나기 전까지 render부분은 실행되지 않음.
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos });
    }
};

export const search = (req, res) => {
    const{
        query: {term: searchingBy}
    } = req;
    res.render("Search", { pageTitle: "Search", searchingBy, videos });
};
export const getUpload = (req, res) =>
    res.render("Upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
    const {
        body: { file, title, discription }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) => res.render("VideoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("EditVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("DeleteVideo", { pageTitle: "Delete Video" });