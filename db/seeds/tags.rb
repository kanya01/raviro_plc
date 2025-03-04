# frozen_string_literal: true

tags = [
  { id: 1, name: "Research" },
  { id: 2, name: "Best Practices" },
  { id: 3, name: "Policy" }
]

tags.each do |tag_data|
  Tag.create!(tag_data)
  puts "Created tag: #{tag_data[:name]}"
end
