[![Nuxt](https://img.shields.io/badge/Nuxt-4.0%2B-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0%2B-2D3748?logo=prisma)](https://www.prisma.io/)
[![MultiDB](https://img.shields.io/badge/Database-PostgreSQL%2C%20MySQL%2C%20MongoDB-4169E1)]()


# Nuxt 4 Multi-DB Prisma Starter Bridge
>A starter template for Nuxt 4 applications using Prisma ORM with support for multiple databases (Post
greSQL, MySQL, MongoDB).


## Features
- **Nuxt 4**: Latest version of Nuxt.js for building modern web applications
- **Prisma ORM**: Powerful ORM for Node.js and TypeScript, supporting multiple databases
- **Multi-Database Support**: Easily switch between PostgreSQL, MySQL, and MongoDB
- **TypeScript**: Full TypeScript support for type safety and better developer experience
- **Prisma Client**: Auto-generated client for database operations
- **Environment Configuration**: Easy setup with `.env` files for different environments        
- **API Routes**: Built-in API routes for handling server-side logic

## Getting Started
### Prerequisites
- Node.js (v24 or later)
- npm or yarn
- A database server (PostgreSQL, MySQL, or MongoDB)
### Installation

🔄 Database-Specific Notes
Database	File Type	Execution Method
PostgreSQL	.sql	Executed by initdb on first startup
MySQL	.sql	Runs in alphabetical order
MongoDB	.js	Executed by mongosh on initialization




if not exist
mkdir -p docker-volumes/{postgres,mysql,mongodb}/{data,init}
docker-compose up -d



🐳 Docker Installation Script
This automated script installs the latest Docker Engine and Docker Compose on Ubuntu systems.

✅ Verified Compatibility
Ubuntu Version	Status	Notes
25.04	✅ Fully supported	Uses native Docker packages
24.04 LTS	✅ Fully supported	Recommended for production
22.04 LTS	✅ Fully supported	Long-term support
20.04 LTS	⚠️ Supported	Requires manual repository configuration
🛠 Installation Script
bash
#!/bin/bash

# -----------------------------------------------------------------------------
# Docker Installation Script for Ubuntu
# -----------------------------------------------------------------------------

# 1. Remove legacy Docker packages if they exist
sudo apt remove docker docker-engine docker.io containerd runc -y

# 2. Update system packages and install prerequisites
sudo apt update
sudo apt install -y ca-certificates curl gnupg

# 3. Configure Docker's official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# 4. Add Docker's apt repository (automatically detects Ubuntu version)
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
| sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 5. Install Docker components
sudo apt update
sudo apt install -y \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    docker-buildx-plugin \
    docker-compose-plugin

# 6. Configure user permissions
sudo usermod -aG docker $USER
newgrp docker  # Refresh group permissions without logout

# Verification
docker --version
docker compose version
🔍 Post-Installation Checks
bash
# Verify Docker Engine is running
sudo systemctl status docker

# Test Docker installation
docker run hello-world
🚨 Troubleshooting
Permission denied errors:

bash
sudo chown $USER /var/run/docker.sock
Repository errors on Ubuntu 20.04:

bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update
📝 Best Practices
Always review scripts before execution

For production systems, pin specific Docker versions

Consider using Docker's convenience script for edge cases:

bash
curl -fsSL https://get.docker.com | sh








