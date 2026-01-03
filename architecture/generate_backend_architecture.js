/**
 * Backend Architecture Diagram Generator
 *
 * This script generates a Markdown file containing a Mermaid.js diagram
 * that visualizes the architecture of the Cosmic Collisions backend system.
 *
 * The diagram includes:
 * - Client-to-server communication flow
 * - Express.js routing structure
 * - Controller interactions with database and external services
 * - Authentication and data model relationships
 *
 * Usage (from root directory):
 *   node architecture/generate_backend_architecture.js
 *
 * Output:
 *   Creates/updates backend_architecture.md in the same directory
 *
 * To modify the diagram:
 *   Edit the 'diagram' variable below with your Mermaid syntax changes,
 *   then re-run the script.
 */ 

const fs = require('fs');
const path = require('path');

// Define the Mermaid diagram content
const diagram = `graph TD
    A[Client Application] --> B[Express Server]
    B --> C[Auth Routes]
    B --> D[Leaderboard Routes]
    B --> E[Player Routes]

    C --> F[Auth Controller]
    D --> G[Leaderboard Controller]
    E --> H[Player Controller]

    F --> I[Prisma Database]
    G --> I
    H --> I

    F --> J[Nodemailer Service]
    J --> K[Email Provider]

    I --> L[PostgreSQL Database]

    subgraph "Authentication Flow"
        M[Login/Signup] --> F
        F --> N[Generate 6-digit Code]
        N --> J
    end

    subgraph "Data Models"
        O[Player Model]
        P[Leaderboard Models]
    end

    I --> O
    I --> P
`;

// Full content for the markdown file
const content = `# Backend Architecture Diagram

\`\`\`mermaid
${diagram}
\`\`\`
`;

// Write to backend_architecture.md in the same directory
const filePath = path.join(__dirname, 'backend_architecture.md');
fs.writeFileSync(filePath, content);

console.log('Generated backend_architecture.md at', filePath);