import BOOK from "../models/Bookmodel.js";
import ORDER from "../models/Ordermodel.js";


const AdminStuff = async (req, res) => {
     try {
       // 1. Total number of orders
       const totalOrders = await ORDER.countDocuments();

       // 2. Total sales (sum of all totalPrice from orders)
       const totalSales = await ORDER.aggregate([
         {
           $group: {
             _id: null,
             totalSales: { $sum: "$totalPrice" },
           },
         },
       ]);

       // 4. Trending books statistics:
       const trendingBooksCount = await BOOK.aggregate([
         { $match: { trending: true } }, // Match only trending books
         { $count: "trendingBooksCount" }, // Return the count of trending books
       ]);

       // If you want just the count as a number, you can extract it like this:
       const trendingBooks =
         trendingBooksCount.length > 0
           ? trendingBooksCount[0].trendingBooksCount
           : 0;

       // 5. Total number of books
       const totalBooks = await BOOK.countDocuments();

       // 6. Monthly sales (group by month and sum total sales for each month)
       const monthlySales = await ORDER.aggregate([
         {
           $group: {
             _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } }, // Group by year and month
             totalSales: { $sum: "$totalPrice" }, // Sum totalPrice for each month
             totalOrders: { $sum: 1 }, // Count total orders for each month
           },
         },
         { $sort: { _id: 1 } },
       ]);

       // Result summary
       res
         .status(200)
         .json({
           totalOrders,
           totalSales: totalSales[0]?.totalSales || 0,
           trendingBooks,
           totalBooks,
           monthlySales,
         });
     } catch (error) {
       console.error("Error fetching admin stats:", error);
       res.status(500).json({ message: "Failed to fetch admin stats" });
     }
}

export { AdminStuff };