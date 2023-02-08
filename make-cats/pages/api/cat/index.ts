import type { NextApiRequest, NextApiResponse } from "next";

function index(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;
    console.log(slug);
    res.status(200).json({});
}

export { index as default };
