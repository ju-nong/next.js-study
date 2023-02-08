import type { NextApiRequest, NextApiResponse } from "next";
import api from "api";

async function slug(req: NextApiRequest, res: NextApiResponse) {
    const response = await api.get("/cat/gif");
    res.status(200).send(response.data);
}

export { slug as default };
