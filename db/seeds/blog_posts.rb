# frozen_string_literal: true

# db/seeds/blog_posts.rb

# Clear existing posts if needed
# BlogPost.destroy_all

# Create sample blog posts
posts = [
  {
    title: "Implementation Research Explained: Bridging the Know-Do Gap",
    slug: "implementation-research-explained",
    excerpt: "Learn how implementation research is transforming the way we approach public health challenges in resource-limited settings.",
    content: "Despite decades of public health research generating valuable evidence, a persistent gap remains between what we know works and what is actually implemented in real-world settings. This disconnect, often called the ""know-do gap,"" is particularly pronounced in developing regions where resources are limited and systems are fragile.\n\nImplementation research has emerged as a critical discipline to address this challenge. But what exactly is implementation research, and why is it so essential for global health advancement?",
    category: "Research",
    author: "Dr. Lucy Kanya",
    read_time: 6,
    published: true,
    published_at: 2.days.ago,
    tag_id: 1
  },
  {
    title: "Five Ways to Improve Evidence-Based Practice in Global Health",
    slug: "evidence-based-practices",
    excerpt: "Practical strategies for public health professionals to integrate research findings into their daily practice.",
    content: "Evidence-based practice is essential for effective public health interventions, but implementing research findings in real-world settings remains challenging. This article explores five practical approaches to bridge the gap between evidence and practice.",
    category: "Best Practices",
    author: "Flo Thungu",
    read_time: 8,
    published: true,
    published_at: 2.weeks.ago,
    tag_id: 2
  },
  {
    title: "Knowledge Translation: Moving from Research to Policy",
    slug: "knowledge-translation",
    excerpt: "Exploring the critical process of transforming research evidence into effective policy changes in developing regions.",
    content: "Knowledge translation is the process of moving research findings into practical applications that impact policy and practice. This article explores effective strategies for researchers and policymakers.",
    category: "Policy",
    published: true,
    published_at: 3.weeks.ago,
    read_time: 7,
    tag_id: 3
  }
]

posts.each do |post_data|
  BlogPost.create!(post_data)
  puts "Created blog post: #{post_data[:title]}"
end
