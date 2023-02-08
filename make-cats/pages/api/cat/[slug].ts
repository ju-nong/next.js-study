import type { NextApiRequest, NextApiResponse } from "next";
import api from "api";

async function slug(req: NextApiRequest, res: NextApiResponse) {
    const response = await api.get("/cat/gif?json=true");
    res.status(200).json(response.data);
}

export { slug as default };
