import aiService from "../services/ai.service.js";

export const getReviewFromAI = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await aiService(code);
    res.send({ response });
  } catch (error) {
    console.error("Controller error:", error);
    res.status(500).send("Internal Server Error");
  }
};
