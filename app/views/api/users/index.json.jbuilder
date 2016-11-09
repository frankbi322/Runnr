@users.each do |user|
  json.set! user.id do
    json.username "#{user.username}"
    json.id user.id
    json.completed_runs user.completed_runs
    json.total_distance user.total_distance
  end
end
