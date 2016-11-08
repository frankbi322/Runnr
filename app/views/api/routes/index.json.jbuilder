@routes.each do |route|
  json.set! route.id do
    json.id route.id
    json.name route.name
    json.description route.description
    json.author_id route.author_id
    json.author_name "#{route.author.username}"
    json.distance route.distance
    json.coordinates route.coordinates
    json.comments route.comments
    json.map_url route.map_url

  end
end
