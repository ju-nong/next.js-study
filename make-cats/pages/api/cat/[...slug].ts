import type { NextApiRequest, NextApiResponse } from "next";

function slugs(req: NextApiRequest, res: NextApiResponse) {
    console.log("slugs");
    res.status(200).json({});
}

export { slugs as default };
