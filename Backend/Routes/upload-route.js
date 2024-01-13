import { Router } from 'express';
import { upload } from '../Middleware/upload.js';
import ImageModel from '../DB/Model/common.js';

const router = Router();

router.get("/upload", (req, res) => {
    res.render("upload.ejs");
});

router.post("/upload", upload.single("image"), async (req, res) => {
    console.log(req.file);
    try {
        if (req.file) {
            let image = await ImageModel({
                image: req.file.path
            });
            await image.save();
        }
    } catch (e) {
        console.log(e);
    }
    res.status(200).render("upload.ejs");
});

export default router;