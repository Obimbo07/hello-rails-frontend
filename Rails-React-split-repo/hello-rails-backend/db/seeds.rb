# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# Array of sample messages
sample_messages = [
  'Hello, world!',
  'Welcome to our app!',
  'Greetings from Rails API!',
  'Nice to meet you!',
  'Have a great day!'
]

# Loop through each sample message and create a message record
sample_messages.each do |message|
  Message.create(content: message)
end
