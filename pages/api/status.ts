import type { NextApiRequest, NextApiResponse } from "next";

// // // //

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    const { method } = req;

    try {
        switch (method) {
            // GET /api/status
            case "GET":
                res.status(200).json({
                    status: "live"
                });
                break;
            default:
                res.setHeader("Allow", ["GET"]);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (e) {
        res.status(500).end(`Something went wrong`);
    }
}
