import { generateContent } from "../services/gemini.service.js";

export const getResult = async (req, res) => {
    try {
        const { prompt } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const result = await generateContent(prompt);

        if (!result) {
            return res.status(500).json({ error: "Failed to generate content" });
        }

        res.json({ success: true, content: result });
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
