const regularUser = require("../../models/regularUser/regularUser");

exports.getUsersByMonth = async (req, res) => {
    try {
        const month = parseInt(req.query.month);

        if (isNaN(month) || month < 1 || month > 12) {
            return res.status(400).json({ message: "Invalid month parameter. Please provide a value between 1 and 12." });
        }

        // Aggregation pipeline to filter users by the month of registration and group them
        const usersByMonth = await regularUser.aggregate([
            {
                $match: {
                    $expr: {
                        $eq: [{ $month: "$createdAt" }, month]
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 }
                }
            }
        ]);

        // Return the count of users
        const userCount = usersByMonth.length > 0 ? usersByMonth[0].count : 0;
        res.status(200).json({ month, userCount });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
