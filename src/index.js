const { createWorker } = require("tesseract.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const fs = require("fs");

require("dotenv").config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());

app.post("/upload", upload.single("file"), async (req, res) => {
    const filePath = req.file.path;
    const fileType = req.file.mimetype;
    try {
        let extractedText;
        if (fileType === "application/pdf") {
            // Process PDF
            const filePath = req.file.path;
            const dataBuffer = fs.readFileSync(filePath);
            const pdfData = await pdfParse(dataBuffer);
            extractedText = pdfData.text;
        } else if (fileType.startsWith("image/")) {
            // Process Image
            extractedText = await parse(filePath);
        } else {
            res.status(400).send("Unsupported file type");
        }

        const extractedInfo = await extractInfoWithGemini(extractedText);
        res.json({ extractedInfo });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing the invoice");
    }
});

async function extractInfoWithGemini(text) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent([
            `Extract customer details, product, and total amount from the following text:\n\n${text}`,
        ]);
        return result.response.text();
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw error;
    }
}

async function parse(filePath) {
    const worker = await createWorker("eng");
    const ret = await worker.recognize(filePath);
    const text = ret.data.text;
    await worker.terminate();
    return text;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
