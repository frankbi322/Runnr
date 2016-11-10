@completions.each do |completion|
  json.set! completion.id do
    json.partial 'completion', completion: completion
  end
end
