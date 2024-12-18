import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const app = express();
app.use(cors());

// Serve static files from the original project directories
app.use('/0JScode', express.static(join(projectRoot, '0JScode')));
app.use('/0JSquiz', express.static(join(projectRoot, '0JSquiz')));
app.use('/0JSimg', express.static(join(projectRoot, '0JSimg')));

// Log requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Handle all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving files from:`);
  console.log(`- ${join(projectRoot, '0JScode')}`);
  console.log(`- ${join(projectRoot, '0JSquiz')}`);
  console.log(`- ${join(projectRoot, '0JSimg')}`);
});
