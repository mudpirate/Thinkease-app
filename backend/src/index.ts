import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import type { Request, Response } from "express";
import { serve } from "inngest/express";
import { inngest } from "./inngest";
import { errorHandler } from "./middleware/errorHandler";
import { logger } from "./utils/logger";
import { functions as inngestFunctions } from "./inngest/functions";
import { connectDB } from "./utils/db";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(morgan("dev")); // HTTP request logger

app.use(
  "/api/inngest",
  serve({ client: inngest, functions: inngestFunctions })
);

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

app.use(errorHandler);
// Start server
const startServer = async () => {
  try {
    // Connect to MongoDB first
    connectDB();
    // Then start the server
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
      logger.info(
        `Inngest endpoint available at http://localhost:${PORT}/api/inngest`
      );
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
