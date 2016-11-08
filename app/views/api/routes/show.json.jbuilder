
json.partial! '/api/routes/route', route: @route
json.partial! '/api/comments/comment', comments: @route.comments
