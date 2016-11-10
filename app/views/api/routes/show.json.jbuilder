
json.partial! '/api/routes/route', route: @route
json.comments collection:@route.comments, partial: '/api/comments/comment', as: :comment
