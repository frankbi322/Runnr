@users.each do |user|
  json.set! user.id do
    json.username "#{user.username}"
    json.id user.id
    json.total_completions user.total_completions
    json.total_distance user.total_distance
  end
end
