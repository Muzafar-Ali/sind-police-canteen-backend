import app from "./app.js";
import config from "./config/config.js";

async function startServer() {
  try {
 
    app.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();