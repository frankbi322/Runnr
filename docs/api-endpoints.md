# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Routes

- `GET /api/routes/`
  - Routes index
- `POST /api/routes/`
- `GET /api/routes/:routeId`
- `PATCH /api/routes/:routeId`
- `DELETE /api/routes/:routeId`

### Comments

- `GET /api/routes/:routeId/comments`
- `POST /api/routes/:routeId/comments`
- `GET /api/routes/:routeId/comments/:id`
- `PATCH /api/routes/:routeId/comments/:id`
- `DELETE /api/routes/:routeId/comments/:id`
