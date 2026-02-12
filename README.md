# 📁 Project Structure

- **`/frontend`**: Next.js application managed by **Bun**.
- **`/backend`**: Python API managed by **uv**.

---

## 🚀 Getting Started

### 1. Backend Setup (Python + uv)

Ensure you have [uv](https://github.com/astral-sh/uv) and [bun](https://bun.com/docs) installed.

```bash
# Navigate to backend
cd backend

# Install dependencies and create virtual environment
uv sync

# Run the application
uv run main.py

# Navigate to frontend
cd frontend

# Install dependencies
bun install

# Start the development server
bun dev
```
