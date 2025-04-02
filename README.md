# Simple Web Application for Kubernetes

This repository contains a simple web application that can be deployed to Kubernetes. It includes:

- A frontend using Nginx to serve static content
- A Node.js backend API
- A PostgreSQL database

## Directory Structure

```
├── docker/
│   ├── backend/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── server.js
│   └── frontend/
│       ├── Dockerfile
│       └── html/
│           └── index.html
├── k8s/
│   ├── backend.yaml
│   ├── configmap.yaml
│   ├── database.yaml
│   ├── frontend.yaml
│   ├── namespace.yaml
│   └── service.yaml
└── docker-compose.yml
```

## Kubernetes Deployment

To deploy the application to Kubernetes:

```bash
# Create namespace and apply all resources
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/

# Check the status of the pods
kubectl get pods -n simple-web
```

## Docker Compose (for local development)

For local development, you can use Docker Compose:

```bash
docker-compose up -d
```

Access the application at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Troubleshooting

If your containers are not starting properly in Kubernetes, check the logs:

```bash
kubectl logs -n simple-web deployment/frontend
kubectl logs -n simple-web deployment/backend
kubectl logs -n simple-web statefulset/db
```
