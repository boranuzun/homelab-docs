# homelab-docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This documentation site was created as part of my Bachelor’s thesis at the **[Haute école de gestion de Genève](https://www.hesge.ch/heg/)**. The project is titled:

> **Conception et déploiement automatisé d’un Operating System as Code à l’aide de pratiques Infrastructure as Code.**

The goal is to design and automate the deployment of an **Operating System as Code** environment by applying modern **Infrastructure as Code (IaC)** best practices. Everything is defined in code for version control, reproducibility, and maintainability.

## What’s Included

- Creation of a **NixOS virtual machine** on **Proxmox**
- Infrastructure management with **OpenTofu**
- Secure secrets management using **SOPS + age**
- Automated deployments via **GitHub Actions**
- Deployment of useful services in **Docker containers**

## Main Technologies

- **OpenTofu**: Terraform-compatible open-source IaC tool
- **Proxmox**: Virtualization platform for managing VMs
- **NixOS**: Declarative and reproducible Linux distribution
- **SOPS + age**: Secure and versioned secrets management
- **GitHub Actions**: CI/CD automation for deployment pipelines
- **Docker Compose**: Service orchestration for container-based apps

---

## Installation

```sh
npm install
```

## Local Development

```sh
npm run dev
```

This command starts a local development server. Most changes are reflected live without restarting the server.

## Build

```sh
npm run build
```

This command generates static content into the `dist` directory, which can be served using any static hosting service.

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. The deployment process is triggered on every push to the `main` branch.

---

This documentation serves as a technical reference for the project and may also help other students or professionals looking to build a reproducible Infrastructure as Code setup
