# Backend Architecture Diagram

```mermaid
graph TD
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
```</content>
<parameter name="filePath">c:\Users\eddie\OneDrive\Documents\Web Projects\cosmic-server\architecture\backend_architecture.md