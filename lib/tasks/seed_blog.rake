# lib/tasks/seed_blog.rake
namespace :db do
  namespace :seed do
    desc "Seed blog posts"
    task blog: :environment do
      load "#{Rails.root}/db/seeds/tags.rb"
      load "#{Rails.root}/db/seeds/blog_posts.rb"
    end
  end
end
