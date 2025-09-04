# Automated Deployment Setup

This document explains how to set up automated deployment for the Scaffold-Stylus docs to GitHub Pages using GitHub Actions.

## Available Deployment Options

We provide two GitHub Actions workflows for deployment:

### Option 1: Modern GitHub Pages Deployment (`deploy.yml`)
This uses the modern GitHub Pages deployment API and is the recommended approach.

**Features:**
- Uses GitHub's official Pages deployment action
- No SSH keys required
- Automatic artifact management
- Better security and reliability

### Option 2: SSH-based Deployment (`deploy-ssh.yml`)
This replicates your current manual deployment process using `USE_SSH=true npm run deploy`.

**Features:**
- Uses the same command as your manual deployment
- Requires SSH key setup
- Direct git push to gh-pages branch

## Setup Instructions

### For Option 1 (Recommended - Modern Deployment)

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **No additional secrets required** - the workflow uses the built-in `GITHUB_TOKEN`

### For Option 2 (SSH-based Deployment)

1. **Generate SSH Key:**
   ```bash
   ssh-keygen -t ed25519 -C "github-actions@your-repo" -f deploy_key
   ```

2. **Add Public Key to Repository:**
   - Copy the content of `deploy_key.pub`
   - Go to repository Settings → Deploy keys
   - Add new deploy key with write permissions
   - Paste the public key content

3. **Add Private Key as Secret:**
   - Copy the content of `deploy_key` (private key)
   - Go to repository Settings → Secrets and variables → Actions
   - Add new repository secret named `DEPLOY_SSH_KEY`
   - Paste the private key content

4. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder

## Workflow Triggers

Both workflows are triggered by:
- Push to `main` branch
- Push to `feat/update-docs` branch
- Manual workflow dispatch (workflow_dispatch)

## Repository Configuration

The deployment is configured in `docusaurus.config.js`:
- **Organization:** `Arb-Stylus`
- **Project:** `scaffold-stylus-docs`
- **Base URL:** `/scaffold-stylus-docs/`
- **Production URL:** `https://docs.scaffoldstylus.io`

## Troubleshooting

### Common Issues

1. **Permission Denied (SSH):**
   - Ensure the SSH key has write permissions
   - Verify the private key is correctly stored in secrets

2. **Build Failures:**
   - Check Node.js version compatibility (requires Node 18+)
   - Verify all dependencies are properly installed

3. **Deployment Not Triggering:**
   - Ensure the workflow file is in the correct branch
   - Check if GitHub Pages is properly configured

### Manual Deployment

If you need to deploy manually, you can still use:
```bash
USE_SSH=true npm run deploy
```

## Security Notes

- The SSH key should only have access to this specific repository
- Consider using a dedicated GitHub account for deployment if needed
- Regularly rotate SSH keys for security

## Monitoring

- Check the "Actions" tab in your GitHub repository to monitor deployment status
- Failed deployments will show detailed error logs
- Successful deployments will be visible in the Pages settings
